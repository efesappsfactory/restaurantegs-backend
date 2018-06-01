import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ClienteEntity } from './cliente/cliente.entity';
import { OrdenEntity } from './orden/orden.entity';
import { RestauranteEntity } from './restaurante/restaurante.entity';
import { MenuEntity } from './menu/menu.entity';
import { ComboEntity } from './combo/combo.entity';
import { BebidaEntity } from './bebida/bebida.entity';
import { PlatoEntity } from './plato/plato.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dbserver-proyecto-appweb.mysql.database.azure.com',
      port: 3306,
      username: 'myadmin@dbserver-proyecto-appweb',
      password: 'ei8%uC#\\y6PfDbl',
      database: 'pcv',
      entities: [
        __dirname +
        '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      ssl: false,
    }),
    TypeOrmModule.forFeature([
      ClienteEntity,
      OrdenEntity,
      RestauranteEntity,
      MenuEntity,
      PlatoEntity,
      ComboEntity,
      BebidaEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
