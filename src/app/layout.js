import "./globals.css"; // your styles
import Navigations from "./components/Navbar";

export const metadata = {
  title: "Canvas Bakery",
  description: "Delicious baked goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigations />
        <main>{children}</main>
      </body>
    </html>
  );
}
