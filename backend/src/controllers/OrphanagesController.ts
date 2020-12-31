import { Request, Response } from 'express';
import { getRepository } from 'typeorm' // Repository owns the rules on how to data is created/altered/deleted

import Orphanage from '../models/Orphanage';

export default {

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);
    },

    async create(request: Request, response: Response) {

        // deconstructing the JSON onto its fields
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage); // 201 --> algo foi criado

    }
};