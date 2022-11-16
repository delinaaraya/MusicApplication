import { request, Request , RequestHandler, Response } from 'express';
import { Song } from './songs.model';
import * as SongDao from './songs.dao';
import { OkPacket } from 'mysql';

/**
 * This is a function that reads all songs from db
 *
 * @name readSongs
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const readSongs: RequestHandler = async (req: Request, res: Response) => {
    console.log('CONSOLE LOG');
    try{
        let songs;
        let songId = parseInt(req.query.songId as string);

        console.log('songId. songId');
        if (Number.isNaN(songId)) {
            console.log('INSIDE CONTROLLER');
            songs = await SongDao.readSongs();
        }else{
            songs = await SongDao.readSongBySongId(songId);
        }

        res.status(200).json(
            songs
        );
    } catch (error) {
        console.error('[songs.controller][readsongs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching songs'
        });
    }
};


// export const createCollection: RequestHandler = async (req: Request, res: Response) => {
//     console.log('HELLO!', req.body);
//     try {
//         const okPacket: OkPacket = await CollectionDao.createCollection(req.body);

//         console.log('req.body', req.body);

//         console.log('album', okPacket);

//         res.status(200).json(
//             okPacket
//         );
//     } catch (error) {
//         console.error('[collections.controller][createCollection][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when writing collections'
//         });
//     }
// };

// export const updateCollection: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         console.log('UPDATE COLLECTION', req.body)
//         const okPacket: OkPacket = await CollectionDao.updateCollection(req.body);

//         console.log('req.body', req.body);

//         console.log('collection', okPacket);

//         res.status(200).json(
//             okPacket
//         );
//     } catch (error) {
//         console.error('[collections.controller][updateCollection][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when updating collections'
//         });
//     }
// };

// export const deleteCollection: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         let collectionId = parseInt(req.params.collectionId as string);
//         console.log(req.params.collectionId);

//         console.log('collectionId', collectionId);
//         if (!Number.isNaN(collectionId)) {
//             const response = await CollectionDao.deleteCollection(collectionId);

//             res.status(200).json(
//                 response
//             );
//         } else {
//             throw new Error("Integer expected for collectionId");
//         }
//     } catch (error) {
//         console.error('[collections.constroller][deleteCollection][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when deleting collections'
//         });
//     }
// };

