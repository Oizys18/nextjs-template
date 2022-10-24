export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTION';

export type FetchParams = {
  method: Method;
  reqPath: string;
  apiServerSelf?: boolean;
  querys?: Record<string, any>;
};

type ObjectData<T> = { data: T };
type ResDefaultBody = {
  code: number;
  title: string;
  success: boolean;
  errKey: string;
  msg: string;
};
type ResExtendsBody<T> = T extends unknown[] ? ArrayData<T> : ObjectData<T>;

export type ResBody<T = null> = T extends null
  ? ResDefaultBody
  : ResDefaultBody & ResExtendsBody<T>;

export interface HttpResponse<T> extends Response {
  parsedBody?: ResBody<T>;
  json(): Promise<ResBody<T>>;
}

type ArrayData<T> = {
  list: T;
  size?: number;
  nowPage?: number;
  totalPages?: number;
  totalElements?: number;
  last?: boolean;
  first?: boolean;
};
