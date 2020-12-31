import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1609444176249 implements MigrationInterface {


    // 1:N --> um orfanato tem varias imagens, cada imagem pertence a so um orfanato
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({ 
            name: "images",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE', // se deletarem o orfanato, isso tbm eh deletado em castata
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
