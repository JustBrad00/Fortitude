import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <article className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-600">
            Last updated: November 13, 2025
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Terms and Conditions
          </h1>

          <section>
            <h2>Introduction and Agreement</h2>
            <p>
              Welcome to Fortitude. By accessing or using our application, you
              agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, please do not use our
              service.
            </p>
          </section>

          <section>
            <h2>User Eligibility</h2>
            <p>
              You must be at least 18 years of age to use Fortitude. By using
              this service, you represent and warrant that you meet this age
              requirement and have the legal capacity to enter into these
              Terms.
            </p>
          </section>

          <section>
            <h2>Prohibited Uses</h2>
            <p>
              You agree not to use Fortitude for any unlawful purpose or in any
              way that could damage, disable, overburden, or impair our
              service. You may not attempt to gain unauthorized access to any
              part of the service, other user accounts, or computer systems
              connected to the service.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of Fortitude, including
              but not limited to text, graphics, logos, and software, are the
              exclusive property of Fortitude and are protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2>User-Generated Content</h2>
            <p>
              You retain ownership of any content you create through Fortitude,
              including journal entries and personal data. By using our
              service, you grant us a limited license to store and process your
              content solely for the purpose of providing the service to you.
            </p>
          </section>

          <section>
            <h2>Privacy and Data Handling</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect, use, and protect your personal
              information. By using Fortitude, you consent to our data
              practices as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>Payment Terms</h2>
            <p>
              Fortitude offers subscription-based access at $3.00 per month for
              standard users and $1.00 per month for verified veterans.
              Payments are processed securely, and subscriptions automatically
              renew unless canceled. Refunds are handled on a case-by-case
              basis.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Fortitude and its
              affiliates shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use or inability to use the service, even if we have been advised
              of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              Fortitude is a mental fortitude building tool and is not a
              substitute for professional medical advice, diagnosis, or
              treatment. The service is provided for informational and support
              purposes only. Always seek the advice of qualified health
              providers with any questions you may have regarding a medical
              condition.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the United States, without regard to
              its conflict of law provisions. Any disputes arising from these
              terms shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions,
              please contact us at support@fortitudeapp.com.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
