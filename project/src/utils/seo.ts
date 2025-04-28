import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
});

// Simple in-memory cache
const cache = new Map<string, { data: SEOSuggestion; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const RETRY_DELAYS = [1000, 2000, 4000]; // Retry delays in milliseconds

export interface SEOSuggestion {
  title: string;
  description: string;
  keywords: string[];
  improvements: string[];
}

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function tryWithRetry<T>(
  fn: () => Promise<T>,
  retries: number = RETRY_DELAYS.length
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      if (error?.status === 429 && i < retries - 1) {
        await delay(RETRY_DELAYS[i]);
        continue;
      }
      throw error;
    }
  }
  throw new Error('All retries failed');
}

export async function generateSEOSuggestions(content: string): Promise<SEOSuggestion> {
  // Check cache first
  const cached = cache.get(content);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const result = await tryWithRetry(async () => {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an SEO expert. Analyze the given content and provide SEO suggestions."
          },
          {
            role: "user",
            content: `Analyze this content for SEO optimization: ${content}`
          }
        ],
        model: "gpt-3.5-turbo",
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new Error('No suggestions received from AI');
      }

      const suggestion: SEOSuggestion = {
        title: "Optimized " + content,
        description: "SEO-optimized version of your content",
        keywords: ["viral", "content", "optimization"],
        improvements: [response]
      };

      // Cache the result
      cache.set(content, { data: suggestion, timestamp: Date.now() });
      return suggestion;
    });

    return result;
  } catch (error: any) {
    console.error('Error generating SEO suggestions:', error);
    if (error?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    throw error;
  }
}