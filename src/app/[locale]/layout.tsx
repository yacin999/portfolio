import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import clsx from "clsx";
import { changa, inter } from "../fonts";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio created for Kelalech Omar",
};





export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params : any
}>) {
  return (
    <html 
      lang={locale} 
      dir={dir(locale)} 
      className={clsx({
        [changa.className] : locale === "ar", 
        [inter.className] : locale === "fr" || locale === "en", 
    })}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
