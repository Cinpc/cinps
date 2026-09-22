import Title from '@/components/Title';
import Description from '@/components/Description';

export default function ProcessBuilt() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.72486fr] gap-4 items-start">
          <Title
            variant="purple"
            className="leading-[142.857%] lg:leading-[140.625%]"
          >
            Built to Change with the Queue
          </Title>
          <Description size="17">
            Call volumes and customer needs don&apos;t always stay predictable.
            The setup can be reviewed and adjusted when your operation needs
            different capacity or coverage.
          </Description>
        </div>
      </div>
    </section>
  );
}
