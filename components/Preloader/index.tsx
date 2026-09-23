'use client';

import { useEffect } from 'react';

type PreloaderProps = {
  svg: string;
};

export default function Preloader({ svg }: PreloaderProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      data-preloader=""
      className="fixed inset-0 z-50 flex items-center justify-center bg-black p-8"
      role="status"
      aria-label="Loading"
    >
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}
