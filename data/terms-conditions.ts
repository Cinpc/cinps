import { contactFormHref } from '@/data/contact';

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
      'Cinpc is a brand operated by Call Center Inp.',
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
      'Any dispute concerning these Terms or use of the Cinpc website will be handled in accordance with the laws and jurisdiction applicable to the dispute.',
      'Where a separate service agreement specifies the governing law or a dispute resolution procedure, those provisions apply to the relevant engagement.',
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
      [
        'If you have questions about these Terms and Conditions or Cinpc services, please use the ',
        { href: contactFormHref, label: 'contact form' },
        '.',
      ],
    ],
  },
];

export const termsConditionsEs: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'Estos Términos y Condiciones regulan el acceso y el uso del sitio web de Cinpc en cinpc.com, así como de los servicios empresariales disponibles a través de este.',
      'Cinpc es una marca operada por Call Center Inp.',
      'Al acceder al sitio web, enviar una consulta, solicitar un presupuesto o contratar los servicios de Cinpc, usted reconoce que ha leído y comprendido estos Términos y Condiciones y acepta quedar sujeto a las disposiciones aplicables al uso que haga del sitio web y de los servicios.',
    ],
  },
  {
    id: 'about-cinpc',
    title: '1. Acerca de Cinpc',
    paragraphs: [
      'Cinpc ofrece servicios de externalización de call center y externalización de procesos empresariales principalmente para empresas que operan en el sector financiero. Sus servicios pueden incluir atención al cliente, soporte al cliente relacionado con el cumplimiento normativo, soporte de cobros, comunicación con clientes relacionada con fraudes, soporte de solicitudes, gestión de reclamaciones, comunicación saliente, asistencia de ventas y otras operaciones de atención al cliente acordadas.',
      'Cinpc actúa como proveedor de servicios externalizados, prestando soporte a procesos empresariales definidos y a las comunicaciones con los clientes. Salvo que se acuerde expresamente lo contrario por escrito, Cinpc no proporciona directamente productos o servicios bancarios, de préstamo, seguros, inversión, pagos u otros productos o servicios financieros regulados a los clientes de sus clientes.',
    ],
  },
  {
    id: 'business-use',
    title: '2. Uso empresarial',
    paragraphs: [
      'Los servicios de Cinpc están destinados principalmente a empresas y organizaciones que buscan externalizar la comunicación con sus clientes y el soporte operativo.',
      'Si contactas con Cinpc o celebras un acuerdo en nombre de una empresa u otra organización, confirmas que tienes autoridad para actuar en su nombre y, cuando corresponda, para vincular a dicha organización al acuerdo correspondiente.',
    ],
  },
  {
    id: 'website-use',
    title: '3. Uso del sitio web',
    paragraphs: [
      'El sitio web de Cinpc proporciona información sobre los servicios disponibles, soluciones, procesos de trabajo y formas de contactar con el equipo de Cinpc. Puedes utilizar el sitio web para fines empresariales legítimos, incluidos consultar los servicios, enviar consultas y solicitar información o un presupuesto.',
    ],
    listIntro: 'No debes utilizar el sitio web:',
    list: [
      'Para ningún fin ilegal, fraudulento, engañoso o abusivo.',
      'Para interferir con el funcionamiento, la seguridad o la disponibilidad del sitio web.',
      'Para intentar obtener acceso no autorizado a sistemas, cuentas, redes o datos.',
      'Para introducir malware, código malicioso, ataques automatizados u otros materiales perjudiciales.',
      'Para recopilar o extraer contenido o datos del sitio web mediante medios automatizados no autorizados.',
      'Para suplantar a otra persona u organización o proporcionar deliberadamente información falsa.',
      'Para infringir derechos de propiedad intelectual, privacidad, confidencialidad u otros derechos pertenecientes a Cinpc o a terceros.',
    ],
    afterList: [
      'Cinpc puede restringir o bloquear el acceso al sitio web cuando sea razonablemente necesario para proteger sus sistemas, usuarios, operaciones empresariales o derechos legales.',
    ],
  },
  {
    id: 'requests-and-contact-forms',
    title: '4. Solicitudes y formularios de contacto',
    paragraphs: [
      'El sitio web permite a los clientes potenciales contactar con Cinpc y proporcionar información sobre sus necesidades de externalización. Esto puede incluir datos de contacto, información de la empresa, los servicios requeridos, el volumen estimado de llamadas e información adicional enviada mediante el formulario de contacto.',
      'Enviar un formulario, contactar con Cinpc o solicitar un presupuesto no crea automáticamente un acuerdo de prestación de servicios ni obliga a Cinpc a aceptar un encargo. Cinpc puede revisar la solicitud, pedir información adicional, analizar los requisitos y determinar si el trabajo solicitado se encuentra dentro de sus capacidades y del alcance de sus servicios.',
      'Eres responsable de garantizar que la información enviada a Cinpc sea exacta y que estés autorizado para proporcionarla.',
    ],
  },
  {
    id: 'quotes-and-service-proposals',
    title: '5. Presupuestos y propuestas de servicios',
    paragraphs: [
      'Cualquier presupuesto, propuesta, alcance, estimación u otra información comercial proporcionada por Cinpc puede estar sujeta a términos, supuestos, limitaciones y períodos de validez adicionales comunicados junto con dicho documento.',
      'Un presupuesto o una conversación preliminar no genera la obligación de prestar servicios salvo que las partes hayan completado el proceso de aceptación o contratación requerido.',
      'Los precios pueden depender de factores como el alcance de los servicios, el volumen de llamadas, la cobertura requerida, el personal, los flujos de trabajo, la complejidad operativa, las integraciones, los idiomas, los requisitos de formación y otras condiciones específicas del proyecto.',
    ],
  },
  {
    id: 'service-agreements',
    title: '6. Acuerdos de prestación de servicios',
    paragraphs: [
      'Los servicios exactos proporcionados a un cliente pueden estar regulados por un acuerdo de prestación de servicios independiente, una declaración de trabajo, un formulario de pedido, una propuesta u otro acuerdo escrito aceptado por las partes.',
    ],
    listIntro: 'Dicha documentación puede especificar aspectos como:',
    list: [
      'Los servicios y operaciones de atención al cliente incluidos en el encargo.',
      'Las responsabilidades asignadas entre Cinpc y el cliente.',
      'Los flujos de trabajo, procedimientos y puntos de escalamiento.',
      'El personal, los horarios de funcionamiento, la capacidad o los requisitos de volumen.',
      'Las tarifas, la facturación y las condiciones de pago.',
      'Los requisitos de rendimiento o niveles de servicio, cuando corresponda.',
      'Las obligaciones relativas a protección de datos, seguridad y confidencialidad.',
      'Las condiciones de duración, renovación, suspensión y terminación.',
    ],
    afterList: [
      'Si un acuerdo específico de prestación de servicios por escrito entra en conflicto con estos Términos y Condiciones en relación con la prestación de los servicios contratados, se aplicarán las disposiciones de dicho acuerdo específico en la medida en que exista tal conflicto.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: '7. Responsabilidades del cliente',
    paragraphs: [
      'La eficacia de las operaciones externalizadas de atención al cliente depende de instrucciones precisas y responsabilidades claramente definidas. Los clientes son responsables de proporcionar la información, los accesos, los procedimientos, los materiales, las aprobaciones y la cooperación razonablemente necesarios para que Cinpc pueda prestar los servicios acordados.',
      'Dependiendo del encargo, el cliente también puede ser responsable de garantizar que sus instrucciones, productos, procesos de atención al cliente, guiones, políticas y uso de los servicios de Cinpc cumplan con las leyes y los requisitos normativos aplicables a su actividad.',
      'Cinpc puede basarse en la información y las instrucciones proporcionadas por el cliente salvo que exista una razón razonable para considerar que son incorrectas, no autorizadas o ilegales.',
    ],
  },
  {
    id: 'financial-sector-support',
    title: '8. Soporte para el sector financiero',
    paragraphs: [
      'Cinpc presta soporte a las operaciones de atención al cliente de empresas que incluyen compañías FinTech, prestamistas, aseguradoras y otras empresas de servicios financieros. Las referencias en el sitio web al cumplimiento normativo, cobros, fraude, solicitudes, verificación, reclamaciones o funciones similares describen categorías de soporte operativo y de comunicación externalizado.',
      'Estas descripciones no constituyen asesoramiento financiero, legal, normativo, de inversión, seguros, crédito o cumplimiento normativo. La responsabilidad sobre las decisiones, políticas, aprobaciones y actividades reguladas corresponde al cliente pertinente, salvo que un acuerdo escrito independiente disponga expresamente lo contrario y que dicho acuerdo esté legalmente permitido.',
    ],
  },
  {
    id: 'compliance-and-lawful-instructions',
    title: '9. Cumplimiento e instrucciones legales',
    paragraphs: [
      'Se espera que tanto Cinpc como sus clientes utilicen los servicios de conformidad con la legislación aplicable y sus obligaciones contractuales.',
      'Cinpc no está obligada a ejecutar instrucciones que considere razonablemente ilegales, fraudulentas, engañosas, abusivas, incompatibles con un acuerdo aplicable o que puedan exponer a Cinpc o a otra parte a riesgos legales o de seguridad inaceptables.',
      'Cuando sea necesario, Cinpc puede solicitar aclaraciones, documentación o cambios en un flujo de trabajo propuesto antes de realizar la actividad correspondiente.',
    ],
  },
  {
    id: 'confidentiality',
    title: '10. Confidencialidad',
    paragraphs: [
      'Durante las conversaciones sobre los servicios o durante su prestación, Cinpc y sus clientes pueden intercambiar información empresarial, operativa, técnica, de clientes u otra información confidencial.',
      'Las obligaciones de confidencialidad relacionadas con un encargo específico pueden establecerse en un acuerdo de prestación de servicios, un acuerdo de confidencialidad, un acuerdo de tratamiento de datos u otro documento escrito entre las partes.',
      'Ninguna de las partes debe divulgar información confidencial recibida de la otra, salvo cuando la divulgación esté autorizada, sea necesaria para cumplir las obligaciones acordadas o sea exigida por la legislación aplicable.',
    ],
  },
  {
    id: 'personal-data',
    title: '11. Datos personales',
    paragraphs: [
      [
        'El uso del sitio web y la prestación de determinados servicios pueden implicar el tratamiento de datos personales. La información sobre los datos personales recopilados directamente a través del sitio web de Cinpc se proporciona en la ',
        { href: '/privacy-policy', label: 'Política de Privacidad' },
        ' de Cinpc.',
      ],
      'Cuando Cinpc trate datos personales en nombre de un cliente empresarial como parte de operaciones externalizadas de atención al cliente, las funciones respectivas, instrucciones, requisitos de seguridad y demás obligaciones de protección de datos podrán regirse por un acuerdo de tratamiento de datos independiente u otra documentación contractual aplicable.',
      'Los clientes son responsables de garantizar que disponen de una base jurídica adecuada y de los avisos, permisos o autorizaciones necesarios para los datos personales que indiquen a Cinpc que trate en su nombre.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '12. Propiedad intelectual',
    paragraphs: [
      'Salvo que se indique lo contrario, el sitio web y su contenido, incluidos textos, elementos de marca, logotipos, elementos de diseño, gráficos, estructuras y otros materiales, son propiedad de Cinpc o se utilizan bajo licencia y están protegidos por las leyes de propiedad intelectual aplicables.',
      'Puedes consultar y utilizar el contenido del sitio web para fines empresariales internos habituales relacionados con la evaluación o el uso de los servicios de Cinpc. No puedes reproducir, distribuir, modificar, volver a publicar, vender, conceder licencias ni explotar comercialmente partes sustanciales del sitio web sin autorización previa.',
      'Los derechos de propiedad intelectual creados o utilizados en relación con un encargo específico de un cliente se regirán por el acuerdo de prestación de servicios aplicable u otro acuerdo escrito entre las partes.',
    ],
  },
  {
    id: 'third-party-services-and-links',
    title: '13. Servicios y enlaces de terceros',
    paragraphs: [
      'El sitio web puede contener enlaces a sitios web, plataformas o servicios de terceros. Estos recursos externos funcionan de manera independiente y pueden tener sus propios términos, prácticas de privacidad y medidas de seguridad.',
      'Cinpc no controla los sitios web de terceros y no es responsable de su contenido, disponibilidad, políticas o prácticas. El acceso a cualquier recurso de terceros queda a tu discreción y está sujeto a los términos aplicables a dicho recurso.',
    ],
  },
  {
    id: 'website-availability-and-information',
    title: '14. Disponibilidad e información del sitio web',
    paragraphs: [
      'Cinpc procura mantener el sitio web y su información accesibles y útiles, pero no garantiza una disponibilidad ininterrumpida o libre de errores. El sitio web puede no estar disponible ocasionalmente debido a tareas de mantenimiento, problemas técnicos, actualizaciones, medidas de seguridad o circunstancias fuera de un control razonable.',
      'El contenido del sitio web se proporciona como información general sobre Cinpc y sus servicios. Las descripciones de los servicios pueden actualizarse a medida que evolucionen las operaciones, y la disponibilidad o el alcance exacto de un servicio pueden depender de los requisitos de cada encargo específico.',
    ],
  },
  {
    id: 'no-guarantee-of-engagement-or-results',
    title: '15. Ausencia de garantía de contratación o resultados',
    paragraphs: [
      'La información presentada en el sitio web no garantiza que Cinpc acepte un proyecto determinado ni que todos los servicios sean adecuados para todas las empresas.',
      'Los objetivos operativos específicos, niveles de servicio, tiempos de respuesta, estándares de rendimiento u otros compromisos medibles solo serán aplicables cuando hayan sido expresamente acordados en la documentación contractual correspondiente.',
      'Cinpc no garantiza resultados comerciales, financieros, de cobro, ventas, retención de clientes, cumplimiento normativo u otros resultados empresariales específicos por el mero hecho de utilizar sus servicios.',
    ],
  },
  {
    id: 'fees-and-payment',
    title: '16. Tarifas y pagos',
    paragraphs: [
      'Las tarifas de los servicios de Cinpc se determinan de acuerdo con el presupuesto, propuesta, acuerdo de prestación de servicios, declaración de trabajo, formulario de pedido u otro acuerdo comercial aplicable celebrado con el cliente.',
      'Los calendarios de pago, monedas, requisitos de facturación, impuestos, disposiciones relativas a pagos atrasados y cualquier otra condición financiera se especificarán en el acuerdo correspondiente cuando proceda.',
      'Salvo que se indique expresamente en un acuerdo aplicable, la información publicada en el sitio web no constituye una oferta de precio vinculante.',
    ],
  },
  {
    id: 'cancellation-and-refunds',
    title: '17. Cancelaciones y reembolsos',
    paragraphs: [
      [
        'Las cancelaciones, terminaciones, créditos, reembolsos y otros ajustes de pago relacionados con los servicios contratados se rigen por el acuerdo aplicable al encargo correspondiente y por la ',
        { href: '/refund-policy', label: 'Política de Reembolso' },
        ' de Cinpc cuando dicha política sea aplicable.',
      ],
      'Debido a que Cinpc presta servicios empresariales que pueden implicar contratación de personal, preparación, incorporación, formación, asignación de capacidad y trabajo operativo continuo, no puede asumirse que existe derecho a un reembolso simplemente porque un cliente decida dejar de utilizar un servicio.',
    ],
  },
  {
    id: 'suspension-and-termination',
    title: '18. Suspensión y terminación',
    paragraphs: [
      'Cinpc puede suspender o terminar el acceso a los servicios de conformidad con el acuerdo de prestación de servicios aplicable. Las circunstancias que permiten la suspensión o terminación pueden incluir un incumplimiento sustancial de las obligaciones contractuales, falta de pago, uso ilegal, problemas de seguridad, uso indebido de los servicios u otros motivos especificados en el acuerdo correspondiente.',
      'Los clientes pueden terminar los servicios de acuerdo con los plazos de preaviso, procedimientos y demás condiciones establecidos en la documentación contractual aplicable.',
      'La terminación no afecta a los derechos, obligaciones, tarifas o responsabilidades surgidos antes de la fecha efectiva de terminación ni a las disposiciones destinadas a continuar vigentes después de la terminación.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '19. Limitación de responsabilidad',
    paragraphs: [
      'En la máxima medida permitida por la legislación aplicable, Cinpc no será responsable de pérdidas indirectas, incidentales, especiales, punitivas o consecuentes derivadas del uso del sitio web o de los servicios, incluida la pérdida de beneficios, ingresos, oportunidades de negocio, fondo de comercio o ahorros previstos, excepto cuando dicha responsabilidad no pueda excluirse o limitarse legalmente.',
      'Cualquier limitación, exclusión, límite de responsabilidad, indemnización o distribución de riesgos adicional aplicable a los servicios contratados podrá establecerse en el acuerdo de prestación de servicios correspondiente.',
      'Nada de lo dispuesto en estos Términos excluye o limita la responsabilidad cuando hacerlo esté prohibido por la legislación aplicable.',
    ],
  },
  {
    id: 'indemnification',
    title: '20. Indemnización',
    paragraphs: [
      'En la medida permitida por la legislación aplicable y por cualquier acuerdo específico entre las partes, un cliente puede ser responsable de las pérdidas, reclamaciones, responsabilidades o costes razonables derivados de instrucciones ilegales, materiales no autorizados, infracción de derechos de terceros, uso indebido de los servicios o incumplimiento sustancial de sus obligaciones contractuales.',
      'Cualquier obligación de indemnización más específica aplicable a un encargo se regirá por el acuerdo de prestación de servicios correspondiente.',
    ],
  },
  {
    id: 'force-majeure',
    title: '21. Fuerza mayor',
    paragraphs: [
      'Cinpc no será responsable de retrasos o incumplimientos de una obligación cuando su cumplimiento se vea impedido por circunstancias fuera de su control razonable, sin perjuicio de cualquier disposición diferente contenida en el acuerdo de prestación de servicios aplicable.',
      'Estas circunstancias pueden incluir fallos importantes de telecomunicaciones o infraestructura, desastres naturales, acciones gubernamentales, interrupciones generalizadas, disturbios civiles, conflictos armados u otros acontecimientos que razonablemente no pudieran haberse evitado o controlado.',
    ],
  },
  {
    id: 'changes-to-these-terms',
    title: '22. Cambios en estos Términos',
    paragraphs: [
      'Cinpc puede actualizar estos Términos y Condiciones para reflejar cambios en el sitio web, los servicios, las prácticas operativas o los requisitos legales aplicables.',
    ],
  },
  {
    id: 'governing-law-and-jurisdiction',
    title: '23. Legislación aplicable y jurisdicción',
    paragraphs: [
      'Cualquier disputa relacionada con estos Términos o con el uso del sitio web de Cinpc se resolverá de conformidad con las leyes y la jurisdicción aplicables a dicha disputa.',
      'Cuando un contrato de servicios independiente establezca la ley aplicable o un procedimiento de resolución de disputas, esas disposiciones se aplicarán a la relación contractual correspondiente.',
    ],
  },
  {
    id: 'severability',
    title: '24. Divisibilidad',
    paragraphs: [
      'Si alguna disposición de estos Términos se considera inválida, ilegal o inaplicable, dicha disposición se interpretará o limitará en la medida necesaria conforme a la legislación aplicable. Las disposiciones restantes continuarán en vigor.',
    ],
  },
  {
    id: 'contact-us',
    title: '25. Contacto',
    paragraphs: [
      [
        'Si tiene preguntas sobre estos Términos y Condiciones o los servicios de Cinpc, utilice el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        '.',
      ],
    ],
  },
];

export function getTermsConditions(locale: string): PolicySection[] {
  return locale === 'es' ? termsConditionsEs : termsConditions;
}
