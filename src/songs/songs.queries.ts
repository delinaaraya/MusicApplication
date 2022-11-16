export const songQueries = {
    // createSong: `
    // INSERT INTO songs (collection_id, title, artist, year, runtime) VALUES(?,?,?,?,?)
    // `,

    readSongs: `
    SELECT 
    id as songId, title AS title, artist_id AS artistId, year AS year, runtime AS runtime
    FROM stream.songs
    `,
    readSongBySongId: `
    SELECT
    id as songId, title AS title, artist_id AS artistId, year AS year, runtime AS runtime
    FROM stream.songs
    WHERE stream.songs.id = ?
    `,
 
    // updateSong: `
    // UPDATE stream.songs
    // SET title = ?, artist = ?, year = ?, runtime = ?
    // WHERE id = ?;
    // `,
}