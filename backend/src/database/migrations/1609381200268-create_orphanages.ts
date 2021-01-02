import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1609381200268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZA ALTERACOES
        // CRIAR TABLE, CRIAR NOVO CAMPO, DELETAR ALGUM CAMPO
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        // DESFAZER O QUE FOI FEITO EM UP
        await queryRunner.dropTable('orphanages');
    }

}
