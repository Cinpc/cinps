import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const refundPolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'This Refund Policy explains how refund requests, billing adjustments, cancellations, and payments for Cinpc services are handled. Cinpc is a brand operated by CALL CENTER INP.',
      "Cinpc provides business-to-business call center outsourcing and BPO services that are scoped around each client's operational requirements. Because services may involve preparation, staffing, onboarding, training, capacity allocation, and ongoing operational work, refund eligibility depends on the circumstances of the relevant engagement and any specific commercial terms agreed with the client.",
    ],
  },
  {
    id: 'scope-of-this-refund-policy',
    title: '1. Scope of This Refund Policy',
    paragraphs: [
      'This Refund Policy applies to payments made for Cinpc services unless different refund, cancellation, credit, or payment terms are established in a service agreement, statement of work, accepted proposal, order form, or other written agreement between Cinpc and the client.',
      'Where a separate written agreement contains specific provisions relating to refunds, cancellations, credits, fees, or termination, those provisions take precedence for the relevant engagement.',
      'Submitting an inquiry or requesting a quote through the Cinpc website does not itself create a payment obligation.',
    ],
  },
  {
    id: 'service-specific-payments',
    title: '2. Service-Specific Payments',
    paragraphs: [
      'Cinpc services are provided according to the scope agreed with each client. Fees may reflect factors such as staffing, service coverage, expected call volumes, operating requirements, onboarding, training, workflows, and other resources allocated to the engagement.',
      'For this reason, payments are not automatically refundable simply because a client later decides that it no longer requires the service or wishes to reduce or discontinue the agreed scope.',
      'Any refund or adjustment will be assessed against the services performed, resources already committed, applicable billing period, and terms agreed with the client.',
    ],
  },
  {
    id: 'when-a-refund-or-adjustment-may-be-considered',
    title: '3. When a Refund or Adjustment May Be Considered',
    paragraphs: [
      'A refund, partial refund, account credit, or billing adjustment may be considered where appropriate, including circumstances in which:',
    ],
    list: [
      'A client was charged incorrectly or more than once for the same amount.',
      'A payment was made in error and does not correspond to an amount properly due.',
      'An agreed service was not provided, and the relevant amount has not otherwise been earned or applied to other agreed work.',
      'Cinpc and the client mutually agree that a refund or credit is appropriate.',
      'A refund is required under the applicable service agreement or applicable law.',
    ],
    afterList: [
      'The appropriate resolution will depend on the circumstances. Cinpc may correct an invoice, issue a credit, apply an amount to a future invoice, or provide a refund where appropriate.',
    ],
  },
  {
    id: 'services-already-performed',
    title: '4. Services Already Performed',
    paragraphs: [
      'Amounts attributable to services already performed are generally not eligible for refund unless otherwise required by applicable law or agreed in writing.',
      'This may include work completed before a cancellation or termination request, such as customer support operations, outbound communication, follow-ups, account-related support, complaint handling, or other services performed within the agreed scope.',
      'Where only part of a prepaid service period or agreed scope has been performed, any treatment of the remaining amount will depend on the applicable agreement and the circumstances of the engagement.',
    ],
  },
  {
    id: 'setup-onboarding-and-allocated-resources',
    title: '5. Setup, Onboarding, and Allocated Resources',
    paragraphs: [
      'Some engagements may require work before live customer operations begin. This can include scoping, workflow preparation, onboarding, training, configuration, team preparation, or allocation of personnel and operational capacity.',
      'Where fees have been charged for work or resources already provided, completed, or committed, those amounts may not be refundable even if the client cancels before the full service period has been completed.',
      'Any specific non-refundable setup fees, minimum commitments, reserved capacity charges, or similar commercial conditions must be communicated and agreed as part of the applicable service arrangement.',
    ],
  },
  {
    id: 'prepaid-services',
    title: '6. Prepaid Services',
    paragraphs: [
      'Where a client pays in advance, the treatment of unused prepaid amounts will depend on the applicable service agreement and the circumstances in which the service ends.',
      'Unused prepaid amounts are not automatically forfeited and are not automatically refundable. Cinpc will determine the appropriate treatment in accordance with the agreed commercial terms, services already performed, resources committed to the engagement, outstanding amounts, and applicable law.',
      'Where a refund of an unused prepaid balance is expressly required by the applicable agreement, Cinpc will process it in accordance with those terms.',
    ],
  },
  {
    id: 'cancellation-by-the-client',
    title: '7. Cancellation by the Client',
    paragraphs: [
      'Clients may request to cancel or discontinue services subject to the notice periods, minimum commitments, billing periods, and termination conditions established for their engagement.',
      'A cancellation request does not automatically cancel fees that have already accrued or charges relating to work already performed or resources properly committed before the effective cancellation date.',
      'Where no specific cancellation terms have been agreed, Cinpc and the client will review the request based on the current service scope, work already completed, resources allocated, and any outstanding financial obligations.',
    ],
  },
  {
    id: 'changes-to-service-scope',
    title: '8. Changes to Service Scope',
    paragraphs: [
      'A client may request changes to the functions, capacity, workflows, or other elements included in its Cinpc service.',
      'A reduction in future service scope does not automatically create a right to a refund for services already provided or costs already incurred. Any effect on future fees will be determined as part of the agreed scope adjustment.',
      'Where a change results in an overpayment or unused amount that should be credited or refunded under the applicable commercial arrangement, Cinpc will make the appropriate adjustment.',
    ],
  },
  {
    id: 'billing-errors-and-duplicate-payments',
    title: '9. Billing Errors and Duplicate Payments',
    paragraphs: [
      'If you believe an invoice contains an error or that a payment has been processed incorrectly or more than once, contact Cinpc as soon as reasonably possible.',
      'Cinpc will review the relevant invoice, payment records, and applicable service terms. If an incorrect or duplicate charge is confirmed, the amount may be corrected, credited, or refunded as appropriate.',
      'Clients should provide sufficient information to identify the relevant invoice or payment and explain the issue being disputed.',
    ],
  },
  {
    id: 'service-concerns',
    title: '10. Service Concerns',
    paragraphs: [
      'If a client believes that an agreed service has not been delivered in accordance with the applicable service arrangement, the client should contact Cinpc with details of the issue.',
      'Cinpc may review relevant service records, the agreed scope, responsibilities, workflows, and other circumstances before determining an appropriate resolution.',
      'Depending on the circumstances and applicable agreement, a resolution may involve correcting the service issue, repeating or completing affected work where appropriate, issuing a service credit, adjusting an invoice, or providing a full or partial refund.',
      'A service concern does not automatically entitle the client to a full refund.',
    ],
  },
  {
    id: 'refund-requests',
    title: '11. Refund Requests',
    paragraphs: [
      'Refund requests should include enough information for Cinpc to identify and assess the relevant payment. This may include:',
    ],
    list: [
      "The client's company name.",
      'The name and contact details of the person submitting the request.',
      'The relevant invoice or payment information.',
      'The amount being disputed or requested for refund.',
      'The reason for the request.',
      'Any information or documentation relevant to the issue.',
    ],
    afterList: [
      'Cinpc may request additional information where reasonably necessary to review the request.',
    ],
  },
  {
    id: 'review-of-refund-requests',
    title: '12. Review of Refund Requests',
    paragraphs: [
      'Each eligible refund request is reviewed based on the facts of the relevant engagement.',
      'The review may take into account the applicable service agreement, services already performed, billing records, prepaid amounts, resources committed, cancellation terms, previous adjustments, and any other information relevant to the payment.',
      'Submitting a refund request does not guarantee that a refund will be issued.',
    ],
  },
  {
    id: 'approved-refunds',
    title: '13. Approved Refunds',
    paragraphs: [
      'Where Cinpc approves a monetary refund, the refund will generally be returned using the original payment method where reasonably possible. If this is not possible, another appropriate method may be agreed with the client.',
      'The time required for funds to appear after a refund has been issued may depend on the payment method, financial institution, or payment provider involved.',
      'Any transaction fees, currency conversion differences, or similar third-party charges will be handled according to the applicable agreement and payment arrangements, subject to applicable law.',
    ],
  },
  {
    id: 'credits-and-billing-adjustments',
    title: '14. Credits and Billing Adjustments',
    paragraphs: [
      'In some circumstances, an account credit or invoice adjustment may be more appropriate than returning funds.',
      'Where a credit is agreed, the parties may apply it against current or future Cinpc services in accordance with the applicable commercial arrangement.',
      'A credit will not be treated as a cash refund unless Cinpc and the client expressly agree otherwise or applicable law requires otherwise.',
    ],
  },
  {
    id: 'chargebacks-and-payment-disputes',
    title: '15. Chargebacks and Payment Disputes',
    paragraphs: [
      'Clients are encouraged to contact Cinpc directly regarding suspected billing errors or disputed charges so that the issue can be reviewed against the relevant service and payment records.',
      'Initiating a chargeback or payment dispute does not remove any payment obligation that is valid under the applicable service agreement. Cinpc may provide relevant contractual, invoicing, and service records to a payment provider or financial institution when responding to a payment dispute.',
      'Nothing in this section limits any rights that cannot lawfully be restricted.',
    ],
  },
  {
    id: 'termination-by-cinpc',
    title: '16. Termination by Cinpc',
    paragraphs: [
      'Where Cinpc terminates or suspends services, the treatment of amounts already paid will depend on the reason for termination, services already performed, resources committed, outstanding obligations, and the terms of the applicable service agreement.',
      'If Cinpc ends an engagement without providing services for which payment has already been received and no contractual basis exists for retaining the relevant unused amount, an appropriate refund or credit may be provided.',
      "Where termination results from the client's breach, non-payment, unlawful instructions, misuse of services, or another contractual ground, any refund entitlement will be determined under the applicable agreement and applicable law.",
    ],
  },
  {
    id: 'no-standard-consumer-return-period',
    title: '17. No Standard Consumer Return Period',
    paragraphs: [
      'Cinpc provides customized business-to-business services rather than physical consumer goods. As a result, standard product-return procedures are not applicable to Cinpc services.',
      'Any cancellation or refund rights that apply to a particular engagement arise from the relevant agreement and any mandatory rights provided by applicable law.',
    ],
  },
  {
    id: 'changes-to-this-refund-policy',
    title: '18. Changes to This Refund Policy',
    paragraphs: [
      'Cinpc may update this Refund Policy to reflect changes to its services, billing practices, contractual arrangements, or applicable legal requirements.',
    ],
  },
  {
    id: 'contact-us',
    title: '19. Contact Us',
    paragraphs: [
      [
        'If you have questions about payments, billing adjustments, cancellations, or refunds, please use the ',
        { href: contactFormHref, label: 'contact form' },
        '.',
      ],
    ],
  },
];

export const refundPolicyEs: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      'Esta Política de Reembolsos explica cómo se gestionan las solicitudes de reembolso, los ajustes de facturación, las cancelaciones y los pagos por los servicios de Cinpc. Cinpc es una marca operada por CALL CENTER INP.',
      'Cinpc presta servicios B2B de externalización de call center y BPO cuyo alcance se adapta a las necesidades operativas de cada cliente. Debido a que los servicios pueden implicar preparación, asignación de personal, incorporación, formación, asignación de capacidad y trabajo operativo continuo, la posibilidad de obtener un reembolso depende de las circunstancias del encargo correspondiente y de las condiciones comerciales específicas acordadas con el cliente.',
    ],
  },
  {
    id: 'scope-of-this-refund-policy',
    title: '1. Alcance de esta Política de Reembolso',
    paragraphs: [
      'Esta Política de Reembolso se aplica a los pagos realizados por los servicios de Cinpc, salvo que se establezcan condiciones diferentes de reembolso, cancelación, crédito o pago en un acuerdo de prestación de servicios, una declaración de trabajo, una propuesta aceptada, un formulario de pedido u otro acuerdo escrito entre Cinpc y el cliente.',
      'Cuando un acuerdo escrito independiente contenga disposiciones específicas relativas a reembolsos, cancelaciones, créditos, tarifas o terminación, dichas disposiciones prevalecerán para el encargo correspondiente.',
      'El envío de una consulta o la solicitud de un presupuesto a través del sitio web de Cinpc no genera por sí mismo ninguna obligación de pago.',
    ],
  },
  {
    id: 'service-specific-payments',
    title: '2. Pagos específicos de los servicios',
    paragraphs: [
      'Los servicios de Cinpc se prestan de acuerdo con el alcance acordado con cada cliente. Las tarifas pueden reflejar factores como el personal, la cobertura del servicio, el volumen previsto de llamadas, los requisitos operativos, la incorporación, la formación, los flujos de trabajo y otros recursos asignados al encargo.',
      'Por este motivo, los pagos no son automáticamente reembolsables simplemente porque un cliente decida posteriormente que ya no necesita el servicio o desee reducir o interrumpir el alcance acordado.',
      'Cualquier reembolso o ajuste se evaluará teniendo en cuenta los servicios ya prestados, los recursos ya comprometidos, el período de facturación aplicable y las condiciones acordadas con el cliente.',
    ],
  },
  {
    id: 'when-a-refund-or-adjustment-may-be-considered',
    title: '3. Cuándo puede considerarse un reembolso o ajuste',
    paragraphs: [
      'Podrá considerarse un reembolso, un reembolso parcial, un crédito en la cuenta o un ajuste de facturación cuando corresponda, incluidas aquellas circunstancias en las que:',
    ],
    list: [
      'Se haya cobrado al cliente un importe incorrecto o más de una vez por el mismo concepto.',
      'Se haya realizado un pago por error que no corresponda a un importe debidamente adeudado.',
      'No se haya prestado un servicio acordado y el importe correspondiente no se haya devengado ni aplicado a otros trabajos acordados.',
      'Cinpc y el cliente acuerden mutuamente que procede un reembolso o crédito.',
      'El acuerdo de prestación de servicios aplicable o la legislación aplicable exijan un reembolso.',
    ],
    afterList: [
      'La solución adecuada dependerá de las circunstancias. Cinpc podrá corregir una factura, emitir un crédito, aplicar un importe a una factura futura o realizar un reembolso cuando corresponda.',
    ],
  },
  {
    id: 'services-already-performed',
    title: '4. Servicios ya prestados',
    paragraphs: [
      'Los importes correspondientes a servicios ya prestados generalmente no son reembolsables, salvo que la legislación aplicable exija lo contrario o se haya acordado otra cosa por escrito.',
      'Esto puede incluir trabajos realizados antes de una solicitud de cancelación o terminación, como operaciones de atención al cliente, comunicación saliente, seguimientos, soporte relacionado con cuentas, gestión de reclamaciones u otros servicios prestados dentro del alcance acordado.',
      'Cuando solo se haya prestado una parte de un período de servicio prepagado o del alcance acordado, el tratamiento de cualquier importe restante dependerá del acuerdo aplicable y de las circunstancias del encargo.',
    ],
  },
  {
    id: 'setup-onboarding-and-allocated-resources',
    title: '5. Configuración, incorporación y recursos asignados',
    paragraphs: [
      'Algunos encargos pueden requerir trabajo antes de que comiencen las operaciones de atención al cliente. Esto puede incluir la definición del alcance, la preparación de flujos de trabajo, la incorporación, la formación, la configuración, la preparación del equipo o la asignación de personal y capacidad operativa.',
      'Cuando se hayan cobrado tarifas por trabajos o recursos ya proporcionados, completados o comprometidos, dichos importes pueden no ser reembolsables incluso si el cliente cancela antes de que finalice el período completo del servicio.',
      'Cualquier tarifa de configuración no reembolsable, compromiso mínimo, cargo por capacidad reservada u otra condición comercial similar deberá comunicarse y acordarse como parte del acuerdo de prestación de servicios aplicable.',
    ],
  },
  {
    id: 'prepaid-services',
    title: '6. Servicios prepagados',
    paragraphs: [
      'Cuando un cliente pague por adelantado, el tratamiento de los importes prepagados no utilizados dependerá del acuerdo de prestación de servicios aplicable y de las circunstancias en las que finalice el servicio.',
      'Los importes prepagados no utilizados no se pierden automáticamente ni son automáticamente reembolsables. Cinpc determinará el tratamiento adecuado de acuerdo con las condiciones comerciales acordadas, los servicios ya prestados, los recursos comprometidos para el encargo, los importes pendientes y la legislación aplicable.',
      'Cuando el acuerdo aplicable exija expresamente el reembolso de un saldo prepagado no utilizado, Cinpc lo procesará de acuerdo con dichas condiciones.',
    ],
  },
  {
    id: 'cancellation-by-the-client',
    title: '7. Cancelación por parte del cliente',
    paragraphs: [
      'Los clientes pueden solicitar la cancelación o interrupción de los servicios de acuerdo con los plazos de preaviso, compromisos mínimos, períodos de facturación y condiciones de terminación establecidos para su encargo.',
      'Una solicitud de cancelación no anula automáticamente las tarifas ya devengadas ni los cargos relacionados con trabajos ya realizados o recursos debidamente comprometidos antes de la fecha efectiva de cancelación.',
      'Cuando no se hayan acordado condiciones específicas de cancelación, Cinpc y el cliente revisarán la solicitud teniendo en cuenta el alcance actual del servicio, el trabajo ya realizado, los recursos asignados y cualquier obligación financiera pendiente.',
    ],
  },
  {
    id: 'changes-to-service-scope',
    title: '8. Cambios en el alcance del servicio',
    paragraphs: [
      'Un cliente puede solicitar cambios en las funciones, la capacidad, los flujos de trabajo u otros elementos incluidos en su servicio de Cinpc.',
      'Una reducción del alcance futuro del servicio no genera automáticamente el derecho a un reembolso por servicios ya prestados o costes ya incurridos. Cualquier efecto sobre las tarifas futuras se determinará como parte del ajuste del alcance acordado.',
      'Cuando un cambio dé lugar a un pago en exceso o a un importe no utilizado que deba acreditarse o reembolsarse de acuerdo con las condiciones comerciales aplicables, Cinpc realizará el ajuste correspondiente.',
    ],
  },
  {
    id: 'billing-errors-and-duplicate-payments',
    title: '9. Errores de facturación y pagos duplicados',
    paragraphs: [
      'Si consideras que una factura contiene un error o que un pago se ha procesado incorrectamente o más de una vez, contacta con Cinpc tan pronto como sea razonablemente posible.',
      'Cinpc revisará la factura correspondiente, los registros de pago y las condiciones del servicio aplicables. Si se confirma un cargo incorrecto o duplicado, el importe podrá corregirse, acreditarse o reembolsarse según corresponda.',
      'Los clientes deberán proporcionar información suficiente para identificar la factura o el pago correspondiente y explicar el problema objeto de la reclamación.',
    ],
  },
  {
    id: 'service-concerns',
    title: '10. Problemas relacionados con el servicio',
    paragraphs: [
      'Si un cliente considera que un servicio acordado no se ha prestado de conformidad con el acuerdo de prestación de servicios aplicable, deberá contactar con Cinpc y proporcionar información sobre el problema.',
      'Cinpc podrá revisar los registros correspondientes del servicio, el alcance acordado, las responsabilidades, los flujos de trabajo y otras circunstancias antes de determinar una solución adecuada.',
      'Dependiendo de las circunstancias y del acuerdo aplicable, la solución puede consistir en corregir el problema del servicio, repetir o completar el trabajo afectado cuando corresponda, emitir un crédito de servicio, ajustar una factura o proporcionar un reembolso total o parcial.',
      'Un problema relacionado con el servicio no otorga automáticamente al cliente el derecho a un reembolso total.',
    ],
  },
  {
    id: 'refund-requests',
    title: '11. Solicitudes de reembolso',
    paragraphs: [
      'Las solicitudes de reembolso deben incluir información suficiente para que Cinpc pueda identificar y evaluar el pago correspondiente. Esto puede incluir:',
    ],
    list: [
      'El nombre de la empresa del cliente.',
      'El nombre y los datos de contacto de la persona que presenta la solicitud.',
      'La información de la factura o del pago correspondiente.',
      'El importe objeto de reclamación o para el que se solicita un reembolso.',
      'El motivo de la solicitud.',
      'Cualquier información o documentación relevante para el caso.',
    ],
    afterList: [
      'Cinpc podrá solicitar información adicional cuando sea razonablemente necesaria para revisar la solicitud.',
    ],
  },
  {
    id: 'review-of-refund-requests',
    title: '12. Revisión de las solicitudes de reembolso',
    paragraphs: [
      'Cada solicitud de reembolso que cumpla los requisitos se revisará teniendo en cuenta las circunstancias del encargo correspondiente.',
      'La revisión puede tener en cuenta el acuerdo de prestación de servicios aplicable, los servicios ya prestados, los registros de facturación, los importes prepagados, los recursos comprometidos, las condiciones de cancelación, los ajustes anteriores y cualquier otra información relevante para el pago.',
      'La presentación de una solicitud de reembolso no garantiza que se conceda un reembolso.',
    ],
  },
  {
    id: 'approved-refunds',
    title: '13. Reembolsos aprobados',
    paragraphs: [
      'Cuando Cinpc apruebe un reembolso monetario, este se realizará generalmente mediante el método de pago original siempre que sea razonablemente posible. Si esto no fuera posible, podrá acordarse con el cliente otro método adecuado.',
      'El tiempo necesario para que los fondos aparezcan después de haberse emitido un reembolso puede depender del método de pago, la entidad financiera o el proveedor de pagos correspondiente.',
      'Las comisiones por transacción, diferencias derivadas de la conversión de divisas u otros cargos similares de terceros se gestionarán de acuerdo con el acuerdo y las condiciones de pago aplicables, con sujeción a la legislación correspondiente.',
    ],
  },
  {
    id: 'credits-and-billing-adjustments',
    title: '14. Créditos y ajustes de facturación',
    paragraphs: [
      'En determinadas circunstancias, un crédito en la cuenta o un ajuste de factura puede ser más adecuado que la devolución de fondos.',
      'Cuando se acuerde un crédito, las partes podrán aplicarlo a servicios actuales o futuros de Cinpc de acuerdo con las condiciones comerciales aplicables.',
      'Un crédito no se considerará un reembolso en efectivo salvo que Cinpc y el cliente acuerden expresamente lo contrario o la legislación aplicable así lo exija.',
    ],
  },
  {
    id: 'chargebacks-and-payment-disputes',
    title: '15. Contracargos y disputas de pago',
    paragraphs: [
      'Se recomienda a los clientes contactar directamente con Cinpc en caso de sospecha de errores de facturación o cargos objeto de disputa, de modo que el problema pueda revisarse en función de los registros correspondientes de servicios y pagos.',
      'El inicio de un contracargo o una disputa de pago no elimina ninguna obligación de pago que sea válida en virtud del acuerdo de prestación de servicios aplicable. Cinpc podrá proporcionar los registros contractuales, de facturación y de prestación de servicios pertinentes a un proveedor de pagos o entidad financiera al responder a una disputa de pago.',
      'Nada de lo dispuesto en esta sección limita ningún derecho que legalmente no pueda restringirse.',
    ],
  },
  {
    id: 'termination-by-cinpc',
    title: '16. Terminación por parte de Cinpc',
    paragraphs: [
      'Cuando Cinpc termine o suspenda los servicios, el tratamiento de los importes ya pagados dependerá del motivo de la terminación, los servicios ya prestados, los recursos comprometidos, las obligaciones pendientes y las condiciones del acuerdo de prestación de servicios aplicable.',
      'Si Cinpc pone fin a un encargo sin prestar servicios por los que ya se haya recibido el pago y no existe ninguna base contractual para conservar el importe correspondiente no utilizado, podrá concederse un reembolso o crédito adecuado.',
      'Cuando la terminación se deba a un incumplimiento por parte del cliente, falta de pago, instrucciones ilegales, uso indebido de los servicios u otro motivo contractual, cualquier derecho a reembolso se determinará de conformidad con el acuerdo aplicable y la legislación correspondiente.',
    ],
  },
  {
    id: 'no-standard-consumer-return-period',
    title: '17. Ausencia de un período estándar de devolución para consumidores',
    paragraphs: [
      'Cinpc presta servicios personalizados entre empresas (B2B), en lugar de vender bienes físicos de consumo. Por este motivo, los procedimientos estándar de devolución de productos no son aplicables a los servicios de Cinpc.',
      'Cualquier derecho de cancelación o reembolso aplicable a un encargo concreto derivará del acuerdo correspondiente y de cualquier derecho obligatorio establecido por la legislación aplicable.',
    ],
  },
  {
    id: 'changes-to-this-refund-policy',
    title: '18. Cambios en esta Política de Reembolso',
    paragraphs: [
      'Cinpc puede actualizar esta Política de Reembolso para reflejar cambios en sus servicios, prácticas de facturación, acuerdos contractuales o requisitos legales aplicables.',
    ],
  },
  {
    id: 'contact-us',
    title: '19. Contacto',
    paragraphs: [
      [
        'Si tiene preguntas sobre pagos, ajustes de facturación, cancelaciones o reembolsos, utilice el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        '.',
      ],
    ],
  },
];

export function getRefundPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? refundPolicyEs : refundPolicy;
}
