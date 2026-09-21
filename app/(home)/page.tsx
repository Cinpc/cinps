import HomeHero from '@/app/(home)/HomeHero';
import HomeCallCenter from '@/app/(home)/HomeCallCenter';
import HomeOneTeam from '@/app/(home)/HomeOneTeam';
import HomeLessPressure from '@/app/(home)/HomeLessPressure';
import HomeVoiceCustomers from '@/app/(home)/HomeVoiceCustomers';
import HomeHaveCalls from '@/app/(home)/HomeHaveCalls';
import HomeClearProcess from '@/app/(home)/HomeClearProcess';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCallCenter />
      <HomeOneTeam />
      <HomeLessPressure />
      <HomeClearProcess />
      <HomeVoiceCustomers />
      <HomeHaveCalls />
    </>
  );
}
