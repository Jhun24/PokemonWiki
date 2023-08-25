import { ReactNode, MouseEventHandler } from 'react';
type ListBoxType = {
  children: ReactNode;
}

type NameAPIResource = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: NameAPIResource;
};

type ListContentType = {
  id: number;
  image: string;
  name: string;
  type?: PokemonType[];
  category?: NameAPIResource;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export type {
  ListBoxType,
  ListContentType,
}