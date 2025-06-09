import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Janki Resort',
  description: 'A perfect getaway for relaxation and adventure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}