import { OkPacket } from "mysql";
import { execute } from '../services/mysql.connector';
import { Collection } from './collections.model';
import { collectionQueries } from './collections.queries';

export const readCollections = async () => {
    return execute<Collection[]>(collectionQueries.readCollections, []);
};

export const readCollectionsByCollectionId = async (collectionId: number) => {
    return execute<Collection[]>(collectionQueries.readCollectionsByCollectionId, [collectionId]);
};

export const createCollection = async (collection: Collection) => {
    return execute<OkPacket>(collectionQueries.createCollection,
        [collection.title, collection.song_id]);
};

export const updateCollection = async (collection: Collection) => {
    console.log('UPDATE COLLECTION 2', collection);
    return execute<OkPacket>(collectionQueries.updateCollection,
        [collection.title, collection.song_id, collection.id]);
};

export const deleteCollection = async (collectionId: number) => {
    return execute<OkPacket>(collectionQueries.deleteCollection, [collectionId]);
};

