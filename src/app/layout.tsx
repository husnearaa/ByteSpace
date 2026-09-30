import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "ByteSpace",
   icons: {
    icon: "/logo.png",
  },
  description:
    "ByteSpace is a platform that allows you to create and share your own AI-powered applications. You can build apps using our no-code interface, or you can use our API to integrate AI into your existing applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.className} antialiased`}>
        <Toaster position="bottom-right" richColors />

        {children}
      </body>
    </html>
  );
}
