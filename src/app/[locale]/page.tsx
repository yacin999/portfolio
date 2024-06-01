import Navbar from "@/components/navbar";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import initTranslations from "../i18n";
import { FloatingNav } from "@/components/ui/floating-navbar";


const i18nNamespaces = ['home'];

export default async function Home({params : {locale}} : {params : any}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const navItems = [
    { name : t("navbar.home"),
      link : "/#home"
    },
    { name : t("navbar.aboutUs"),
      link : "/#about-us"
    },
    { name : t("navbar.myWork"),
      link : "/#my-work"
    },
  ]
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resouces={resources}>
      <main className="">
        <Navbar/>
        <FloatingNav className="md:hidden" navItems={navItems} contactUsItem={t("navbar.contactUs")}/>
        
      </main>
    </TranslationsProvider>
  );
}
