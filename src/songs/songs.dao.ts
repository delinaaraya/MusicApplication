import { execute } from '../services/mysql.connector';
import { Song } from './songs.model';
import { songQueries } from './songs.queries';

export const readSongs = async () => {
    console.log('INSIDE DAO');
    return execute<Song[]>(songQueries.readSongs, []);
};

export const readSongBySongId = async (songId: number) => {
    return execute<Song[]>(songQueries.readSongBySongId, [songId]);
};

// export const createSong = async (song: Song, index: number, collectionId: number) => {
//     return execute<Song[]>(songQueries.createSong,
//         [collectionId, song.title, song.artist, song.year, song.runtime]);
// };

// export const updateSong = async (song: Song) => {
//     return execute<Song[]>(songQueries.updateSong,
//         [song.title, song.artist, song.year, song.runtime]);
// };