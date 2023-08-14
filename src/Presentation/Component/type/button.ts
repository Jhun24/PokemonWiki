import { MouseEventHandler } from 'react';

type ButtonProps = {
  text: string;
  onSubmit: MouseEventHandler<HTMLDivElement>;
};

export type { ButtonProps };
