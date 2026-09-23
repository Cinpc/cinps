import { contact } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const cookiePolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      `This Cookie Policy explains how Cinpc uses cookies and similar technologies when you visit cinpc.com. Cinpc is a brand operated by CALL CENTER INP, registered at ${contact.address} under registration number [insert registration number].`,
      'Cookies and similar technologies may be used to support the operation, security, functionality, and performance of the Cinpc website. This Policy explains what these technologies are, why they may be used, and the choices available to website visitors.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    paragraphs: [
      "Cookies are small text files or pieces of data that a website can store on or access from a visitor's device. They allow websites to perform certain functions, remember settings, maintain security, and understand how visitors interact with different pages.",
      'Some cookies remain active only during a browsing session and expire when the browser is closed. Others may remain on a device for a defined period or until they are deleted by the user.',
      'Cookies may be placed directly by the Cinpc website or through third-party technologies used to support website functionality.',
    ],
  },
  {
    id: 'similar-technologies',
    title: '2. Similar Technologies',
    paragraphs: [
      'The Cinpc website may also use technologies that perform functions similar to cookies. These can include local storage, pixels, tags, scripts, and other technical identifiers.',
      'For simplicity, references to “cookies” in this Policy include similar technologies where they are used for comparable purposes.',
    ],
  },
  {
    id: 'why-we-use-cookies',
    title: '3. Why We Use Cookies',
    paragraphs: [
      'Cinpc may use cookies where they are necessary to operate the website or where they help provide, secure, measure, or improve website functionality.',
      'Depending on the website configuration, cookies may be used to:',
    ],
    list: [
      'Enable essential website functions.',
      'Maintain website and network security.',
      'Support forms and other interactive features.',
      'Remember language or website preferences.',
      'Understand how visitors navigate the website.',
      'Measure website traffic and performance.',
      'Detect technical errors or operational problems.',
      'Improve website content, structure, and usability.',
      'Support analytics or other website functionality where implemented.',
    ],
    afterList: [
      'The types of cookies used may change as the website, its functionality, and the technologies supporting it are updated.',
    ],
  },
  {
    id: 'strictly-necessary-cookies',
    title: '4. Strictly Necessary Cookies',
    paragraphs: [
      'Strictly necessary cookies support functions required for the website to operate securely and correctly. They may be used for security, network management, form functionality, fraud prevention, or remembering privacy choices.',
      'These cookies may be placed without consent where applicable law permits because the relevant functionality cannot operate properly without them.',
      'Blocking strictly necessary cookies through browser settings may cause some website features to become unavailable or work incorrectly.',
    ],
  },
  {
    id: 'functional-cookies',
    title: '5. Functional Cookies',
    paragraphs: [
      'Functional cookies may be used to remember choices made by visitors and provide a more consistent website experience.',
      'For example, these cookies may remember language preferences or other settings so that they do not need to be selected again during subsequent interactions with the website.',
      'Where applicable law requires consent for functional cookies, they will be used only after the necessary consent has been obtained.',
    ],
  },
  {
    id: 'analytics-and-performance-cookies',
    title: '6. Analytics and Performance Cookies',
    paragraphs: [
      'Cinpc may use analytics and performance cookies to understand how the website is accessed and used.',
      'These technologies can provide information about matters such as visited pages, navigation patterns, website performance, interactions with website features, and technical errors. The resulting information may be used to identify problems and improve the website experience.',
      'Where consent is required by applicable law, analytics and performance cookies will be activated only after the visitor has provided that consent.',
    ],
  },
  {
    id: 'marketing-and-advertising-cookies',
    title: '7. Marketing and Advertising Cookies',
    paragraphs: [
      'If Cinpc uses marketing or advertising technologies on the website, related cookies may be used to measure interactions with campaigns, understand the effectiveness of promotional activity, or support advertising functionality.',
      'Some of these technologies may be provided by third parties and may allow those providers to recognize a browser or device when it interacts with their services.',
      'Marketing and advertising cookies will be subject to consent where required by applicable law.',
    ],
  },
  {
    id: 'first-party-and-third-party-cookies',
    title: '8. First-Party and Third-Party Cookies',
    paragraphs: [
      'Cookies used through the Cinpc website may be either first-party or third-party cookies.',
      'First-party cookies are placed directly by or on behalf of Cinpc and generally support functions associated with the website itself.',
      'Third-party cookies are placed or accessed through technologies provided by external service providers. Depending on the functionality implemented on the website, third parties may provide services related to analytics, security, communications, embedded functionality, performance, or other technical operations.',
      'The presence and purposes of third-party cookies may change when website technologies or service providers are changed.',
    ],
  },
  {
    id: 'cookie-consent',
    title: '9. Cookie Consent',
    paragraphs: [
      'Where required by applicable law, Cinpc requests consent before placing or accessing cookies that are not strictly necessary for the operation of the website.',
      'A cookie consent notice may allow visitors to accept, reject, or manage applicable categories of non-essential cookies. Choices made through the consent mechanism may be stored so that the website can remember them.',
      'Strictly necessary cookies may remain active regardless of consent choices where they are required for website operation, security, or functionality and applicable law permits their use without consent.',
    ],
  },
  {
    id: 'managing-cookie-preferences',
    title: '10. Managing Cookie Preferences',
    paragraphs: [
      'Where cookie preference controls are provided on the website, visitors can use them to manage their choices regarding non-essential cookies.',
      "Visitors may withdraw previously provided consent or change their preferences where the website's cookie controls provide that functionality. Withdrawal of consent does not affect processing that lawfully occurred before consent was withdrawn.",
      'Cookie preferences may be specific to a particular browser or device. Visitors using multiple browsers or devices may therefore need to manage their preferences separately.',
    ],
  },
  {
    id: 'browser-settings',
    title: '11. Browser Settings',
    paragraphs: [
      'Most browsers provide settings that allow users to view, delete, restrict, or block cookies. Depending on the browser, users may also be able to receive notifications before cookies are stored.',
      'Blocking or deleting cookies through browser settings may affect the operation of the Cinpc website. Certain functions may not work correctly if cookies required to provide them are unavailable.',
      'Browser controls operate independently from any cookie preferences offered directly through the Cinpc website.',
    ],
  },
  {
    id: 'how-long-cookies-remain-on-a-device',
    title: '12. How Long Cookies Remain on a Device',
    paragraphs: [
      'The duration of a cookie depends on its purpose and configuration.',
      'Session cookies generally remain active only while a browser session is open and are removed or expire after the session ends. Persistent cookies may remain on a device for a defined period or until they are manually deleted.',
      'Cookie durations may change when website technologies or configurations are updated. Cinpc seeks to retain cookie-related information only for as long as reasonably necessary for the relevant purpose and in accordance with applicable requirements.',
    ],
  },
  {
    id: 'personal-data-collected-through-cookies',
    title: '13. Personal Data Collected Through Cookies',
    paragraphs: [
      'Some information generated or collected through cookies may qualify as personal data under applicable privacy laws.',
      'Depending on the technologies used, this information may include:',
    ],
    list: [
      'IP addresses.',
      'Browser and device information.',
      'Cookie or device identifiers.',
      'Website usage and interaction information.',
      'Technical and diagnostic information.',
      'General information about how visitors navigate the website.',
    ],
    afterList: [
      [
        'Where cookie-related information constitutes personal data, Cinpc processes it in accordance with applicable data protection requirements and the practices described in the Cinpc ',
        { href: '/privacy-policy', label: 'Privacy Policy' },
        '.',
      ],
    ],
  },
  {
    id: 'international-processing',
    title: '14. International Processing',
    paragraphs: [
      'Some technology or service providers involved in website operations may process information in countries other than the country from which a visitor accesses the Cinpc website.',
      'Where cookie-related information constitutes personal data and applicable law restricts international transfers, appropriate safeguards or other lawful transfer mechanisms will be applied where required.',
    ],
  },
  {
    id: 'changes-to-this-cookie-policy',
    title: '15. Changes to This Cookie Policy',
    paragraphs: [
      'Cinpc may update this Cookie Policy to reflect changes in website functionality, cookies, technologies, service providers, processing practices, or applicable legal requirements.',
    ],
  },
  {
    id: 'contact-us',
    title: '16. Contact Us',
    paragraphs: [
      'Questions or concerns about this Cookie Policy or the use of cookies on the Cinpc website can be directed to Cinpc through:',
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
