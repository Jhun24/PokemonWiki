type ApiRequestType = {
  limit: number;
  offset: number;
  next?: string;
};

type ApiResponseType = {
  count: number;
  next: string;
  previous: string;
  results: NameAPIResource[];
};

type LocalRequestType = Pick<ApiRequestType, 'limit' | 'offset'>;

type LocalResponseType = {
  results: boolean | NameAPIResource[];
};

type NameAPIResource = {
  name: string;
  url: string;
};

export type {
  ApiRequestType,
  ApiResponseType,
  LocalRequestType,
  LocalResponseType,
  NameAPIResource,
};
