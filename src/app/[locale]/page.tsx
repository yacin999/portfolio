import Navbar from "@/components/navbar";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import initTranslations from "../i18n";


const i18nNamespaces = ['home'];

export default async function Home({params : {locale}} : {params : any}) {
  console.log("test locale", locale)
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resouces={resources}>
      <main className="">
        <Navbar/>
      </main>
    </TranslationsProvider>
  );
}
