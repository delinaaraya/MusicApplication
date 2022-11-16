import { Router } from 'express';
import * as CollectionsController from './collections.controller';

const router = Router();
router.
route('/collections').
get(CollectionsController.readCollections);

router.
route('/collections').
post(CollectionsController.createCollection);

router.
route('/collections').
put(CollectionsController.updateCollection);

router.
route('/collections/:collectionId').
delete(CollectionsController.deleteCollection);

export default router;