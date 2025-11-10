import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-emerald-600" />
            <span className="text-xl font-semibold text-slate-800">
              Fortitude
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
