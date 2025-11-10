import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Fortitude
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600 sm:text-2xl">
          Build mental fortitude for lasting recovery
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-emerald-600 text-base hover:bg-emerald-700 sm:text-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
