import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const headersList = headers();
  const lang = headersList.get('accept-language')?.split(',')[0].split('-')[0] || 'en';

  const supportedLangs = ['en', 'fr', 'tr'];
  const finalLang = supportedLangs.includes(lang) ? lang : 'en';

  redirect(`/${finalLang}`);
}
