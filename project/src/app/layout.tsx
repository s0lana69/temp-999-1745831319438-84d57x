import type { Metadata } from 'next';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'TrueViral - AI Platform',
  description: 'Advanced AI platform for startups and enterprises',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white relative overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}