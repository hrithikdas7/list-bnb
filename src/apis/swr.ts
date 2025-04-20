import useSWRImmutable from "swr/immutable";
import { useNavigate } from "react-router";
import { KeyedMutator, SWRConfiguration } from "swr";
import { AxiosResponse } from "axios";
import { getAxiosInstance } from "./getAxiosInstance";

// Type-safe fetcher for GET requests
export const fetcher = async <T = unknown>(
  url: string
): Promise<AxiosResponse<T>> => {
  const api = await getAxiosInstance();
  return api.get<T>(url);
};

// Type-safe fetcher for POST requests
export const fetcherPost = async <T = unknown, P = unknown>([url, payload]: [
  string,
  P
]): Promise<AxiosResponse<T>> => {
  const api = await getAxiosInstance();
  return api.post<T>(url, payload);
};

// Hook for static (GET) data
export const useSwrStatic = <T = unknown>(
  path: string | null,
  options: SWRConfiguration<AxiosResponse<T>> = {}
): {
  data: AxiosResponse<T> | undefined;
  isLoading: boolean;
  isValidating: boolean;
  isError: Error | undefined;
  mutate: KeyedMutator<AxiosResponse<T>>;
} => {
  const navigate = useNavigate();

  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable<
    AxiosResponse<T>,
    Error
  >(path, fetcher, {
    onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
      // @ts-expect-error - SWR doesn't have perfect types for error handling
      if (error?.response?.status === 404) return;

      // @ts-expect-error - SWR doesn't have perfect types for error handling
      if (error?.response?.status === 401) {
        navigate("/login?isLogin=true");
      }

      if (retryCount < 1) {
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 3000);
      }
    },
    loadingTimeout: 10000,
    keepPreviousData: true,
    refreshInterval: 1000 * 60 * 60,
    ...options,
  });

  return {
    data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};