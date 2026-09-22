import type { ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

const descriptionVariants = cva('leading-[1.5]', {
  variants: {
    size: {
      default: 'text-sm leading-[21px]',
      xs: 'text-xs',
      sm: 'text-sm',
      '13': 'text-[13px]',
      '15': 'text-[15px]',
      '17': 'text-[17px] leading-[26px]',
    },
    variant: {
      default: 'text-black-50',
      black: 'text-black',
      gray: 'text-gray',
      'mid-gray': 'text-mid-gray',
      purple: 'text-purple',
      blue: 'text-blue',
      dark: 'text-dark',
      muted: 'text-muted',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

type DescriptionProps = ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof descriptionVariants>;

export default function Description({
  className,
  size = 'default',
  variant = 'default',
  ...props
}: DescriptionProps) {
  return (
    <p
      className={cn(descriptionVariants({ size, variant }), className)}
      {...props}
    />
  );
}
