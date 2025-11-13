import { Hero } from '@/components/Hero';
import { Disclaimer } from '@/components/Disclaimer';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Hero />
        <Disclaimer />
      </div>
      <Footer />
    </>
  );
}
