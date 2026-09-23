import { contact } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const privacyPolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'This Privacy Policy explains how Cinpc collects, uses, stores, and otherwise processes personal data when you visit cinpc.com, contact us, request information or a quote, or otherwise interact with us.',
      `Cinpc is a brand operated by CALL CENTER INP, registered at ${contact.address} under registration number [insert registration number].`,
      'We process personal data in accordance with applicable data protection and privacy laws. The specific rules and rights that apply to you may depend on your location and the circumstances in which your personal data is processed.',
    ],
  },
  {
    id: 'scope-of-this-privacy-policy',
    title: '1. Scope of This Privacy Policy',
    paragraphs: [
      'This Privacy Policy primarily applies to personal data collected through the Cinpc website and direct business communications with prospective and existing clients.',
      'Cinpc also provides outsourced call center and business process outsourcing services to financial-sector businesses. In providing those services, Cinpc may process personal data relating to the customers, applicants, borrowers, policyholders, users, or other individuals associated with its clients.',
      "Where Cinpc processes such personal data on behalf of a client and according to that client's instructions, the client generally determines the purposes and means of the processing, subject to applicable law. Those activities may also be governed by a separate service agreement, data processing agreement, privacy notice, or other contractual documentation.",
    ],
  },
  {
    id: 'personal-data-we-collect',
    title: '2. Personal Data We Collect',
    paragraphs: [
      'The personal data we collect depends on how you interact with Cinpc.',
    ],
  },
  {
    id: 'information-you-provide-through-the-contact-form',
    title: 'Information You Provide Through the Contact Form',
    nav: false,
    paragraphs: [
      'When you submit the contact form on the Cinpc website, we may collect:',
    ],
    list: [
      'Your full name.',
      'Your company name.',
      'Your business email address.',
      'Your phone number, if you choose to provide it.',
      'The type of service or support you are interested in.',
      'Your estimated monthly call volume.',
      'Information you provide in the “Tell Us More” field.',
      'Any other information you voluntarily include in your request.',
    ],
    afterList: [
      'Please avoid including unnecessary sensitive or confidential personal information in free-text fields.',
    ],
  },
  {
    id: 'information-you-provide-directly',
    title: 'Information You Provide Directly',
    nav: false,
    paragraphs: [
      'If you communicate with Cinpc by email, phone, through the Contact page, or through another available business communication channel, we may collect the information you provide during that communication.',
      'This may include your name, job title or business role, company details, contact information, service requirements, correspondence, and other information relevant to your inquiry or business relationship with Cinpc.',
    ],
  },
  {
    id: 'information-collected-automatically',
    title: 'Information Collected Automatically',
    nav: false,
    paragraphs: [
      'When you access the Cinpc website, certain technical information may be collected automatically by the website, hosting infrastructure, security systems, or technologies used on the website.',
      'Depending on the technologies implemented, this may include:',
    ],
    list: [
      'IP address.',
      'Browser type and version.',
      'Device type and operating system.',
      'Language settings.',
      'Pages visited and interactions with the website.',
      'Date and time of access.',
      'Referring and exit pages.',
      'General technical, diagnostic, and security information.',
      'Cookie and similar technology identifiers, where applicable.',
    ],
    afterList: [
      [
        'Further information about cookies and similar technologies is available in the Cinpc ',
        { href: '/cookie-policy', label: 'Cookie Policy' },
        '.',
      ],
    ],
  },
  {
    id: 'how-we-use-personal-data',
    title: '3. How We Use Personal Data',
    paragraphs: [],
    listIntro: 'Cinpc may process personal data for purposes including:',
    list: [
      'Receiving and responding to inquiries.',
      'Reviewing requests submitted through the website.',
      'Contacting prospective clients about their requirements.',
      'Understanding which call center or BPO services may be appropriate for a business.',
      'Preparing and discussing quotes, proposals, scopes of work, or potential service arrangements.',
      'Communicating with existing and prospective clients.',
      'Establishing and managing business relationships.',
      'Providing agreed services.',
      'Maintaining records of business communications.',
      'Operating, maintaining, and securing the website.',
      'Identifying and preventing misuse, fraud, security incidents, or unauthorized activity.',
      'Improving website functionality and understanding how the website is used, where applicable.',
      'Complying with legal, regulatory, accounting, or contractual obligations.',
      'Establishing, exercising, or defending legal claims.',
    ],
    afterList: [
      'We do not use personal data for purposes that are incompatible with the reason it was collected unless permitted or required by applicable law.',
    ],
  },
  {
    id: 'legal-bases-for-processing',
    title: '4. Legal Bases for Processing',
    paragraphs: [
      'Where applicable data protection law requires a legal basis for processing personal data, Cinpc may rely on one or more of the following bases depending on the circumstances:',
    ],
    list: [
      [
        { strong: 'Consent:' },
        ' Where you have given valid consent to a particular processing activity.',
      ],
      [
        { strong: 'Contractual necessity:' },
        ' Where processing is necessary to enter into or perform a contract or to take requested steps before entering into a contract.',
      ],
      [
        { strong: 'Legitimate interests:' },
        ' Where processing is necessary for legitimate business purposes, and those interests are not overridden by your applicable rights and interests.',
      ],
      [
        { strong: 'Legal obligations:' },
        ' Where processing is necessary to comply with an applicable legal or regulatory requirement.',
      ],
      [
        { strong: 'Legal claims:' },
        ' Where processing is necessary to establish, exercise, or defend legal rights or claims.',
      ],
    ],
    afterList: [
      'The appropriate legal basis may vary according to the type of information, relationship, and processing activity involved.',
    ],
  },
  {
    id: 'contact-form-consent',
    title: '5. Contact Form Consent',
    paragraphs: [
      'The Cinpc contact form requires users to confirm that they agree to the processing of their personal data in accordance with this Privacy Policy before submitting a request.',
      'Information submitted through the form is used primarily to review your request, communicate with you, understand your business requirements, and take steps toward a potential business relationship.',
      'Where processing relies specifically on your consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out before consent was withdrawn, and Cinpc may continue processing information where another lawful basis applies.',
    ],
  },
  {
    id: 'business-communications',
    title: '6. Business Communications',
    paragraphs: [
      'If you contact Cinpc regarding its services, we may use your business contact information to respond to your inquiry and continue communications related to your request.',
      'Where you represent a prospective or existing business client, we may also retain relevant communications and contact information for relationship management, service administration, contractual discussions, and legitimate business recordkeeping.',
      'Cinpc does not treat the submission of a service inquiry as unrestricted permission to use your contact details for unrelated purposes.',
    ],
  },
  {
    id: 'personal-data-processed-for-clients',
    title: '7. Personal Data Processed for Clients',
    paragraphs: [
      'Cinpc provides outsourced customer operations that may involve handling personal data on behalf of its business clients. Depending on the particular engagement, this may occur in connection with customer care, applications, verification-related communication, collections support, fraud-related communication, complaint handling, follow-ups, or other agreed customer operations.',
      "The categories of data processed in these circumstances depend on the client's business, the outsourced function, and the scope of the relevant service agreement.",
      'Where Cinpc acts on behalf of a client, processing is performed according to the agreed scope, documented instructions, applicable contractual requirements, and relevant data protection obligations. The client remains responsible for determining whether it has an appropriate lawful basis for the personal data and customer processes it instructs Cinpc to handle, except to the extent applicable law provides otherwise.',
      'If your personal data has been processed by Cinpc solely on behalf of one of its clients, requests concerning that data may need to be directed to the relevant client as the organization responsible for determining how and why the information is processed.',
    ],
  },
  {
    id: 'financial-and-sensitive-information',
    title: '8. Financial and Sensitive Information',
    paragraphs: [
      'Because Cinpc supports businesses operating in the financial sector, certain client engagements may involve personal or operational information requiring additional care.',
      'The exact information Cinpc is authorized to access or process depends on the outsourced function and the instructions provided by the relevant client. Cinpc does not require visitors to submit financial account information, payment credentials, identity documents, or other sensitive information through the general website contact form unless specifically requested through an appropriate authorized process.',
      'Do not submit passwords, payment card details, account credentials, or other unnecessary sensitive information through the general contact form.',
    ],
  },
  {
    id: 'how-we-share-personal-data',
    title: '9. How We Share Personal Data',
    paragraphs: [
      'Cinpc does not disclose personal data indiscriminately. Personal data may be shared where reasonably necessary for the purposes described in this Privacy Policy.',
      'Depending on the circumstances, recipients may include:',
    ],
    list: [
      'Service providers supporting website hosting, infrastructure, communications, security, or other business operations.',
      'Professional advisers such as legal, accounting, compliance, or auditing professionals where necessary.',
      'Business clients where processing is performed in connection with an agreed outsourced service.',
      'Public authorities, regulators, courts, or law enforcement bodies where disclosure is required or permitted by law.',
      'Parties involved in a merger, acquisition, restructuring, financing, sale of assets, or similar corporate transaction, subject to appropriate safeguards where required.',
    ],
    afterList: [
      'Service providers receiving personal data on our behalf may only process that information for authorized purposes and subject to applicable contractual and legal requirements.',
    ],
  },
  {
    id: 'international-data-transfers',
    title: '10. International Data Transfers',
    paragraphs: [
      'Cinpc, its clients, or its service providers may operate in different countries. As a result, personal data may in some circumstances be processed or stored outside the country in which it was originally collected.',
      'Where applicable law restricts international transfers of personal data, Cinpc will use an appropriate transfer mechanism or other safeguards required by that law.',
      'The exact safeguards used may depend on the countries involved, the nature of the processing, and the legal framework applicable to the transfer.',
    ],
  },
  {
    id: 'data-retention',
    title: '11. Data Retention',
    paragraphs: [
      'Cinpc retains personal data only for as long as reasonably necessary for the purposes for which it was collected or as required by applicable legal, contractual, regulatory, accounting, or dispute-resolution obligations.',
      'Retention periods may vary depending on:',
    ],
    list: [
      'The nature and purpose of the information.',
      'Whether an inquiry develops into a business relationship.',
      'The duration of a client relationship.',
      'Applicable contractual requirements.',
      'Legal or regulatory recordkeeping obligations.',
      'The need to establish, exercise, or defend legal claims.',
      'Security and fraud-prevention requirements.',
    ],
    afterList: [
      'When personal data is no longer required, it may be deleted, anonymized, or otherwise securely disposed of in accordance with applicable requirements.',
    ],
  },
  {
    id: 'data-security',
    title: '12. Data Security',
    paragraphs: [
      'Cinpc uses reasonable organizational and technical measures intended to protect personal data against unauthorized access, disclosure, alteration, loss, misuse, or destruction.',
      'The measures applied may vary according to the nature of the information, the processing activity, and the systems involved. Where Cinpc processes information as part of a specific client engagement, additional security requirements may be established in the applicable contractual documentation.',
      'No method of electronic transmission or storage can be guaranteed to be completely secure. Users should therefore take reasonable precautions when sending information electronically and avoid submitting information that is not necessary for the relevant purpose.',
    ],
  },
  {
    id: 'cookies-and-similar-technologies',
    title: '13. Cookies and Similar Technologies',
    paragraphs: [
      'The Cinpc website may use cookies and similar technologies necessary for website functionality, security, preferences, analytics, or other purposes.',
      'Where required by applicable law, non-essential cookies will be used only after the required consent has been obtained.',
      [
        'You can find more information about the categories of cookies used, their purposes, available controls, and applicable retention periods in the Cinpc ',
        { href: '/cookie-policy', label: 'Cookie Policy' },
        '.',
      ],
    ],
  },
  {
    id: 'your-privacy-rights',
    title: '14. Your Privacy Rights',
    paragraphs: [
      'Depending on the data protection laws applicable to you, you may have rights concerning your personal data. These may include the right to:',
    ],
    list: [
      'Request access to personal data held about you.',
      'Request correction of inaccurate or incomplete personal data.',
      'Request deletion of personal data in certain circumstances.',
      'Request restriction of certain processing activities.',
      'Object to processing based on certain legal grounds.',
      'Withdraw consent where processing relies on consent.',
      'Request portability of certain personal data where applicable.',
      'Lodge a complaint with an applicable data protection authority.',
    ],
    afterList: [
      'These rights are not absolute and may be subject to legal conditions, exemptions, verification requirements, and limitations.',
    ],
  },
  {
    id: 'exercising-your-rights',
    title: '15. Exercising Your Rights',
    paragraphs: [
      [
        'To make a privacy request concerning personal data processed directly by Cinpc, contact us using the details provided at the end of this Privacy Policy or through the contact form available on the ',
        { href: '/contact', label: 'Contact page' },
        '.',
      ],
      'We may need to verify your identity before completing a request. We may also request additional information where necessary to identify the relevant data or understand the scope of your request.',
      'If Cinpc processes the relevant information solely on behalf of a business client, we may direct your request to that client or assist the client with responding, depending on our legal role and contractual obligations.',
    ],
  },
  {
    id: 'complaints',
    title: '16. Complaints',
    paragraphs: [
      'If you have concerns about how Cinpc processes your personal data, you may contact us so that we can review the matter.',
      'Depending on your location and applicable law, you may also have the right to submit a complaint to the competent data protection or privacy authority in your jurisdiction.',
    ],
  },
  {
    id: 'third-party-websites',
    title: '17. Third-Party Websites',
    paragraphs: [
      'The Cinpc website may contain links to websites or services operated by third parties. Cinpc does not control the privacy practices of those third parties.',
      "If you follow an external link, the processing of personal data on the destination website is governed by that third party's privacy policy or other applicable terms. We recommend reviewing those policies before providing personal information.",
    ],
  },
  {
    id: 'childrens-privacy',
    title: "18. Children's Privacy",
    paragraphs: [
      'The Cinpc website and services are intended for business and professional use and are not directed to children.',
      'Cinpc does not knowingly seek to collect personal data from children through its general business inquiry channels. If we become aware that personal data relating to a child has been submitted through the website without an appropriate lawful basis, we may take reasonable steps to delete or otherwise appropriately handle that information.',
    ],
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: '19. Changes to This Privacy Policy',
    paragraphs: [
      'Cinpc may update this Privacy Policy to reflect changes in its website, services, processing practices, technologies, or applicable legal requirements.',
    ],
  },
  {
    id: 'contact-us',
    title: '20. Contact Us',
    paragraphs: [
      'Questions, requests, or concerns regarding this Privacy Policy or the processing of personal data by Cinpc can be submitted through:',
      ['Email: ', { href: `mailto:${contact.email}`, label: contact.email }],
      ['Phone: ', { href: `tel:${contact.phone}`, label: contact.phone }],
      [
        'Contact form: Available on the ',
        { href: '/contact', label: 'Contact page' },
        ' of the Cinpc website.',
      ],
    ],
  },
];
