import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Website",
  description: "Next.js Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Navigation added */}
        {children}
      </body>
    </html>
  );
}
