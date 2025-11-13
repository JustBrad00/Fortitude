import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-slate-600 sm:flex-row sm:gap-6">
          <p>&copy; 2025 Fortitude. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-slate-900"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
