import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const privacyPolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'This Privacy Policy explains how Cinpc collects, uses, stores, and otherwise processes personal data when you visit cinpc.com, contact us, request information or a quote, or otherwise interact with us.',
      'Cinpc is a brand operated by Call Center Inp.',
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
      'If you submit an inquiry through the Cinpc contact form, we may collect the information you provide in your request and any subsequent communications about it. This may include your name, job title or business role, company details, contact information, service requirements, correspondence, and other information relevant to your inquiry or business relationship with Cinpc.',
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
      'If you submit an inquiry through the Cinpc contact form, we may use the contact information you provide to respond and discuss your request.',
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
        'To make a privacy request concerning personal data processed directly by Cinpc, please use the ',
        { href: contactFormHref, label: 'contact form' },
        ' available on our website.',
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
      [
        'If you have questions, requests, or concerns about this Privacy Policy or how Cinpc processes personal data, please use the ',
        { href: contactFormHref, label: 'contact form' },
        '.',
      ],
    ],
  },
];

export const privacyPolicyEs: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'Esta Política de Privacidad explica cómo Cinpc recopila, utiliza, almacena y trata de cualquier otra forma los datos personales cuando visitas cinpc.com, contactas con nosotros, solicitas información o un presupuesto, o interactúas con nosotros de cualquier otra manera.',
      'Cinpc es una marca operada por Call Center Inp.',
      'Tratamos los datos personales de conformidad con las leyes aplicables en materia de protección de datos y privacidad. Las normas y los derechos concretos que le correspondan pueden depender de su ubicación y de las circunstancias en las que se traten sus datos personales.',
    ],
  },
  {
    id: 'scope-of-this-privacy-policy',
    title: '1. Alcance de esta Política de Privacidad',
    paragraphs: [
      'Esta Política de Privacidad se aplica principalmente a los datos personales recopilados a través del sitio web de Cinpc y de las comunicaciones comerciales directas con clientes potenciales y existentes.',
      'Cinpc también presta servicios externalizados de call center y externalización de procesos empresariales a empresas del sector financiero. Al prestar estos servicios, Cinpc puede tratar datos personales relacionados con clientes, solicitantes, prestatarios, asegurados, usuarios u otras personas vinculadas a sus clientes.',
      'Cuando Cinpc trata dichos datos personales en nombre de un cliente y de acuerdo con sus instrucciones, el cliente generalmente determina los fines y medios del tratamiento, de conformidad con la legislación aplicable. Estas actividades también pueden estar reguladas por un acuerdo de prestación de servicios independiente, un acuerdo de tratamiento de datos, un aviso de privacidad u otra documentación contractual.',
    ],
  },
  {
    id: 'personal-data-we-collect',
    title: '2. Datos personales que recopilamos',
    paragraphs: [
      'Los datos personales que recopilamos dependen de cómo interactúes con Cinpc.',
    ],
  },
  {
    id: 'information-you-provide-through-the-contact-form',
    title: 'Información que proporcionas a través del formulario de contacto',
    nav: false,
    paragraphs: [
      'Cuando envías el formulario de contacto del sitio web de Cinpc, podemos recopilar:',
    ],
    list: [
      'Tu nombre completo.',
      'El nombre de tu empresa.',
      'Tu dirección de correo electrónico corporativo.',
      'Tu número de teléfono, si decides proporcionarlo.',
      'El tipo de servicio o soporte que te interesa.',
      'Tu volumen mensual estimado de llamadas.',
      'La información que proporciones en el campo «Cuéntanos más».',
      'Cualquier otra información que incluyas voluntariamente en tu solicitud.',
    ],
    afterList: [
      'Evita incluir información personal sensible o confidencial que no sea necesaria en los campos de texto libre.',
    ],
  },
  {
    id: 'information-you-provide-directly',
    title: 'Información que proporcionas directamente',
    nav: false,
    paragraphs: [
      'Si envía una consulta a través del formulario de contacto de Cinpc, podemos recopilar la información que proporcione en su solicitud y en cualquier comunicación posterior relacionada con ella. Esta información puede incluir su nombre, cargo o función profesional, datos de la empresa, información de contacto, necesidades de servicio, correspondencia y otros datos relevantes para su consulta o relación comercial con Cinpc.',
    ],
  },
  {
    id: 'information-collected-automatically',
    title: 'Información recopilada automáticamente',
    nav: false,
    paragraphs: [
      'Cuando accedes al sitio web de Cinpc, determinada información técnica puede ser recopilada automáticamente por el sitio web, la infraestructura de alojamiento, los sistemas de seguridad o las tecnologías utilizadas en el sitio.',
      'Dependiendo de las tecnologías implementadas, esta información puede incluir:',
    ],
    list: [
      'Dirección IP.',
      'Tipo y versión del navegador.',
      'Tipo de dispositivo y sistema operativo.',
      'Configuración de idioma.',
      'Páginas visitadas e interacciones con el sitio web.',
      'Fecha y hora de acceso.',
      'Páginas de referencia y de salida.',
      'Información técnica, de diagnóstico y de seguridad de carácter general.',
      'Identificadores de cookies y tecnologías similares, cuando corresponda.',
    ],
    afterList: [
      [
        'Puedes encontrar más información sobre las cookies y tecnologías similares en la ',
        { href: '/cookie-policy', label: 'Política de Cookies' },
        ' de Cinpc.',
      ],
    ],
  },
  {
    id: 'how-we-use-personal-data',
    title: '3. Cómo utilizamos los datos personales',
    paragraphs: [],
    listIntro: 'Cinpc puede tratar datos personales para fines que incluyen:',
    list: [
      'Recibir y responder consultas.',
      'Revisar las solicitudes enviadas a través del sitio web.',
      'Contactar con clientes potenciales para hablar sobre sus necesidades.',
      'Comprender qué servicios de call center o BPO pueden ser adecuados para una empresa.',
      'Preparar y analizar presupuestos, propuestas, alcances de trabajo o posibles acuerdos de prestación de servicios.',
      'Comunicarse con clientes actuales y potenciales.',
      'Establecer y gestionar relaciones comerciales.',
      'Prestar los servicios acordados.',
      'Mantener registros de comunicaciones comerciales.',
      'Operar, mantener y proteger el sitio web.',
      'Identificar y prevenir usos indebidos, fraudes, incidentes de seguridad o actividades no autorizadas.',
      'Mejorar la funcionalidad del sitio web y comprender cómo se utiliza, cuando corresponda.',
      'Cumplir obligaciones legales, normativas, contables o contractuales.',
      'Establecer, ejercer o defender reclamaciones legales.',
    ],
    afterList: [
      'No utilizamos los datos personales para fines incompatibles con el motivo por el que fueron recopilados, salvo cuando lo permita o exija la legislación aplicable.',
    ],
  },
  {
    id: 'legal-bases-for-processing',
    title: '4. Bases jurídicas para el tratamiento',
    paragraphs: [
      'Cuando la legislación aplicable en materia de protección de datos requiera una base jurídica para tratar datos personales, Cinpc podrá basarse en una o varias de las siguientes bases, dependiendo de las circunstancias:',
    ],
    list: [
      [
        { strong: 'Consentimiento:' },
        ' Cuando hayas otorgado un consentimiento válido para una determinada actividad de tratamiento.',
      ],
      [
        { strong: 'Necesidad contractual:' },
        ' Cuando el tratamiento sea necesario para celebrar o ejecutar un contrato o para adoptar las medidas solicitadas antes de celebrar un contrato.',
      ],
      [
        { strong: 'Intereses legítimos:' },
        ' Cuando el tratamiento sea necesario para fines empresariales legítimos y dichos intereses no prevalezcan sobre tus derechos e intereses aplicables.',
      ],
      [
        { strong: 'Obligaciones legales:' },
        ' Cuando el tratamiento sea necesario para cumplir un requisito legal o normativo aplicable.',
      ],
      [
        { strong: 'Reclamaciones legales:' },
        ' Cuando el tratamiento sea necesario para establecer, ejercer o defender derechos o reclamaciones legales.',
      ],
    ],
    afterList: [
      'La base jurídica adecuada puede variar en función del tipo de información, la relación y la actividad de tratamiento correspondiente.',
    ],
  },
  {
    id: 'contact-form-consent',
    title: '5. Consentimiento del formulario de contacto',
    paragraphs: [
      'El formulario de contacto de Cinpc requiere que los usuarios confirmen que aceptan el tratamiento de sus datos personales de conformidad con esta Política de Privacidad antes de enviar una solicitud.',
      'La información enviada a través del formulario se utiliza principalmente para revisar tu solicitud, comunicarnos contigo, comprender las necesidades de tu empresa y adoptar medidas para establecer una posible relación comercial.',
      'Cuando el tratamiento se base específicamente en tu consentimiento, puedes retirarlo en cualquier momento. La retirada del consentimiento no afecta a la licitud del tratamiento realizado antes de dicha retirada, y Cinpc podrá continuar tratando la información cuando exista otra base jurídica aplicable.',
    ],
  },
  {
    id: 'business-communications',
    title: '6. Comunicaciones comerciales',
    paragraphs: [
      'Si envía una consulta a través del formulario de contacto de Cinpc, podemos utilizar la información de contacto que proporcione para responderle y comentar su solicitud.',
      'Si representa a un cliente empresarial potencial o actual, también podemos conservar las comunicaciones y la información de contacto pertinentes para gestionar la relación, administrar los servicios, mantener conversaciones contractuales y conservar los registros comerciales necesarios.',
      'Cinpc no considera que el envío de una consulta sobre sus servicios constituzca una autorización ilimitada para utilizar sus datos de contacto con fines no relacionados.',
    ],
  },
  {
    id: 'personal-data-processed-for-clients',
    title: '7. Datos personales tratados para clientes',
    paragraphs: [
      'Cinpc presta servicios externalizados de atención al cliente que pueden implicar el tratamiento de datos personales en nombre de sus clientes empresariales. Dependiendo del encargo concreto, esto puede ocurrir en relación con la atención al cliente, solicitudes, comunicaciones relacionadas con verificaciones, soporte de cobros, comunicaciones relacionadas con fraudes, gestión de reclamaciones, seguimientos u otras operaciones de atención al cliente acordadas.',
      'Las categorías de datos tratados en estas circunstancias dependen de la actividad del cliente, la función externalizada y el alcance del acuerdo de prestación de servicios correspondiente.',
      'Cuando Cinpc actúa en nombre de un cliente, el tratamiento se realiza de acuerdo con el alcance acordado, las instrucciones documentadas, los requisitos contractuales aplicables y las obligaciones pertinentes en materia de protección de datos. El cliente sigue siendo responsable de determinar si dispone de una base jurídica adecuada para los datos personales y los procesos de atención al cliente que encarga a Cinpc, salvo que la legislación aplicable disponga lo contrario.',
      'Si tus datos personales han sido tratados por Cinpc exclusivamente en nombre de uno de sus clientes, es posible que las solicitudes relacionadas con dichos datos deban dirigirse al cliente correspondiente como organización responsable de determinar cómo y por qué se trata la información.',
    ],
  },
  {
    id: 'financial-and-sensitive-information',
    title: '8. Información financiera y sensible',
    paragraphs: [
      'Debido a que Cinpc presta soporte a empresas que operan en el sector financiero, determinados encargos de clientes pueden implicar información personal u operativa que requiera medidas adicionales de protección.',
      'La información exacta a la que Cinpc está autorizada a acceder o que puede tratar depende de la función externalizada y de las instrucciones proporcionadas por el cliente correspondiente. Cinpc no solicita a los visitantes que proporcionen información de cuentas financieras, credenciales de pago, documentos de identidad u otra información sensible a través del formulario general de contacto del sitio web, salvo que se solicite específicamente mediante un proceso autorizado adecuado.',
      'No envíes contraseñas, datos de tarjetas de pago, credenciales de cuentas u otra información sensible innecesaria a través del formulario general de contacto.',
    ],
  },
  {
    id: 'how-we-share-personal-data',
    title: '9. Cómo compartimos los datos personales',
    paragraphs: [
      'Cinpc no divulga datos personales de manera indiscriminada. Los datos personales pueden compartirse cuando sea razonablemente necesario para los fines descritos en esta Política de Privacidad.',
      'Dependiendo de las circunstancias, los destinatarios pueden incluir:',
    ],
    list: [
      'Proveedores de servicios que prestan soporte de alojamiento web, infraestructura, comunicaciones, seguridad u otras operaciones empresariales.',
      'Asesores profesionales, como profesionales jurídicos, contables, de cumplimiento normativo o auditoría, cuando sea necesario.',
      'Clientes empresariales cuando el tratamiento se realice en relación con un servicio externalizado acordado.',
      'Autoridades públicas, organismos reguladores, tribunales o fuerzas y cuerpos de seguridad cuando la divulgación sea exigida o permitida por la ley.',
      'Partes involucradas en una fusión, adquisición, reestructuración, financiación, venta de activos u otra operación corporativa similar, sujetas a las garantías adecuadas cuando sean necesarias.',
    ],
    afterList: [
      'Los proveedores de servicios que reciban datos personales en nuestro nombre solo podrán tratar dicha información para fines autorizados y de conformidad con los requisitos contractuales y legales aplicables.',
    ],
  },
  {
    id: 'international-data-transfers',
    title: '10. Transferencias internacionales de datos',
    paragraphs: [
      'Cinpc, sus clientes o sus proveedores de servicios pueden operar en diferentes países. Como resultado, en determinadas circunstancias los datos personales pueden ser tratados o almacenados fuera del país en el que fueron recopilados originalmente.',
      'Cuando la legislación aplicable restrinja las transferencias internacionales de datos personales, Cinpc utilizará un mecanismo de transferencia adecuado u otras garantías exigidas por dicha legislación.',
      'Las garantías específicas utilizadas pueden depender de los países implicados, la naturaleza del tratamiento y el marco jurídico aplicable a la transferencia.',
    ],
  },
  {
    id: 'data-retention',
    title: '11. Conservación de datos',
    paragraphs: [
      'Cinpc conserva los datos personales únicamente durante el tiempo razonablemente necesario para los fines para los que fueron recopilados o durante el período exigido por las obligaciones legales, contractuales, normativas, contables o de resolución de disputas aplicables.',
      'Los períodos de conservación pueden variar en función de:',
    ],
    list: [
      'La naturaleza y la finalidad de la información.',
      'Si una consulta da lugar a una relación comercial.',
      'La duración de la relación con un cliente.',
      'Los requisitos contractuales aplicables.',
      'Las obligaciones legales o normativas de conservación de registros.',
      'La necesidad de establecer, ejercer o defender reclamaciones legales.',
      'Los requisitos de seguridad y prevención del fraude.',
    ],
    afterList: [
      'Cuando los datos personales dejen de ser necesarios, podrán eliminarse, anonimizarse o destruirse de forma segura de acuerdo con los requisitos aplicables.',
    ],
  },
  {
    id: 'data-security',
    title: '12. Seguridad de los datos',
    paragraphs: [
      'Cinpc utiliza medidas organizativas y técnicas razonables destinadas a proteger los datos personales frente al acceso, divulgación, alteración, pérdida, uso indebido o destrucción no autorizados.',
      'Las medidas aplicadas pueden variar en función de la naturaleza de la información, la actividad de tratamiento y los sistemas implicados. Cuando Cinpc trate información como parte de un encargo específico de un cliente, podrán establecerse requisitos de seguridad adicionales en la documentación contractual aplicable.',
      'Ningún método de transmisión o almacenamiento electrónico puede garantizarse como completamente seguro. Por ello, los usuarios deben adoptar precauciones razonables al enviar información por medios electrónicos y evitar proporcionar información que no sea necesaria para el fin correspondiente.',
    ],
  },
  {
    id: 'cookies-and-similar-technologies',
    title: '13. Cookies y tecnologías similares',
    paragraphs: [
      'El sitio web de Cinpc puede utilizar cookies y tecnologías similares necesarias para el funcionamiento del sitio web, la seguridad, las preferencias, el análisis u otros fines.',
      'Cuando lo exija la legislación aplicable, las cookies no esenciales solo se utilizarán después de haber obtenido el consentimiento requerido.',
      [
        'Puedes encontrar más información sobre las categorías de cookies utilizadas, sus finalidades, los controles disponibles y los períodos de conservación aplicables en la ',
        { href: '/cookie-policy', label: 'Política de Cookies' },
        ' de Cinpc.',
      ],
    ],
  },
  {
    id: 'your-privacy-rights',
    title: '14. Tus derechos de privacidad',
    paragraphs: [
      'Dependiendo de las leyes de protección de datos que se te apliquen, puedes tener determinados derechos relacionados con tus datos personales. Estos pueden incluir el derecho a:',
    ],
    list: [
      'Solicitar acceso a los datos personales que conservamos sobre ti.',
      'Solicitar la rectificación de datos personales inexactos o incompletos.',
      'Solicitar la eliminación de datos personales en determinadas circunstancias.',
      'Solicitar la limitación de determinadas actividades de tratamiento.',
      'Oponerte al tratamiento basado en determinadas bases jurídicas.',
      'Retirar tu consentimiento cuando el tratamiento se base en el consentimiento.',
      'Solicitar la portabilidad de determinados datos personales cuando corresponda.',
      'Presentar una reclamación ante la autoridad de protección de datos competente.',
    ],
    afterList: [
      'Estos derechos no son absolutos y pueden estar sujetos a condiciones legales, excepciones, requisitos de verificación y limitaciones.',
    ],
  },
  {
    id: 'exercising-your-rights',
    title: '15. Ejercicio de tus derechos',
    paragraphs: [
      [
        'Para presentar una solicitud relativa a los datos personales tratados directamente por Cinpc, utilice el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        ' disponible en nuestro sitio web.',
      ],
      'Es posible que necesitemos verificar tu identidad antes de completar una solicitud. También podemos solicitar información adicional cuando sea necesario para identificar los datos correspondientes o comprender el alcance de tu solicitud.',
      'Si Cinpc trata la información correspondiente exclusivamente en nombre de un cliente empresarial, podemos dirigir tu solicitud a dicho cliente o ayudarle a responder, dependiendo de nuestra función legal y nuestras obligaciones contractuales.',
    ],
  },
  {
    id: 'complaints',
    title: '16. Reclamaciones',
    paragraphs: [
      'Si tienes alguna inquietud sobre cómo Cinpc trata tus datos personales, puedes contactar con nosotros para que podamos revisar el asunto.',
      'Dependiendo de tu ubicación y de la legislación aplicable, también puedes tener derecho a presentar una reclamación ante la autoridad competente en materia de protección de datos o privacidad de tu jurisdicción.',
    ],
  },
  {
    id: 'third-party-websites',
    title: '17. Sitios web de terceros',
    paragraphs: [
      'El sitio web de Cinpc puede contener enlaces a sitios web o servicios operados por terceros. Cinpc no controla las prácticas de privacidad de dichos terceros.',
      'Si sigues un enlace externo, el tratamiento de datos personales en el sitio web de destino estará regulado por la política de privacidad u otros términos aplicables de ese tercero. Recomendamos revisar dichas políticas antes de proporcionar información personal.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: '18. Privacidad de los menores',
    paragraphs: [
      'El sitio web y los servicios de Cinpc están destinados a un uso empresarial y profesional y no están dirigidos a menores.',
      'Cinpc no busca deliberadamente recopilar datos personales de menores a través de sus canales generales de consultas empresariales. Si tenemos conocimiento de que se han enviado datos personales relacionados con un menor a través del sitio web sin una base jurídica adecuada, podremos adoptar medidas razonables para eliminar o tratar adecuadamente dicha información.',
    ],
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: '19. Cambios en esta Política de Privacidad',
    paragraphs: [
      'Cinpc puede actualizar esta Política de Privacidad para reflejar cambios en su sitio web, servicios, prácticas de tratamiento, tecnologías o requisitos legales aplicables.',
    ],
  },
  {
    id: 'contact-us',
    title: '20. Contacto',
    paragraphs: [
      [
        'Si tiene preguntas, solicitudes o inquietudes sobre esta Política de Privacidad o sobre cómo Cinpc trata los datos personales, utilice el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        '.',
      ],
    ],
  },
];

export function getPrivacyPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? privacyPolicyEs : privacyPolicy;
}
