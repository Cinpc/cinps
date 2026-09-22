import HomeHero from '@/app/(home)/HomeHero';
import ProcessGetStarted from '@/app/process/components/ProcessGetStarted';
import ProcessClearLines from '@/app/process/components/ProcessClearLines';
import ProcessYourWorkflow from '@/app/process/components/ProcessYourWorkflow';
import ProcessBuilt from '@/app/process/components/ProcessBuilt';
import ProcessReady from '@/app/process/components/ProcessReady';
export default function ProcessPage() {
  return (
    <>
      <HomeHero
        title="From Your Queue to Ours"
        description="A clear setup keeps outsourcing simple. We define the work, prepare the workflow, launch the service, and adjust it as your operation changes."
        imageSrc="/process/hero.png"
        imageSrcMobile="/process/hero-mobile.png"
        buttonText="Start a Conversation"
        buttonHref="/contact"
        contentClassName="max-md:min-h-112.5"
        cardClassName="max-w-181"
      />
      <ProcessGetStarted />
      <ProcessClearLines />
      <ProcessYourWorkflow />
      <ProcessBuilt />
      <ProcessReady />
    </>
  );
}
