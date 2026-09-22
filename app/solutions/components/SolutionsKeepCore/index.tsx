import Title from '@/components/Title';
import Description from '@/components/Description';

export default function SolutionsKeepCore() {
  return (
    <section className="lg:pt-16 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-[0.81616fr_1fr] gap-4 items-end">
          <Title
            variant="purple"
            className="leading-[142.857%] lg:leading-[140.625%]"
          >
            Keep the Core. <br /> Extend the Capacity.
          </Title>
          <Description size="17">
            Your internal team can stay responsible for the decisions and
            functions that need to remain in-house while Cinpc covers the
            recurring communication around them.
          </Description>
        </div>
      </div>
    </section>
  );
}
