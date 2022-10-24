import { FetchParams, HttpResponse, ResBody } from './model';

export const typedFetch = async <T>(
  params: FetchParams,
): Promise<ResBody<T>> => {
  const { method, reqPath, apiServerSelf = false, querys = {} } = params;
  let reqUrl = '';
  let body: string | null = null;

  if (method === 'GET') {
    reqUrl = `${reqPath}${createQueryString(querys)}`;
  } else {
    body = JSON.stringify(querys);
    reqUrl = `${reqPath}`;
  }

  const res: HttpResponse<T> = await fetch(reqUrl, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
    method,
    body,
  });

  const data = await res.json();

  return data;
};

export const createQueryString = <P extends Record<string, unknown>>(
  querys: P,
): string => {
  const queryKeys = Object.entries(querys);

  if (queryKeys.length === 0) return '';

  const queryString = queryKeys
    .reduce<string[]>((acc, [key, value]) => {
      if (value) {
        acc.push(`${key}=${value}`);
      }
      return acc;
    }, [])
    .join('&');

  if (queryString === '') return '';

  return `?${queryString}`;
};
