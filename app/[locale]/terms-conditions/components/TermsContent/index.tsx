'use client';

import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';
import type {
  PolicyLink,
  PolicyPart,
  PolicySection,
  PolicyStrong,
  PolicyText,
} from '@/data/terms-conditions';

function isPolicyLink(value: PolicyPart): value is PolicyLink {
  return typeof value === 'object' && 'href' in value;
}

function isPolicyStrong(value: PolicyPart): value is PolicyStrong {
  return typeof value === 'object' && 'strong' in value;
}

function PolicyParagraph({ value }: { value: PolicyText }) {
  if (typeof value === 'string') {
    return value;
  }

  return value.map((part, index) => {
    if (typeof part === 'string') {
      return part;
    }

    if (isPolicyStrong(part)) {
      return (
        <strong key={`${part.strong}-${index}`} className="inline">
          {part.strong}
        </strong>
      );
    }

    if (!isPolicyLink(part)) {
      return null;
    }

    if (part.href.startsWith('/')) {
      return (
        <Link
          key={`${part.href}-${index}`}
          href={part.href}
          className="inline underline text-purple"
        >
          {part.label}
        </Link>
      );
    }

    return (
      <a
        key={`${part.href}-${index}`}
        href={part.href}
        className="inline text-blue"
      >
        {part.label}
      </a>
    );
  });
}

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function TermsContent({
  sections,
}: {
  sections: PolicySection[];
}) {
  const headings = sections.filter(
    (section) => section.title && section.nav !== false
  );

  return (
    <section className="py-15 lg:py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.42106fr_1fr] items-start">
          <div className="space-y-8 max-lg:order-2">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-8">
                {section.title ? (
                  <Title
                    as="h3"
                    variant="purple"
                    className="text-xl leading-[1.5] mb-4 uppercase"
                  >
                    {section.title}
                  </Title>
                ) : null}

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <Description key={index} size="base">
                      <PolicyParagraph value={paragraph} />
                    </Description>
                  ))}

                  {section.listIntro ? (
                    <Description size="base">{section.listIntro}</Description>
                  ) : null}

                  {section.list ? (
                    <ul className="list-none pl-6">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="relative before:absolute before:content-[''] before:-left-4 before:top-2 before:w-1.25 before:h-1.25 before:rounded-full before:bg-black/50"
                        >
                          <Description size="base">
                            <PolicyParagraph value={item} />
                          </Description>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.afterList?.map((paragraph, index) => (
                    <Description key={`after-${index}`} size="base">
                      <PolicyParagraph value={paragraph} />
                    </Description>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-light-gray p-4 rounded-2xl max-lg:order-1 lg:sticky lg:top-8 max-lg:hidden">
            <ul className="space-y-2">
              {headings.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="text-purple text-xl leading-[1.5] hover:text-blue bg-white py-2 px-4 rounded-2xl w-full text-left cursor-pointer border-0 font-inherit"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
