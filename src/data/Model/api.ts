type ApiRequestType = {
  limit: number;
  offset: number;
  next?: string;
  type?: string;
};

type ApiResponseType = {
  count: number;
  next: string;
  previous: string;
  results: NameAPIResource[];
};

type getServerURLType = Pick<ApiRequestType, 'type'>;

type LocalRequestType = Pick<ApiRequestType, 'limit' | 'offset' | 'type'>;

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
  getServerURLType,
  LocalRequestType,
  LocalResponseType,
  NameAPIResource,
};
