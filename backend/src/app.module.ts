import { Module } from '@nestjs/common';

import { ConfigModule } from '@config/config.module';
import NewsModule from '@modules/news/news.module';

@Module({
  imports: [
    ConfigModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
