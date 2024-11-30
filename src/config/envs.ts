type EnvConfig = {
  METRICS_API_URL: string;
  METRICS_API_TOKEN: string;
};

export const envConfig: EnvConfig = {
  METRICS_API_URL: import.meta.env.VITE_METRICS_API_URL,
  METRICS_API_TOKEN: import.meta.env.VITE_METRICS_API_TOKEN,
};

export default envConfig;
