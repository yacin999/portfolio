import Navbar from "@/components/navbar";
import TranslationsProvider from "@/providers/TranslationsProvider";
import initTranslations from "../i18n";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


const i18nNamespaces = ['home'];

export default async function Home({params : {locale}} : {params : any}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const navItems = [
    { name : t("navbar.home"),
      link : "/#home"
    },
    { name : t("navbar.about"),
      link : "/#about"
    },
    { name : t("navbar.projects"),
      link : "/#projects"
    },
    {
      name : t("navbar.contact"),
      link : "/#contact"
    }
  ]
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resouces={resources}>
      <main className="">
        <Navbar/>
        <FloatingNav className="md:hidden" navItems={navItems}/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </TranslationsProvider>
  );
}
