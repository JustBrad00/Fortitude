import { Hero } from '@/components/Hero';
import { Disclaimer } from '@/components/Disclaimer';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Hero />
      <Disclaimer />
    </div>
  );
}
