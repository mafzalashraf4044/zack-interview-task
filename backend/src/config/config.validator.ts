import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

import { EnvironmentVariablesInterface } from './config.interface';

export default class EnvironmentVariables
  implements EnvironmentVariablesInterface
{
  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  NY_TIMES_API_KEY: string;
}
