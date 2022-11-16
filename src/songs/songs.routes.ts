import { Router } from 'express';
import * as SongsController from './songs.controller';

const router = Router();
router.
route('/songs').
get(SongsController.readSongs);

// router.
// route('/collections').
// post(CollectionsController.createCollection);

// router.
// route('/collections').
// put(CollectionsController.updateCollection);

// router.
// route('/collections/:collectionId').
// delete(CollectionsController.deleteCollection);

export default router;