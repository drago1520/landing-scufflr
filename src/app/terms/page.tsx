/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

export const metadata = {
  title: 'Terms & Conditions | Scufflr | Tinder for Fighting 🔥🥋',
  robots: {
    index: false,
    follow: false,
  },
};

const TermsPage: FC = () => {
  const lastUpdated = '03 September 2024';
  const contactEmail = 'scufflr.official@gmail.com';
  const currentYear = new Date().getFullYear();


  return (
    <article className="max-w-[650px] px-5 pt-24 mx-auto">
      <h1 className="text-4xl my-2">Terms and Conditions</h1>
      <div className="terms-content">
        <p>
          Last Updated: <span>{lastUpdated}</span>
        </p>

        <h3 className="text-2xl my-1">1. Acceptance of Terms</h3>
        <p>
          By accessing or using Scufflr ("we," "our," or "us"), you agree to be
          bound by these Terms and Conditions. If you do not agree with any part
          of these terms, you must not use our app or services.
        </p>

        <h3 className="text-2xl my-1">2. Use of the Service</h3>
        <p className="highlighted">
          Eligibility: You must be at least 18 years old to use Scufflr. By using
          our app, you represent and warrant that you meet this requirement.
        </p>
        <p>
          Account Registration: You agree to provide accurate, current, and
          complete information during the registration process and to update such
          information as necessary to keep it accurate, current, and complete.
        </p>
        <p className="highlighted">
          Prohibited Conduct: You agree not to use Scufflr for any illegal or
          unauthorized purposes, including but not limited to harassment, abuse,
          threats, or any activity that violates the rights of others. BRINGING
          ANY NON-ACCEPTED WEAPONS IS ILLEGAL.
        </p>

        <h3 className="text-2xl my-1">3. User Content</h3>
        <p>
          Responsibility: You are solely responsible for any content you post,
          upload, or share through Scufflr.
        </p>
        <p>
          Licence: By submitting content, you grant Scufflr a worldwide,
          non-exclusive, royalty-free licence to use, display, reproduce, and
          distribute your content in connection with the operation of our
          services.
        </p>

        <h3 className="text-2xl my-1">4. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your account and access to
          Scufflr at our discretion, without notice, for conduct that we believe
          violates these Terms and Conditions or is harmful to other users.
        </p>

        <h3 className="text-2xl my-1">5. Limitation of Liability</h3>
        <p className="highlighted">
          Scufflr is provided "as is" and "as available" without any warranties of
          any kind. We are not liable for any damages, including but not limited
          to direct, indirect, incidental, or consequential damages arising from
          the use or inability to use our app.
        </p>

        <h3 className="text-2xl my-1">6. Indemnification</h3>
        <p>
          You agree to indemnify and hold harmless Scufflr, its affiliates, and its
          respective officers, directors, employees, and agents from any claims,
          liabilities, damages, or expenses arising out of your use of the app or
          violation of these Terms and Conditions.
        </p>

        <h3 className="text-2xl my-1">7. Changes to Terms and Conditions</h3>
        <p>
          We may update these Terms and Conditions from time to time. We will
          notify you of any changes by posting the new terms on this page and
          updating the "Last Updated" date above.
        </p>

        <h3 className="text-2xl my-1">8. Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of EU and USA, without regard to its conflict of law
          principles.
        </p>

        <h3 className="text-2xl my-1">9. Contact Us</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at <span>{contactEmail}</span>.
        </p>
      </div>

      <footer>
        <p>&copy; {currentYear} Scufflr. All rights reserved.</p>
        <a href="/terms">Terms and Conditions</a>
      </footer>
    </article>
  );
};

export default TermsPage;
