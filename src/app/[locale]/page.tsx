import { useTranslations } from 'next-intl';
import Navbar, { IOption } from './components/Navbar';
import Body from './modules/Body';
import Footer from './modules/Footer';
import Header from './modules/Header';

export default function Home() {
  const t = useTranslations('Home');
  const navOptions: IOption[] = [
    {
      name: t('nav_options.skills'),
      anchor: '#skills'
    },
    {
      name: t('nav_options.projects'),
      anchor: '#projects'
    }
  ];

  return (
    <div className='bg-background min-h-screen'>
      <Navbar
        options={navOptions}
        customStyles='py-10'
      />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
