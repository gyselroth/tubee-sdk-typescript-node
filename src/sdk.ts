import * as v1Api from './api';

export const auth = {
  basic: v1Api.HttpBasicAuth,
  key: v1Api.ApiKeyAuth,
  oauth: v1Api.OAuth
};

export const v1 = v1Api;
