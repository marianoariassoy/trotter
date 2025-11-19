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
          {lan === 'en' ? 'Legal Disclaimer' : 'Legal Disclaimer'}
        </h1>

        <header>
          <p className='font-semibold'>Effective Date: November 18th, 2025</p>
        </header>

        <ul className='space-y-4'>
          <li
            id='sec-1'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>1. Informational Purposes Only; No Legal Advice</h3>
            <p className='text-sm leading-relaxed'>
              The materials on this website are provided by <strong>Trotter Law PLLC</strong> (“Trotter,” “we,” or “us”)
              for general informational purposes only and do not constitute legal advice or a legal opinion on any
              specific facts or circumstances. You should not act or refrain from acting based on any content on this
              site without seeking advice from a licensed attorney appropriate to your particular facts and
              jurisdiction.
            </p>
          </li>

          <li
            id='sec-2'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>
              2. No Attorney–Client Relationship or Confidentiality Through the Site
            </h3>
            <p className='text-sm leading-relaxed'>
              Your access to or use of this website, including any submission of information through web forms or email,
              does not create an attorney–client relationship with Trotter or any of its attorneys. An attorney–client
              relationship is formed only after we have confirmed that no conflict of interest exists, you and Trotter
              have mutually agreed to the representation, and both parties have executed a written engagement agreement
              and satisfied any other required conditions. Do not send confidential or time-sensitive information to us
              unless and until an attorney–client relationship has been formally established. If you choose to
              communicate with us by unencrypted email, you acknowledge and accept the inherent risks associated with
              email communications.
            </p>
          </li>

          <li
            id='sec-3'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>3. Florida Jurisdiction and Multi-Jurisdictional Practice</h3>
            <p className='text-sm leading-relaxed'>
              Trotter is a Florida law firm. Our attorneys practice law only in jurisdictions where they are properly
              licensed and authorized, as indicated in their individual biographies. We do not seek to represent anyone
              based on viewing this website in a jurisdiction where this site or its content would not comply with that
              jurisdiction’s laws or ethics rules governing the communication of legal services. We are unwilling to
              accept representation from jurisdictions where the materials herein do not comply with state bar
              requirements and where a potential client is generated as a result of such communication. If you are
              located outside Florida, consult with a lawyer licensed in your jurisdiction regarding your specific
              situation.
            </p>
          </li>

          <li
            id='sec-4'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>4. Attorney Advertising; No Guarantee of Results</h3>
            <p className='text-sm leading-relaxed'>
              This website may be considered attorney advertising. Prior results do not guarantee a similar outcome. The
              hiring of a lawyer is an important decision that should not be based solely upon advertisements.
            </p>
          </li>

          <li
            id='sec-5'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>5. No Warranties; “As Is” Content and Tools</h3>
            <p className='text-sm leading-relaxed'>
              Information on this site may not reflect the most current legal developments, verdicts, or settlements and
              may be changed, updated, or removed without notice. We make no representations, warranties, or guarantees
              about the accuracy, completeness, timeliness, or suitability of the information or resources provided on
              this site, which are offered “as is,” without any warranty of any kind, express or implied, including any
              implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Templates,
              tools, and other resources may not be appropriate for your specific circumstances; you should seek
              personalized legal advice before relying on them.
            </p>
          </li>

          <li
            id='sec-6'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>6. Technology Platform; No Automatic Engagement</h3>
            <p className='text-sm leading-relaxed'>
              To the extent this website offers access to legal tools, forms, or other technology-enabled services, your
              use of those services does not create an attorney–client relationship with Trotter Law PLLC or any
              affiliated entity unless and until explicitly established through a signed engagement agreement and
              satisfaction of any other required conditions. All services are subject to the applicable terms and
              conditions, and you are responsible for complying with all relevant laws and regulations.
            </p>
          </li>

          <li
            id='sec-7'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>7. Third-Party Links and Content</h3>
            <p className='text-sm leading-relaxed'>
              For your convenience, this site may contain links to third-party websites or resources. Trotter does not
              control, endorse, or assume responsibility for any third-party content, products, or services, and we
              disclaim any liability arising from your use of or reliance on such third-party resources.
            </p>
          </li>

          <li
            id='sec-8'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>8. Corporate Form; Use of “Partner” Title</h3>
            <p className='text-sm leading-relaxed'>
              Trotter Law PLLC is organized as a Florida professional limited liability company. Its equity owners are
              “members,” not “partners.” Any use of the title “partner” on this site is for convenience and industry
              familiarity only and does not denote partnership under applicable law.
            </p>
          </li>

          <li
            id='sec-9'
            className='pt-4'
          >
            <h3 className='text-base font-semibold mb-2'>9. Governing Terms; Updates</h3>
            <p className='text-sm leading-relaxed'>
              Your use of this website is subject to this Legal Disclaimer and any other posted terms and policies,
              which we may update from time to time without notice. Continued use of the site after changes are posted
              constitutes your acceptance of those changes.
            </p>
          </li>

          <li
            id='sec-10'
            className='pt-4 pb-6'
          >
            <h3 className='text-base font-semibold mb-2'>10. Contact Information</h3>
            <p className='text-sm leading-relaxed'>
              To inquire about potential legal representation, please contact Trotter Law PLLC directly. Do not send
              confidential information until we have confirmed representation in writing.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Index
