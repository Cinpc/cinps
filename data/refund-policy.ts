import { contact } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const refundPolicy: PolicySection[] = [
  {
    id: 'intro',
    paragraphs: [
      `This Refund Policy explains how refund requests, billing adjustments, cancellations, and payments for Cinpc services are handled. Cinpc is a brand operated by CALL CENTER INP, registered at ${contact.address} under registration number [insert registration number].`,
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
      'Questions about payments, billing adjustments, cancellations, or refund requests can be directed to Cinpc through:',
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
