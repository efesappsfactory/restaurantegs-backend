import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClienteEntity } from '../cliente/cliente.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { BebidaEntity } from '../bebida/bebida.entity';
import { ComboEntity } from '../combo/combo.entity';

@Entity('orden')
export class OrdenEntity {

  @PrimaryGeneratedColumn()
  idOrden: number;

  @ManyToOne(
    type => ClienteEntity,
    clienteEntity => clienteEntity.orden)

  cliente: ClienteEntity;

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