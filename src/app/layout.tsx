import './globals.css';  // Import global styles
import Navbar from './components/Navbar'; // Correct import path for Navbar
import Footer from './components/Footer'; // Import Footer component

export const metadata = {
  title: 'The Hub',
  description: 'A Crypto Hub Web Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add Footer component here */}
      </body>
    </html>
  );
}
