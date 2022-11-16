import { execute } from '../services/mysql.connector';
import { Artist } from './artists.model';
import { artistQueries } from './artists.queries';
import { OkPacket } from 'mysql';

export const readArtists = async () => {
    return execute<Artist[]>(artistQueries.readArtists, []);
};

export const readArtistByArtistId = async (artistId: number) => {
    return execute<Artist[]>(artistQueries.readArtistByArtistId, [artistId]);
};

export const createArtist = async (artist: Artist) => {
    return execute<OkPacket>(artistQueries.createArtist,
        [artist.name, artist.genre]);
};

export const updateArtist = async (artist: Artist) => {
    return execute<OkPacket>(artistQueries.updateArtist,
        [artist.name, artist.genre, artist.id]);
};

export const deleteArtist = async (artistId: number) => {
    return execute<OkPacket>(artistQueries.deleteArtist, [artistId]);
};
