import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const cookiePolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'This Cookie Policy explains how Cinpc uses cookies and similar technologies when you visit cinpc.com. Cinpc is a brand operated by CALL CENTER INP.',
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
      [
        'If you have questions or concerns about this Cookie Policy or the use of cookies on the Cinpc website, please use the ',
        { href: contactFormHref, label: 'contact form' },
        '.',
      ],
    ],
  },
];

export const cookiePolicyEs: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'Esta Política de Cookies explica cómo Cinpc utiliza cookies y tecnologías similares cuando visita cinpc.com. Cinpc es una marca operada por CALL CENTER INP.',
      'Las cookies y tecnologías similares pueden utilizarse para facilitar el funcionamiento, la seguridad, la funcionalidad y el rendimiento del sitio web de Cinpc. Esta Política explica qué son estas tecnologías, por qué pueden utilizarse y qué opciones tienen disponibles los visitantes del sitio web.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: '1. ¿Qué son las cookies?',
    paragraphs: [
      'Las cookies son pequeños archivos de texto o fragmentos de datos que un sitio web puede almacenar en el dispositivo de un visitante o a los que puede acceder desde dicho dispositivo. Permiten a los sitios web realizar determinadas funciones, recordar configuraciones, mantener la seguridad y comprender cómo interactúan los visitantes con las distintas páginas.',
      'Algunas cookies permanecen activas únicamente durante una sesión de navegación y caducan cuando se cierra el navegador. Otras pueden permanecer en un dispositivo durante un período determinado o hasta que el usuario las elimine.',
      'Las cookies pueden ser instaladas directamente por el sitio web de Cinpc o a través de tecnologías de terceros utilizadas para facilitar la funcionalidad del sitio web.',
    ],
  },
  {
    id: 'similar-technologies',
    title: '2. Tecnologías similares',
    paragraphs: [
      'El sitio web de Cinpc también puede utilizar tecnologías que realizan funciones similares a las cookies. Estas pueden incluir almacenamiento local, píxeles, etiquetas, scripts y otros identificadores técnicos.',
      'Para simplificar, las referencias a «cookies» en esta Política incluyen tecnologías similares cuando se utilizan para fines comparables.',
    ],
  },
  {
    id: 'why-we-use-cookies',
    title: '3. Por qué utilizamos cookies',
    paragraphs: [
      'Cinpc puede utilizar cookies cuando sean necesarias para el funcionamiento del sitio web o cuando ayuden a proporcionar, proteger, medir o mejorar su funcionalidad.',
      'Dependiendo de la configuración del sitio web, las cookies pueden utilizarse para:',
    ],
    list: [
      'Habilitar funciones esenciales del sitio web.',
      'Mantener la seguridad del sitio web y de la red.',
      'Facilitar el funcionamiento de formularios y otras funciones interactivas.',
      'Recordar el idioma u otras preferencias del sitio web.',
      'Comprender cómo navegan los visitantes por el sitio web.',
      'Medir el tráfico y el rendimiento del sitio web.',
      'Detectar errores técnicos o problemas operativos.',
      'Mejorar el contenido, la estructura y la facilidad de uso del sitio web.',
      'Facilitar funciones de análisis u otras funcionalidades del sitio web cuando estén implementadas.',
    ],
    afterList: [
      'Los tipos de cookies utilizados pueden cambiar a medida que se actualicen el sitio web, sus funcionalidades y las tecnologías que lo sustentan.',
    ],
  },
  {
    id: 'strictly-necessary-cookies',
    title: '4. Cookies estrictamente necesarias',
    paragraphs: [
      'Las cookies estrictamente necesarias permiten realizar funciones imprescindibles para que el sitio web opere de forma segura y correcta. Pueden utilizarse para la seguridad, la gestión de la red, el funcionamiento de formularios, la prevención del fraude o para recordar las preferencias de privacidad.',
      'Estas cookies pueden instalarse sin consentimiento cuando la legislación aplicable lo permita, ya que las funcionalidades correspondientes no pueden operar correctamente sin ellas.',
      'Bloquear las cookies estrictamente necesarias mediante la configuración del navegador puede provocar que algunas funciones del sitio web dejen de estar disponibles o no funcionen correctamente.',
    ],
  },
  {
    id: 'functional-cookies',
    title: '5. Cookies funcionales',
    paragraphs: [
      'Las cookies funcionales pueden utilizarse para recordar las elecciones realizadas por los visitantes y ofrecer una experiencia más consistente en el sitio web.',
      'Por ejemplo, estas cookies pueden recordar las preferencias de idioma u otras configuraciones para que no sea necesario volver a seleccionarlas durante futuras interacciones con el sitio web.',
      'Cuando la legislación aplicable exija consentimiento para utilizar cookies funcionales, estas solo se utilizarán después de haber obtenido el consentimiento necesario.',
    ],
  },
  {
    id: 'analytics-and-performance-cookies',
    title: '6. Cookies de análisis y rendimiento',
    paragraphs: [
      'Cinpc puede utilizar cookies de análisis y rendimiento para comprender cómo se accede y se utiliza el sitio web.',
      'Estas tecnologías pueden proporcionar información sobre aspectos como las páginas visitadas, los patrones de navegación, el rendimiento del sitio web, las interacciones con sus funciones y los errores técnicos. La información obtenida puede utilizarse para identificar problemas y mejorar la experiencia en el sitio web.',
      'Cuando la legislación aplicable exija consentimiento, las cookies de análisis y rendimiento solo se activarán después de que el visitante haya proporcionado dicho consentimiento.',
    ],
  },
  {
    id: 'marketing-and-advertising-cookies',
    title: '7. Cookies de marketing y publicidad',
    paragraphs: [
      'Si Cinpc utiliza tecnologías de marketing o publicidad en el sitio web, las cookies relacionadas pueden utilizarse para medir las interacciones con campañas, comprender la eficacia de las actividades promocionales o facilitar funciones publicitarias.',
      'Algunas de estas tecnologías pueden ser proporcionadas por terceros y permitir a dichos proveedores reconocer un navegador o dispositivo cuando interactúa con sus servicios.',
      'Las cookies de marketing y publicidad estarán sujetas a consentimiento cuando así lo exija la legislación aplicable.',
    ],
  },
  {
    id: 'first-party-and-third-party-cookies',
    title: '8. Cookies propias y de terceros',
    paragraphs: [
      'Las cookies utilizadas a través del sitio web de Cinpc pueden ser cookies propias o de terceros.',
      'Las cookies propias son instaladas directamente por Cinpc o en su nombre y, por lo general, permiten realizar funciones relacionadas con el propio sitio web.',
      'Las cookies de terceros son instaladas o utilizadas a través de tecnologías proporcionadas por proveedores de servicios externos. Dependiendo de las funcionalidades implementadas en el sitio web, terceros pueden prestar servicios relacionados con análisis, seguridad, comunicaciones, funcionalidades integradas, rendimiento u otras operaciones técnicas.',
      'La presencia y las finalidades de las cookies de terceros pueden cambiar cuando se modifiquen las tecnologías del sitio web o los proveedores de servicios.',
    ],
  },
  {
    id: 'cookie-consent',
    title: '9. Consentimiento para el uso de cookies',
    paragraphs: [
      'Cuando lo exija la legislación aplicable, Cinpc solicita el consentimiento antes de instalar o acceder a cookies que no sean estrictamente necesarias para el funcionamiento del sitio web.',
      'Un aviso de consentimiento de cookies puede permitir a los visitantes aceptar, rechazar o gestionar las categorías correspondientes de cookies no esenciales. Las elecciones realizadas mediante el mecanismo de consentimiento pueden almacenarse para que el sitio web pueda recordarlas.',
      'Las cookies estrictamente necesarias pueden permanecer activas independientemente de las preferencias de consentimiento cuando sean necesarias para el funcionamiento, la seguridad o la funcionalidad del sitio web y la legislación aplicable permita utilizarlas sin consentimiento.',
    ],
  },
  {
    id: 'managing-cookie-preferences',
    title: '10. Gestión de las preferencias de cookies',
    paragraphs: [
      'Cuando el sitio web proporcione controles de preferencias de cookies, los visitantes podrán utilizarlos para gestionar sus elecciones relativas a las cookies no esenciales.',
      'Los visitantes pueden retirar el consentimiento otorgado previamente o modificar sus preferencias cuando los controles de cookies del sitio web ofrezcan dicha funcionalidad. La retirada del consentimiento no afecta al tratamiento realizado lícitamente antes de que dicho consentimiento fuera retirado.',
      'Las preferencias de cookies pueden ser específicas de un determinado navegador o dispositivo. Por lo tanto, los visitantes que utilicen varios navegadores o dispositivos pueden tener que gestionar sus preferencias por separado.',
    ],
  },
  {
    id: 'browser-settings',
    title: '11. Configuración del navegador',
    paragraphs: [
      'La mayoría de los navegadores ofrecen opciones que permiten a los usuarios consultar, eliminar, restringir o bloquear las cookies. Dependiendo del navegador, los usuarios también pueden recibir notificaciones antes de que se almacenen cookies.',
      'Bloquear o eliminar cookies mediante la configuración del navegador puede afectar al funcionamiento del sitio web de Cinpc. Determinadas funciones pueden no funcionar correctamente si las cookies necesarias para proporcionarlas no están disponibles.',
      'Los controles del navegador funcionan de manera independiente de las preferencias de cookies ofrecidas directamente a través del sitio web de Cinpc.',
    ],
  },
  {
    id: 'how-long-cookies-remain-on-a-device',
    title: '12. Cuánto tiempo permanecen las cookies en un dispositivo',
    paragraphs: [
      'La duración de una cookie depende de su finalidad y configuración.',
      'Las cookies de sesión generalmente permanecen activas únicamente mientras una sesión del navegador está abierta y se eliminan o caducan cuando finaliza la sesión. Las cookies persistentes pueden permanecer en un dispositivo durante un período determinado o hasta que se eliminen manualmente.',
      'La duración de las cookies puede cambiar cuando se actualicen las tecnologías o configuraciones del sitio web. Cinpc procura conservar la información relacionada con las cookies únicamente durante el tiempo razonablemente necesario para la finalidad correspondiente y de conformidad con los requisitos aplicables.',
    ],
  },
  {
    id: 'personal-data-collected-through-cookies',
    title: '13. Datos personales recopilados mediante cookies',
    paragraphs: [
      'Parte de la información generada o recopilada mediante cookies puede considerarse datos personales conforme a las leyes de privacidad aplicables.',
      'Dependiendo de las tecnologías utilizadas, esta información puede incluir:',
    ],
    list: [
      'Direcciones IP.',
      'Información sobre el navegador y el dispositivo.',
      'Identificadores de cookies o dispositivos.',
      'Información sobre el uso y las interacciones con el sitio web.',
      'Información técnica y de diagnóstico.',
      'Información general sobre cómo navegan los visitantes por el sitio web.',
    ],
    afterList: [
      [
        'Cuando la información relacionada con las cookies constituya datos personales, Cinpc la tratará de conformidad con los requisitos aplicables en materia de protección de datos y las prácticas descritas en la ',
        { href: '/privacy-policy', label: 'Política de Privacidad' },
        ' de Cinpc.',
      ],
    ],
  },
  {
    id: 'international-processing',
    title: '14. Tratamiento internacional',
    paragraphs: [
      'Algunos proveedores de tecnología o servicios que participan en el funcionamiento del sitio web pueden tratar información en países distintos de aquel desde el que el visitante accede al sitio web de Cinpc.',
      'Cuando la información relacionada con las cookies constituya datos personales y la legislación aplicable restrinja las transferencias internacionales, se aplicarán las garantías adecuadas u otros mecanismos legales de transferencia cuando sea necesario.',
    ],
  },
  {
    id: 'changes-to-this-cookie-policy',
    title: '15. Cambios en esta Política de Cookies',
    paragraphs: [
      'Cinpc puede actualizar esta Política de Cookies para reflejar cambios en la funcionalidad del sitio web, las cookies, las tecnologías, los proveedores de servicios, las prácticas de tratamiento o los requisitos legales aplicables.',
    ],
  },
  {
    id: 'contact-us',
    title: '16. Contacto',
    paragraphs: [
      [
        'Si tiene preguntas o inquietudes sobre esta Política de Cookies o el uso de cookies en el sitio web de Cinpc, utilice el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        '.',
      ],
    ],
  },
];

export function getCookiePolicy(locale: string): PolicySection[] {
  return locale === 'es' ? cookiePolicyEs : cookiePolicy;
}
