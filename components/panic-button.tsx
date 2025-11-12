'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { getRandomQuote } from '@/lib/panic-quotes';
import { Button } from '@/components/ui/button';

type BreathingPhase = 'inhale' | 'hold' | 'exhale';

export function PanicButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(10);
  const [quote, setQuote] = useState('');
  const [breathingPhase, setBreathingPhase] = useState<BreathingPhase>('inhale');
  const [breathingTimer, setBreathingTimer] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setQuote(getRandomQuote());
      setTimer(10);
      setBreathingPhase('inhale');
      setBreathingTimer(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, timer]);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setBreathingTimer((prev) => {
        const phases = {
          inhale: 4,
          hold: 7,
          exhale: 8,
        };

        const currentPhaseDuration = phases[breathingPhase];

        if (prev >= currentPhaseDuration) {
          if (breathingPhase === 'inhale') {
            setBreathingPhase('hold');
          } else if (breathingPhase === 'hold') {
            setBreathingPhase('exhale');
          } else {
            setBreathingPhase('inhale');
          }
          return 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, breathingPhase]);

  const getBreathingText = () => {
    switch (breathingPhase) {
      case 'inhale':
        return 'Breathe in...';
      case 'hold':
        return 'Hold...';
      case 'exhale':
        return 'Breathe out...';
    }
  };

  const getCircleScale = () => {
    switch (breathingPhase) {
      case 'inhale':
        return 'scale-150';
      case 'hold':
        return 'scale-150';
      case 'exhale':
        return 'scale-100';
    }
  };

  const handleClose = () => {
    if (timer <= 0) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all hover:bg-red-700 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 animate-pulse"
        aria-label="Need Help?"
      >
        <div className="flex flex-col items-center">
          <AlertCircle className="h-6 w-6" />
          <span className="text-[10px] font-medium mt-0.5">Help</span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative flex h-full w-full flex-col items-center justify-center px-4 py-8">
            {timer <= 0 && (
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            )}

            <div className="flex flex-col items-center space-y-12">
              <div className="relative flex h-64 w-64 items-center justify-center">
                <div
                  className={`absolute h-32 w-32 rounded-full bg-sky-400/40 transition-transform duration-[4000ms] ease-in-out ${
                    breathingPhase === 'inhale'
                      ? 'scale-150'
                      : breathingPhase === 'hold'
                      ? 'scale-150'
                      : 'scale-100'
                  }`}
                />
                <div className="absolute h-24 w-24 rounded-full bg-sky-400/60" />
                <div className="absolute h-16 w-16 rounded-full bg-sky-400" />
              </div>

              <div className="text-center">
                <p className="text-3xl font-semibold text-white transition-opacity duration-500">
                  {getBreathingText()}
                </p>
              </div>

              <div className="max-w-md text-center">
                <p className="text-xl leading-relaxed text-white/90">
                  {quote}
                </p>
              </div>

              {timer > 0 ? (
                <div className="rounded-full bg-white/10 px-6 py-3">
                  <p className="text-lg font-medium text-white">
                    {timer} seconds
                  </p>
                </div>
              ) : (
                <Button
                  onClick={handleClose}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Skip Exercise
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
