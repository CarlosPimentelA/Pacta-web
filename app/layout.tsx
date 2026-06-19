import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import TanstackProvider from "../providers/TanstackProvider";
import WebAnalytics from "@/providers/WebAnalytics";
import SpeedInsightsProvider from "@/providers/SpeedInsight";
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <TanstackProvider>
          <body>
            {children}
          </body>
        </TanstackProvider>
        <WebAnalytics />
        <SpeedInsightsProvider />
      </html>
    </ClerkProvider>
  );
}
