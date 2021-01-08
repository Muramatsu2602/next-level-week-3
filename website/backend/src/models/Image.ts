import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

// decorator
// classes, props, funcs, --> automaticamente a classe esta associada a tabe
@Entity('images')

export default class Image {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(()=> Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage; 

}