import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';

const images = [
  '/home/call-center-one.png',
  '/home/call-center-two.png',
  '/home/call-center-three.png',
];

export default function HomeCallCenter() {
  return (
    <section className="mb-18.75">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1.3248fr] items-start gap-y-2 gap-x-28 mb-10">
          <Title variant="gray">
            Call Center Operations Without the In-House Overhead
          </Title>
          <Description>
            We handle customer support, outbound communication, sales
            assistance, and recurring customer contact as an extension of your
            operations.
          </Description>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div key={src} className="aspect-[424/276] relative">
              <Image
                src={src}
                fill
                sizes="(min-width: 80rem) 424px, 33vw"
                alt="Image"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
