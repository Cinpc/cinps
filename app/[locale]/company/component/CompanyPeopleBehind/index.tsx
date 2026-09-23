import Title from '@/components/Title';
import Description from '@/components/Description';

export default function CompanyPeopleBehind() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.72486fr] gap-4 items-start">
          <Title variant="purple">People Behind the Queue</Title>
          <Description size="17">
            Customer operations still come down to conversations: understanding
            the request, following the right process, and knowing what needs to
            happen next. Cinpc puts a dedicated external team behind that work.
          </Description>
        </div>
      </div>
    </section>
  );
}
