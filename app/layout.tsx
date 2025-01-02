import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rishmika Sandanu - Portfolio',
  description: 'Full-stack developer and designer portfolio showcasing innovative projects and technical expertise',
  keywords: ['developer', 'designer', 'portfolio', 'full-stack', 'web development'],
  authors: [{ name: 'Rishmika Sandanu' }],
  openGraph: {
    type: 'website',
    title: 'Rishmika Sandanu - Portfolio',
    description: 'Full-stack developer and designer portfolio showcasing innovative projects and technical expertise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}