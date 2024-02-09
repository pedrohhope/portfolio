import { useTranslations } from 'next-intl';
import Navbar from './components/Navbar';
import Body from './modules/Body';
import Header from './modules/Header';

export default function Home() {
  const t = useTranslations('Home');
  const navOptions = [t('nav_options.home'), t('nav_options.about'), t('nav_options.contact')];

  return (
    <div className='bg-background min-h-screen'>
      <Navbar
        options={navOptions}
        customStyles='py-10'
      />
      <Header />
      <Body />
    </div>
  );
}
