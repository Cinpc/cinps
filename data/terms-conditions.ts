import { contact } from '@/data/contact';

export type PolicyLink = {
  href: string;
  label: string;
};

export type PolicyStrong = {
  strong: string;
};

export type PolicyPart = string | PolicyLink | PolicyStrong;

export type PolicyText = string | PolicyPart[];

export type PolicySection = {
  id: string;
  title?: string;
  nav?: boolean;
  paragraphs: PolicyText[];
  listIntro?: string;
  list?: PolicyText[];
  afterList?: PolicyText[];
};

export const termsConditions: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'These Terms and Conditions govern access to and use of the Cinpc website at cinpc.com and the business services made available through it.',
      `Cinpc is a brand operated by CALL CENTER INP, registered at ${contact.address} under registration number [insert registration number].`,
      'By accessing the website, submitting an inquiry, requesting a quote, or engaging Cinpc for services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by the provisions that apply to your use of the website and services.',
    ],
  },
  {
    id: 'about-cinpc',
    title: '1. About Cinpc',
    paragraphs: [
      'Cinpc provides call center outsourcing and business process outsourcing services primarily for businesses operating in the financial sector. Its services may include customer care, compliance-related customer support, collections support, fraud-related customer communication, application support, complaint handling, outbound communication, sales assistance, and other agreed customer operations.',
      'Cinpc acts as an outsourced service provider supporting defined business processes and customer communications. Unless expressly agreed otherwise in writing, Cinpc does not itself provide banking, lending, insurance, investment, payment, or other regulated financial products or services to the customers of its clients.',
    ],
  },
  {
    id: 'business-use',
    title: '2. Business Use',
    paragraphs: [
      'Cinpc services are intended primarily for businesses and organizations seeking outsourced customer communication and operational support.',
      'If you contact Cinpc or enter into an agreement on behalf of a company or other organization, you confirm that you have the authority to act on its behalf and, where applicable, to bind that organization to the relevant agreement.',
    ],
  },
  {
    id: 'website-use',
    title: '3. Website Use',
    paragraphs: [
      'The Cinpc website provides information about available services, solutions, working processes, and ways to contact the Cinpc team. You may use the website for legitimate business purposes, including reviewing services, submitting inquiries, and requesting information or a quote.',
    ],
    listIntro: 'You must not use the website:',
    list: [
      'For any unlawful, fraudulent, deceptive, or abusive purpose.',
      'To interfere with the operation, security, or availability of the website.',
      'To attempt to gain unauthorized access to systems, accounts, networks, or data.',
      'To introduce malware, malicious code, automated attacks, or other harmful material.',
      'To collect or extract website content or data through unauthorized automated means.',
      'To impersonate another person or organization or provide deliberately false information.',
      'To infringe intellectual property, privacy, confidentiality, or other rights belonging to Cinpc or any third party.',
    ],
    afterList: [
      'Cinpc may restrict or block access to the website where reasonably necessary to protect its systems, users, business operations, or legal rights.',
    ],
  },
  {
    id: 'requests-and-contact-forms',
    title: '4. Requests and Contact Forms',
    paragraphs: [
      'The website allows prospective clients to contact Cinpc and provide information about their outsourcing requirements. This may include contact details, company information, the services required, estimated call volumes, and additional information submitted through the contact form.',
      'Submitting a form, contacting Cinpc, or requesting a quote does not automatically create a service agreement or require Cinpc to accept an engagement. Cinpc may review the request, ask for additional information, discuss requirements, and determine whether the requested work falls within its capabilities and service scope.',
      'You are responsible for ensuring that information submitted to Cinpc is accurate and that you are authorized to provide it.',
    ],
  },
  {
    id: 'quotes-and-service-proposals',
    title: '5. Quotes and Service Proposals',
    paragraphs: [
      'Any quote, proposal, scope, estimate, or other commercial information provided by Cinpc may be subject to additional terms, assumptions, limitations, and validity periods communicated with that document.',
      'A quote or preliminary discussion does not create an obligation to provide services unless the parties have completed the required acceptance or contracting process.',
      'Pricing may depend on factors such as service scope, call volumes, required coverage, staffing, workflows, operational complexity, integrations, languages, training requirements, and other project-specific conditions.',
    ],
  },
  {
    id: 'service-agreements',
    title: '6. Service Agreements',
    paragraphs: [
      'The exact services provided to a client may be governed by a separate service agreement, statement of work, order form, proposal, or other written agreement accepted by the parties.',
    ],
    listIntro: 'Such documentation may specify matters including:',
    list: [
      'The services and customer operations included in the engagement.',
      'Responsibilities allocated between Cinpc and the client.',
      'Workflows, procedures, and escalation points.',
      'Staffing, operating hours, capacity, or volume requirements.',
      'Fees, invoicing, and payment arrangements.',
      'Performance requirements or service levels, where applicable.',
      'Data protection, security, and confidentiality obligations.',
      'Term, renewal, suspension, and termination conditions.',
    ],
    afterList: [
      'If a specific written service agreement conflicts with these Terms and Conditions regarding the provision of contracted services, the terms of that specific agreement will apply to the extent of the conflict.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: '7. Client Responsibilities',
    paragraphs: [
      'The effectiveness of outsourced customer operations depends on accurate instructions and clearly defined responsibilities. Clients are responsible for providing the information, access, procedures, materials, approvals, and cooperation reasonably required for Cinpc to perform the agreed services.',
      'Depending on the engagement, the client may also be responsible for ensuring that its instructions, products, customer processes, scripts, policies, and use of Cinpc services comply with laws and regulatory requirements applicable to its business.',
      'Cinpc may rely on information and instructions supplied by the client unless there is a reasonable basis to believe that they are incorrect, unauthorized, or unlawful.',
    ],
  },
  {
    id: 'financial-sector-support',
    title: '8. Financial-Sector Support',
    paragraphs: [
      'Cinpc supports customer operations for businesses including FinTech companies, lenders, insurers, and other financial services businesses. References on the website to compliance, collections, fraud, applications, verification, complaints, or similar functions describe categories of outsourced operational and communication support.',
      'Such descriptions do not constitute financial, legal, regulatory, investment, insurance, credit, or compliance advice. Responsibility for regulated decisions, policies, approvals, and activities remains with the relevant client except where a separate written agreement expressly provides otherwise and such arrangement is legally permitted.',
    ],
  },
  {
    id: 'compliance-and-lawful-instructions',
    title: '9. Compliance and Lawful Instructions',
    paragraphs: [
      'Both Cinpc and its clients are expected to use the services in accordance with applicable law and their contractual obligations.',
      'Cinpc is not required to carry out instructions that it reasonably believes are unlawful, fraudulent, misleading, abusive, inconsistent with an applicable agreement, or likely to expose Cinpc or another party to unacceptable legal or security risks.',
      'Where necessary, Cinpc may request clarification, documentation, or changes to a proposed workflow before performing the relevant activity.',
    ],
  },
  {
    id: 'confidentiality',
    title: '10. Confidentiality',
    paragraphs: [
      'In the course of discussing or providing services, Cinpc and its clients may exchange business, operational, technical, customer, or other confidential information.',
      'Confidentiality obligations relating to a specific engagement may be established in a service agreement, non-disclosure agreement, data processing agreement, or other written document between the parties.',
      'Neither party should disclose confidential information received from the other except where disclosure is authorized, necessary to perform agreed obligations, or required by applicable law.',
    ],
  },
  {
    id: 'personal-data',
    title: '11. Personal Data',
    paragraphs: [
      [
        'Use of the website and delivery of certain services may involve the processing of personal data. Information about personal data collected directly through the Cinpc website is provided in the Cinpc ',
        { href: '/privacy-policy', label: 'Privacy Policy' },
        '.',
      ],
      'Where Cinpc processes personal data on behalf of a business client as part of outsourced customer operations, the respective roles, instructions, security requirements, and other data protection obligations may be governed by a separate data processing agreement or other applicable contractual documentation.',
      'Clients are responsible for ensuring that they have an appropriate lawful basis and any required notices, permissions, or authorizations for personal data they instruct Cinpc to process on their behalf.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '12. Intellectual Property',
    paragraphs: [
      'Unless otherwise stated, the website and its content, including text, branding, logos, design elements, graphics, layouts, and other materials, are owned by or licensed to Cinpc and are protected by applicable intellectual property laws.',
      'You may view and use website content for ordinary internal business purposes connected with evaluating or using Cinpc services. You may not reproduce, distribute, modify, republish, sell, license, or commercially exploit substantial parts of the website without prior authorization.',
      'Any intellectual property rights created or used in connection with a specific client engagement will be governed by the applicable service agreement or other written arrangement between the parties.',
    ],
  },
  {
    id: 'third-party-services-and-links',
    title: '13. Third-Party Services and Links',
    paragraphs: [
      'The website may contain links to third-party websites, platforms, or services. These external resources are operated independently and may have their own terms, privacy practices, and security measures.',
      'Cinpc does not control third-party websites and is not responsible for their content, availability, policies, or practices. Access to any third-party resource is at your own discretion and subject to the terms applicable to that resource.',
    ],
  },
  {
    id: 'website-availability-and-information',
    title: '14. Website Availability and Information',
    paragraphs: [
      'Cinpc aims to keep the website and its information accessible and useful but does not guarantee uninterrupted or error-free availability. The website may occasionally be unavailable because of maintenance, technical problems, updates, security measures, or circumstances outside reasonable control.',
      'Website content is provided for general information about Cinpc and its services. Service descriptions may be updated as operations develop, and the availability or precise scope of a service may depend on the requirements of a particular engagement.',
    ],
  },
  {
    id: 'no-guarantee-of-engagement-or-results',
    title: '15. No Guarantee of Engagement or Results',
    paragraphs: [
      'Information presented on the website does not guarantee that Cinpc will accept a particular project or that every service will be suitable for every business.',
      'Specific operational targets, service levels, response times, performance standards, or other measurable commitments apply only where they have been expressly agreed in the relevant contractual documentation.',
      'Cinpc does not guarantee particular commercial, financial, collection, sales, customer retention, compliance, or other business outcomes merely as a result of using its services.',
    ],
  },
  {
    id: 'fees-and-payment',
    title: '16. Fees and Payment',
    paragraphs: [
      'Fees for Cinpc services are determined according to the applicable quote, proposal, service agreement, statement of work, order form, or other commercial arrangement agreed with the client.',
      'Payment schedules, currencies, invoicing requirements, taxes, late-payment provisions, and any other financial conditions will be specified in the relevant agreement where applicable.',
      'Unless expressly stated in an applicable agreement, information on the website does not constitute a binding price offer.',
    ],
  },
  {
    id: 'cancellation-and-refunds',
    title: '17. Cancellation and Refunds',
    paragraphs: [
      [
        'Cancellation, termination, credits, refunds, and other payment adjustments relating to contracted services are governed by the agreement applicable to the relevant engagement and the Cinpc ',
        { href: '/refund-policy', label: 'Refund Policy' },
        ' where that policy applies.',
      ],
      'Because Cinpc provides business services that may involve staffing, preparation, onboarding, training, capacity allocation, and ongoing operational work, eligibility for a refund cannot be assumed merely because a client decides to discontinue a service.',
      'Any request concerning a payment or refund should be submitted using the Cinpc contact details provided on the website.',
    ],
  },
  {
    id: 'suspension-and-termination',
    title: '18. Suspension and Termination',
    paragraphs: [
      'Cinpc may suspend or terminate access to services in accordance with the applicable service agreement. Circumstances permitting suspension or termination may include material breach of contractual obligations, non-payment, unlawful use, security concerns, misuse of services, or other grounds specified in the relevant agreement.',
      'Clients may terminate services according to the notice periods, procedures, and other conditions established in their applicable contractual documentation.',
      'Termination does not affect rights, obligations, fees, or liabilities that accrued before the effective termination date or provisions intended to continue after termination.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '19. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, Cinpc will not be liable for indirect, incidental, special, punitive, or consequential losses arising from use of the website or services, including loss of profits, revenue, business opportunities, goodwill, or anticipated savings, except where such liability cannot lawfully be excluded or limited.',
      'Any additional limitations, exclusions, liability caps, indemnities, or risk allocations applicable to contracted services may be established in the relevant service agreement.',
      'Nothing in these Terms excludes or limits liability where doing so would be prohibited by applicable law.',
    ],
  },
  {
    id: 'indemnification',
    title: '20. Indemnification',
    paragraphs: [
      'To the extent permitted by applicable law and any specific agreement between the parties, a client may be responsible for losses, claims, liabilities, or reasonable costs resulting from unlawful instructions, unauthorized materials, infringement of third-party rights, misuse of the services, or material breach of its contractual obligations.',
      'Any more specific indemnification obligations applicable to an engagement will be governed by the relevant service agreement.',
    ],
  },
  {
    id: 'force-majeure',
    title: '21. Force Majeure',
    paragraphs: [
      'Cinpc will not be responsible for a delay or failure to perform an obligation where performance is prevented by circumstances beyond its reasonable control, subject to any different provisions contained in the applicable service agreement.',
      'Such circumstances may include major telecommunications or infrastructure failures, natural disasters, governmental actions, widespread outages, civil disturbances, armed conflict, or other events that could not reasonably have been prevented or controlled.',
    ],
  },
  {
    id: 'changes-to-these-terms',
    title: '22. Changes to These Terms',
    paragraphs: [
      'Cinpc may update these Terms and Conditions to reflect changes to the website, services, operational practices, or applicable legal requirements.',
    ],
  },
  {
    id: 'governing-law-and-jurisdiction',
    title: '23. Governing Law and Jurisdiction',
    paragraphs: [
      'These Terms and Conditions are governed by the laws of [insert governing country/jurisdiction], without regard to conflict-of-law principles where applicable.',
      'Any dispute arising from these Terms, the website, or services that is not governed by a separate agreement will be subject to the jurisdiction of the competent courts of [insert jurisdiction].',
      'Where a separate service agreement contains its own governing-law or dispute-resolution provisions, those provisions apply to the relevant engagement.',
    ],
  },
  {
    id: 'severability',
    title: '24. Severability',
    paragraphs: [
      'If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be interpreted or limited to the extent necessary under applicable law. The remaining provisions will continue in effect.',
    ],
  },
  {
    id: 'contact-us',
    title: '25. Contact Us',
    paragraphs: [
      'Questions about these Terms and Conditions or the use of Cinpc services can be directed to:',
      [
        'Email: ',
        { href: `mailto:${contact.email}`, label: contact.email },
      ],
      [
        'Phone: ',
        { href: `tel:${contact.phone}`, label: contact.phone },
      ],
      [
        'Contact form: Available on the ',
        { href: '/contact', label: 'Contact page' },
        ' of the Cinpc website.',
      ],
    ],
  },
];
