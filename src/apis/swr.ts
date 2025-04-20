import useSWRImmutable from "swr/immutable";
import { useNavigate } from "react-router";
import { mutate as globalMutate, KeyedMutator, SWRConfiguration } from "swr";
import { AxiosResponse } from "axios";
import { getAxiosInstance } from "./getAxiosInstance";

// Type-safe fetcher for GET requests
export const fetcher = async <T = any>(
  url: string
): Promise<AxiosResponse<T>> => {
  const api = await getAxiosInstance();
  return api.get<T>(url);
};

// Type-safe fetcher for POST requests
export const fetcherPost = async <T = any, P = any>([url, payload]: [
  string,
  P
]): Promise<AxiosResponse<T>> => {
  const api = await getAxiosInstance();
  return api.post<T>(url, payload);
};

// Hook for static (GET) data
export const useSwrStatic = <T = any>(
  path: string | null,
  options: SWRConfiguration = {}
): {
  data: AxiosResponse<T> | undefined;
  isLoading: boolean;
  isValidating: boolean;
  isError: any;
  mutate: KeyedMutator<AxiosResponse<T>>;
} => {
  const navigate = useNavigate();

  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable<
    AxiosResponse<T>
  >(path, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error?.response?.status === 404) return;

      if (error?.response?.status === 401) {
        navigate("/login?isLogin=true");
      }

      if (retryCount < 1) {
        setTimeout(() => revalidate({ retryCount }), 3000);
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

// Hook for POST-like (dynamic) data
export const useSwrData = <T = any, P = any>(
  path: string | null,
  payload: P = {} as P,
  options: SWRConfiguration = {}
): {
  data: AxiosResponse<T> | undefined;
  isLoading: boolean;
  isValidating: boolean;
  isError: any;
  mutate: KeyedMutator<AxiosResponse<T>>;
} => {
  const navigate = useNavigate();

  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable<
    AxiosResponse<T>
  >(path ? [path, payload] : null, fetcherPost, {
    onErrorRetry: (error, revalidate, { retryCount }) => {
      if (error?.response?.status === 404) return;

      if (error?.response?.status === 401) {
        navigate("/login?isLogin=true");
      }

      if (retryCount < 1) {
        setTimeout(() => revalidate({ retryCount }), 3000);
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

// Hook for PUT-like (dynamic) data
export const useSwrPut = <T = any, P = any>(
  path: string | null,
  payload: P = {} as P,
  options: SWRConfiguration = {}
): {
  data: AxiosResponse<T> | undefined;
  isLoading: boolean;
  isValidating: boolean;
  isError: any;
  mutate: KeyedMutator<AxiosResponse<T>>;
} => {
  const navigate = useNavigate();

  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable<
    AxiosResponse<T>
  >(path ? [path, payload] : null, fetcherPut, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error?.response?.status === 404) return;

      if (error?.response?.status === 401) {
        navigate("/login?isLogin=true");
      }

      if (retryCount < 1) {
        setTimeout(() => revalidate({ retryCount }), 3000);
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
