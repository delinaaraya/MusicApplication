import { request, Request , RequestHandler, Response } from 'express';
import { Collection } from './collections.model';
import { Song } from '../songs/songs.model';
import * as CollectionDao from './collections.dao';
import * as TracksDao from '../songs/songs.dao';
import { OkPacket } from 'mysql';

/**
 * This is a function that gets all collections from db
 *
 * @name readCollections
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const readCollections: RequestHandler = async (req: Request, res: Response) => {
    try{
        let collections;
        let collectionId = parseInt(req.params.collectionId as string);
        //let collectionsId = parseInt(req.query.collectionId as string);
        console.log('params', req.params);
        console.log('collectionId. collectionId', collectionId);
        if (Number.isNaN(collectionId)) {
            collections = await CollectionDao.readCollections();
        }else{
            collections = await CollectionDao.readCollectionsByCollectionId(collectionId);
        }
        //await readTracks(collections, res);

        res.status(200).json(
            collections
        );
    } catch (error) {
        console.error('[collections.controller][readcollections][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching collections'
        });
    }
};

// export const readCollection: RequestHandler = async (req: Request, res: Response) => {
//     try{
//         let collections;
//         let collectionsId = parseInt(req.query.collectionId as string);

//         console.log('collectionId. collectionId');
//         if (Number.isNaN(collectionsId)) {
//             collections = await CollectionDao.readCollections();
//         }else{
//             collections = await CollectionDao.readCollectionsByCollectionId(collectionsId);
//         }
//         //await readTracks(collections, res);

//         res.status(200).json(
//             collections
//         );
//     } catch (error) {
//         console.error('[collections.controller][readcollections][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when fetching collections'
//         });
//     }
// };

/**
 * This is a function that gets creates new collections in the database
 *
 * @name createCollections
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const createCollection: RequestHandler = async (req: Request, res: Response) => {
    console.log('HELLO!', req.body);
    try {
        const okPacket: OkPacket = await CollectionDao.createCollection(req.body);

        console.log('req.body', req.body);

        console.log('album', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[collections.controller][createCollection][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing collections'
        });
    }
};

/**
 * This is a function that updates existing collections in the database
 *
 * @name updateCollection
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const updateCollection: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('UPDATE COLLECTION', req.body)
        const okPacket: OkPacket = await CollectionDao.updateCollection(req.body);

        console.log('req.body', req.body);

        console.log('collection', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[collections.controller][updateCollection][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating collections'
        });
    }
};

/**
 * This is a function that deletes existing collections from the database
 *
 * @name deleteCollection
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const deleteCollection: RequestHandler = async (req: Request, res: Response) => {
    try {
        let collectionId = parseInt(req.params.collectionId as string);
        console.log(req.params.collectionId);

        console.log('collectionId', collectionId);
        if (!Number.isNaN(collectionId)) {
            const response = await CollectionDao.deleteCollection(collectionId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for collectionId");
        }
    } catch (error) {
        console.error('[collections.constroller][deleteCollection][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting collections'
        });
    }
};

