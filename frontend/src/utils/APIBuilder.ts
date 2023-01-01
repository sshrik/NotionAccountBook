import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface APIBuilderConfig {
  baseURL: string;
  headers?: { [key: string]: string };
}

export interface APIBuilderRequestConfig extends AxiosRequestConfig {
  baseURL?: string;
  headers?: { [key: string]: string };
}

export type APIBuilderResponse<T = unknown> = AxiosResponse<T>;

export interface APIBuilder {
  get<T = unknown>(
    url: string,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>>;

  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>>;

  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>>;

  delete<T = unknown>(
    url: string,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>>;
}

export default class APIBuilderImpl implements APIBuilder {
  private readonly instance: AxiosInstance;

  constructor(config: APIBuilderConfig) {
    this.instance = axios.create({
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    });
  }

  get<T = unknown>(
    url: string,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>> {
    return this.instance.get(url, config);
  }

  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>> {
    return this.instance.post(url, data, config);
  }

  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>> {
    return this.instance.put(url, data, config);
  }

  delete<T = unknown>(
    url: string,
    config?: APIBuilderRequestConfig
  ): Promise<APIBuilderResponse<T>> {
    return this.instance.delete(url, config);
  }
}
