import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { useEffect } from 'react'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='max-w-4xl m-auto pt-40 px-4'>
        <h1 className='text-primary font-medium text-4xl lg:text-6xl mb-20 text-center'>
          {lan === 'en' ? 'Privacy Policy' : 'Política de privacidad'}
        </h1>

        <header>
          <p className='font-semibold'>Effective Date: November 18th, 2025</p>
        </header>

        <ul className='space-y-4'>
          {/* 1 */}
          <li
            id='sec-1'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>1. Introduction and Scope</h3>
            <p className='text-sm leading-relaxed'>
              Trotter Law PLLC (“Trotter,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how
              we collect, use, share, and safeguard personal information, and describes your choices and rights. It
              applies to information collected through our website, social media pages, integrations, marketing
              activities, client services, events, offline interactions, and other activities described in this Policy.
            </p>
            <p className='text-sm leading-relaxed mt-2'>
              We may provide supplemental notices for specific offerings. Unless stated otherwise, those notices should
              be read together with this Policy.
            </p>
          </li>

          {/* 2 */}
          <li
            id='sec-2'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>2. Who We Are; Florida Focus and Professional Obligations</h3>
            <p className='text-sm leading-relaxed'>
              Trotter is a Florida professional limited liability company focused on serving clients in Florida. Our
              attorneys practice only where licensed or authorized. Information relating to client matters may be
              protected by attorney-client confidentiality and other professional obligations. Contacting us or visiting
              our site does not create an attorney-client relationship. Do not send confidential information until
              representation is confirmed in writing.
            </p>
          </li>

          {/* 3 */}
          <li
            id='sec-3'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>3. Personal Information We Collect</h3>

            <h4 className='text-sm font-medium mt-2'>A. Information You Provide</h4>
            <ul className='list-disc list-inside text-sm leading-relaxed'>
              <li>Name, contact details, job title, and organization information</li>
              <li>Communications preferences</li>
              <li>Event/webinar registrations; update subscriptions</li>
              <li>Career inquiries and applications</li>
              <li>Information relevant to requested services</li>
            </ul>

            <p className='text-sm leading-relaxed mt-2'>
              We collect only the personal information needed to respond and provide requested services.
            </p>

            <h4 className='text-sm font-medium mt-4'>B. Information Collected Automatically</h4>
            <ul className='list-disc list-inside text-sm leading-relaxed'>
              <li>Device and technical data</li>
              <li>Usage data and interactions</li>
              <li>Performance/log and diagnostic data</li>
              <li>Cookies and analytics tools (e.g., Google Analytics)</li>
            </ul>

            <p className='text-sm leading-relaxed mt-2'>
              You may control cookies via your browser; disabling some may affect functionality.
            </p>

            <h4 className='text-sm font-medium mt-4'>C. Information from Third Parties</h4>
            <p className='text-sm leading-relaxed'>
              We may receive information from service providers, partners, public sources, or social networks, including
              contact details, professional information, background data, and payment details.
            </p>

            <h4 className='text-sm font-medium mt-4'>D. Sensitive Information</h4>
            <p className='text-sm leading-relaxed'>
              We generally request that you do not submit sensitive information unless necessary and disclosed. Where
              provided, we use it only for that purpose under appropriate safeguards.
            </p>
          </li>

          {/* 4 */}
          <li
            id='sec-4'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>4. How We Use Personal Information</h3>
            <ul className='list-disc list-inside text-sm leading-relaxed'>
              <li>Provide, personalize, and improve the Services</li>
              <li>Respond to inquiries and support needs</li>
              <li>Secure the Services; prevent fraud</li>
              <li>Comply with legal and ethical obligations</li>
              <li>Conduct analytics, research, and de-identified data analysis</li>
              <li>Communicate updates, events, and news (opt-out available)</li>
              <li>Evaluate employment applications</li>
              <li>Create de-identified internal data</li>
              <li>Fulfill disclosed purposes or purposes with consent</li>
            </ul>
          </li>

          {/* 5 */}
          <li
            id='sec-5'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>5. How We Share Personal Information</h3>
            <p className='text-sm leading-relaxed'>
              We do not sell personal information or share it for targeted advertising. We may share with:
            </p>
            <ul className='list-disc list-inside text-sm leading-relaxed'>
              <li>Affiliated entities</li>
              <li>Service providers and partners</li>
              <li>Corporate transaction participants</li>
              <li>Professional advisors and legal authorities</li>
              <li>Other parties with consent or as necessary for services</li>
            </ul>
          </li>

          {/* 6 */}
          <li
            id='sec-6'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>6. Cookies and Tracking Technologies</h3>
            <p className='text-sm leading-relaxed'>
              We use cookies to enable core site functions, enhance security, conduct analytics, and personalize
              experiences. You can manage cookies via browser settings. We do not currently respond to “Do Not Track”
              signals.
            </p>
          </li>

          {/* 7 */}
          <li
            id='sec-7'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>7. Your Privacy Choices and Rights</h3>
            <p className='text-sm leading-relaxed'>
              Depending on applicable law, you may have rights to access, correct, delete, port, restrict, object, or
              appeal decisions. You may opt out of marketing at any time. Requests may require identity verification and
              may be denied when permitted by law.
            </p>
            <p className='text-sm leading-relaxed mt-2'>
              Contact:{' '}
              <a
                href='mailto:info@trotter.pro'
                className='underline'
              >
                info@trotter.pro
              </a>{' '}
              or +1 786-832-0763.
            </p>
          </li>

          {/* 8 */}
          <li
            id='sec-8'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>8. Clients and Prospective Clients; Florida Ethics</h3>
            <p className='text-sm leading-relaxed'>
              We handle client information according to professional conduct rules. We do not disclose representation
              details without informed consent unless required. Engagements occur only after conflicts checks and a
              written agreement.
            </p>
          </li>

          {/* 9 */}
          <li
            id='sec-9'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>9. Security</h3>
            <p className='text-sm leading-relaxed'>
              We use reasonable safeguards to protect personal information, though no system is completely secure.
              Contact us if you believe your information is compromised.
            </p>
          </li>

          {/* 10 */}
          <li
            id='sec-10'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>10. Retention</h3>
            <p className='text-sm leading-relaxed'>
              We retain personal information as needed for described purposes, legal obligations, dispute resolution,
              and enforcement. When no longer needed, we delete or de-identify it.
            </p>
          </li>

          {/* 11 */}
          <li
            id='sec-11'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>11. Children’s Privacy</h3>
            <p className='text-sm leading-relaxed'>
              Our Services are not directed to children under 13 (or under 16 where applicable). We do not knowingly
              collect information from children. If collected, we will delete it promptly.
            </p>
          </li>

          {/* 12 */}
          <li
            id='sec-12'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>12. International Data Transfers</h3>
            <p className='text-sm leading-relaxed'>
              If you access the Services from outside the U.S., your information may be transferred to other countries.
              Where required, we implement safeguards such as standard contractual clauses. By using the Services, you
              acknowledge such transfers.
            </p>
          </li>

          {/* 13 */}
          <li
            id='sec-13'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>13. EEA/UK/Swiss Disclosures</h3>
            <p className='text-sm leading-relaxed'>
              Where applicable, Trotter is the data controller. We rely on lawful bases including consent, contract
              necessity, legal obligations, and legitimate interests. You may have rights under local law, including to
              lodge a complaint.
            </p>
          </li>

          {/* 14 */}
          <li
            id='sec-14'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>14. Third-Party Websites and Services</h3>
            <p className='text-sm leading-relaxed'>
              Our Services may include links to third-party websites. We are not responsible for their privacy
              practices. Review their policies before providing information.
            </p>
          </li>

          {/* 15 */}
          <li
            id='sec-15'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>15. Changes to This Privacy Policy</h3>
            <p className='text-sm leading-relaxed'>
              We may update this Policy from time to time. If changes materially affect how we handle your information,
              we will provide notice. Continued use after updates signifies acceptance.
            </p>
          </li>

          {/* 16 */}
          <li
            id='sec-16'
            className='pt-4 pb-6'
          >
            <h3 className='text-base font-semibold mb-2'>16. Contact Us</h3>
            <p className='text-sm leading-relaxed'>
              Questions or requests may be directed to:
              <br />
              <strong>Email:</strong> victoria@trotter.law
              <br />
              <strong>Phone:</strong> +1 786-832-0763
              <br />
              <strong>Address:</strong> 4421 Sheridan Ave., Miami Beach, FL 33140
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Index
