import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ProviderSessionAuth from "./ProviderSession";
import { Providers } from "@/redux/provider";


const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700", "900"], });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={roboto.className}
      >
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <ProviderSessionAuth>
              <Providers>
              {children}
              </Providers>
            </ProviderSessionAuth>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}