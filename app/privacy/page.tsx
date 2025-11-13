import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <section>
            <h2>Data We Collect</h2>
            <p>
              When you use Fortitude, we collect the following information:
            </p>
            <ul>
              <li>
                <strong>Account Information:</strong> Your email address and
                chosen pseudonym for identification and authentication purposes.
              </li>
              <li>
                <strong>Journal Entries:</strong> Personal reflections and
                progress notes you create within the app.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our service to improve functionality and user experience.
              </li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Data</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Provide and maintain the Fortitude service</li>
              <li>Process your subscription and payment information</li>
              <li>Send you important updates about your account</li>
              <li>Improve our service based on usage patterns</li>
              <li>Respond to your support requests and inquiries</li>
            </ul>
            <p>
              We will never sell your personal data to third parties or use it
              for purposes other than providing and improving our service.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We take the security of your data seriously. All data is
              encrypted both in transit and at rest using industry-standard
              encryption protocols. We use secure, reliable cloud
              infrastructure to store your information and implement strict
              access controls to protect your privacy.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect
              your personal data, no method of transmission over the internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of all personal data we
                hold about you
              </li>
              <li>
                <strong>Export:</strong> Download your journal entries and
                other data in a portable format
              </li>
              <li>
                <strong>Deletion:</strong> Request permanent deletion of your
                account and all associated data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct any inaccurate
                personal information
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at
              privacy@fortitudeapp.com.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Currently, Fortitude does not share your data with any
              third-party services beyond our essential infrastructure
              providers who are bound by strict confidentiality agreements. We
              will update this policy if we integrate with any third-party
              services in the future.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is
              active or as needed to provide you services. If you request
              account deletion, we will permanently delete your data within 30
              days, except where we are required to retain certain information
              for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. Continued use of
              Fortitude after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p>
              Email: privacy@fortitudeapp.com
              <br />
              Support: support@fortitudeapp.com
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
