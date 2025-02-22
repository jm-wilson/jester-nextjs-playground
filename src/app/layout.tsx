import { Navbar } from '@/components/single/Navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Joe's Everything Store",
  description: 'Trusted. Experienced. Reliable.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-screen-2xl mx-auto flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-800 px-4 py-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
