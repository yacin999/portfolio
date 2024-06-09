import Navbar from "@/components/navbar";
import TranslationsProvider from "@/providers/TranslationsProvider";
import initTranslations from "../i18n";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";


const i18nNamespaces = ['home'];

export default async function Home({params : {locale}} : {params : any}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const navItems = [
    { name : t("navbar.home"),
      link : "/#home"
    },
    { name : t("navbar.about"),
      link : "/#about-us"
    },
    { name : t("navbar.projects"),
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
        <FloatingNav className="md:hidden" navItems={navItems} contactUsItem={t("navbar.contact")}/>
        <Hero/>
        <About/>
        <Skills/>
      </main>
    </TranslationsProvider>
  );
}
