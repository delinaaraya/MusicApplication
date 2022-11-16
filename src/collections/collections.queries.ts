export const collectionQueries = {
    readCollections: `
    SELECT
    id as collectionId, title AS title, song_id AS songId
    FROM stream.collections
    `,
    readCollectionsByCollectionId: `
    SELECT
    id as collectionId, title AS title, song_id AS songId
    FROM stream.collections
    WHERE stream.collections.id = ?
    `,
    createCollection: `
    INSERT INTO collections(title, song_id) VALUES(?,?)
    `,
    updateCollection: `
    UPDATE stream.collections
    SET title = ?, song_id = ?
    WHERE id = ?
    `,
    deleteCollection: `
    DELETE FROM stream.collections
    WHERE id = ?
    `,
}