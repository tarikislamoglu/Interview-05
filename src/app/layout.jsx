import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
        {children}
      </body>
    </html>
  );
}
