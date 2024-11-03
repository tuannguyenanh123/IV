'use client';

import Description from './components/Description';
import TimePayGateway from './components/TimePayGateway';
import SimplePayment from './components/SimplePayment';
import CooperationPartnerships from './components/CooperationPartnerships';
import ScrollToTopButton from 'src/components/ScrollToTop/ScrollToTop';

const Home = ({ lng }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTopButton/>
      <Description lng={lng} />
      <TimePayGateway lng={lng} />
      <SimplePayment lng={lng} />
      <CooperationPartnerships lng={lng} />
    </main>
  );
};

export default Home;
