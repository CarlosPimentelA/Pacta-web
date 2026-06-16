import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import TanstackProvider from "../providers/TanstackProvider";

export const metadata: Metadata = {
  title: "Pacta",
  description: "Una aplicacion para blindar el acuerdo de alquiler de servicios, carros, departamentos, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <TanstackProvider>
          <body>
            {children}
          </body>
        </TanstackProvider>
      </ClerkProvider>
    </html>
  );
}
