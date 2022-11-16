import { request, Request , RequestHandler, Response } from 'express';
import { Artist } from './artists.model';
import * as ArtistsDao from './artists.dao';
import { OkPacket } from 'mysql';


// const ARTISTS = [
//     { id: 1, name: 'Steve Lacy' },
//     { id: 2, name: 'Sam Smith' },
//     { id: 3, name: 'Harry Styles' },
//     { id: 4, name: 'Post Malone'},
//     { id: 5, name: 'Nicky Youre'}
// ];

// export const readArtists = (req: Request, res: Response) => {
//     res.send(ARTISTS);
// }

/**
 * This is a function that reads all artists from db
 *
 * @name readArtists
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const readArtists: RequestHandler = async (req: Request, res: Response) => {
    try{
        let artists;
        let artistId = parseInt(req.query.artistId as string);

        console.log('artistId. artistId');
        if (Number.isNaN(artistId)) {
            artists = await ArtistsDao.readArtists();
        }else{
            artists = await ArtistsDao.readArtistByArtistId(artistId);
        }
        //await readTracks(collections, res);

        res.status(200).json(
            artists
        );
    } catch (error) {
        console.error('[artists.controller][readartists][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching artists'
        });
    }
};

/**
 * This is a function that creates new artists in db
 *
 * @name createArtist
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const createArtist: RequestHandler = async (req: Request, res: Response) => {
    //console.log('HELLO!', req.body);
    try {
        const okPacket: OkPacket = await ArtistsDao.createArtist(req.body);

        console.log('req.body', req.body);

        console.log('artist', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[artists.controller][createArtist][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing artist'
        });
    }
};

/**
 * This is a function that updates existing artists in db
 *
 * @name updateArtist
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const updateArtist: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await ArtistsDao.updateArtist(req.body);

        console.log('req.body', req.body);

        console.log('collection', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[artists.controller][updateArtist][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating artist'
        });
    }
};

/**
 * This is a function that deletes existing artists from db
 *
 * @name deleteArtist
 * @param {object} req - Request object from route request
 * @param {object} res - Response object from route request
 * @return {object[]} - Returns list of all collections
 */
export const deleteArtist: RequestHandler = async (req: Request, res: Response) => {
    try {
        let artistId = parseInt(req.params.artistId as string);
        console.log(req.params.artistId);

        console.log('artistId', artistId);
        if (!Number.isNaN(artistId)) {
            const response = await ArtistsDao.deleteArtist(artistId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for artistId");
        }
    } catch (error) {
        console.error('[artists.constroller][deleteArtist][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting artists'
        });
    }
};