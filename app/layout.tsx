import { fonts } from "@/constants/layout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.className} m-0 text-base antialiased  font-normal dark:bg-slate-900 leading-default bg-gray-50 text-black "`}
      >
        {children}
      </body>
    </html>
  );
}
