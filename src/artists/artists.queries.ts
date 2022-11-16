export const artistQueries = {
    readArtists: `
    SELECT
    id as artistId, name AS name, genre AS genre
    FROM stream.artists
    `,
    readArtistByArtistId: `
    SELECT
    id as artistId, name AS name, genre AS genre
    FROM stream.artists
    WHERE stream.artists.id = ?
    `,
    createArtist: `
    INSERT INTO artists(name, genre) VALUES(?,?)
    `,
    updateArtist: `
    UPDATE stream.artists
    SET name = ?, genre = ?
    WHERE id = ?
    `,
    deleteArtist: `
    DELETE FROM stream.artists
    WHERE id = ?
    `,
}