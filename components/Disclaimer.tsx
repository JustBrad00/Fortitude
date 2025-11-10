import { AlertCircle } from 'lucide-react';

export function Disclaimer() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border-2 border-sky-200 bg-sky-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-sky-600" />
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Important Notice
              </h2>
              <p className="mt-2 leading-relaxed text-slate-700">
                This app builds mental fortitude for porn recovery but is not
                medical advice—seek professionals if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
