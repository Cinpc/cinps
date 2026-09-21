import type { ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

const titleVariants = cva('font-semibold', {
  variants: {
    as: {
      h1: 'text-[32px] lg:text-[44px] leading-[1.406] lg:leading-[1.022] font-bold mb-4',
      h2: 'text-[28px] lg:text-[32px] leading-[1.25] lg:leading-[1.2] uppercase',
      h3: 'text-2xl leading-[1.2]',
    },
    variant: {
      black: 'text-black',
      purple: 'text-purple',
      gray: 'text-gray',
    },
  },
  defaultVariants: {
    as: 'h2',
    variant: 'black',
  },
});

type HeadingTag = 'h1' | 'h2' | 'h3';

type TitleProps = ComponentPropsWithoutRef<'h1'> &
  Omit<VariantProps<typeof titleVariants>, 'as'> & {
    as?: HeadingTag;
  };

export default function Title({
  as: Tag = 'h2',
  variant = 'black',
  className,
  ...props
}: TitleProps) {
  return (
    <Tag
      className={cn(titleVariants({ as: Tag, variant }), className)}
      {...props}
    />
  );
}
