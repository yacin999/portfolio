import Navbar from "@/components/navbar";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import initTranslations from "../i18n";
import { FloatingNav } from "@/components/ui/floating-navbar";


const i18nNamespaces = ['home'];

export default async function Home({params : {locale}} : {params : any}) {
  console.log("test locale", locale)
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const navItems = [
    { name : "Home",
      link : "/#home"
    },
    { name : "About Us",
      link : "/#about-us"
    },
    { name : "myWork",
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
        <FloatingNav className="" navItems={navItems}/>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium iusto reprehenderit quidem voluptatem doloribus pariatur ducimus assumenda. Fugiat quos consectetur perferendis quia, sunt blanditiis mollitia consequatur quibusdam. Quae, velit.</section>
      </main>
    </TranslationsProvider>
  );
}
