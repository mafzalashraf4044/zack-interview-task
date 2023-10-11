import { Config } from './config.interface';

export default async (): Promise<Config> => {
  return {
    port: parseInt(process.env.PORT, 10),
    nyTimesAPIKey: process.env.NY_TIMES_API_KEY,
  };
};
