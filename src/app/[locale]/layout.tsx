import type { Metadata } from "next";
import { Inter, Cairo, DM_Sans, Rubik, Changa, Readex_Pro, El_Messiri, Alexandria } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({subsets : ["latin"]})
const changa = Changa({subsets : ["arabic"]})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio created for Kelalech Omar",
};

// const arabic_font = ["changa", "Readex Pro", "El Messiri", "Alexandria"]



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
    <html lang={locale} dir={dir(locale)}>
      <body className={cn('', {
          [changa.className] : locale === "ar", 
          [inter.className] : locale === "fr" || locale === "en", 
        })}>
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
