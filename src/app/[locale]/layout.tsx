import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import clsx from "clsx";
import { changa, inter } from "../fonts";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/dom/Layout"


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
          {/* {children} */}
          <Layout>{children}</Layout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
