import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { BebidaEntity } from '../bebida/bebida.entity';
import { ComboEntity } from '../combo/combo.entity';

@Entity('menu')
export class MenuEntity {

  @PrimaryGeneratedColumn()
  idMenu: number;

  @Column({length: 50})
  codigoMenu: string;

  @ManyToOne(
    type => RestauranteEntity,
    restauranteEntity => restauranteEntity.menu)

  restaurante: RestauranteEntity;

  @OneToMany(
    type => PlatoEntity,
    platoEntity => platoEntity.menu)

  plato: PlatoEntity[];

  @OneToMany(
    type => BebidaEntity,
    bebidaEntity => bebidaEntity.menu)

  bebida: BebidaEntity[];

  @OneToMany(
    type => ComboEntity,
    comboEntity => comboEntity.menu)

  combo: ComboEntity[];

}