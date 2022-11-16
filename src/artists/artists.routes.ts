import { Request, Response, Router } from 'express';
import * as ArtistsController from './artists.controller';


const router = Router();
router.
    route('/artists').
    get(ArtistsController.readArtists);

router.
route('/artists').
post(ArtistsController.createArtist);

router.
route('/artists').
put(ArtistsController.updateArtist);

router.
route('/artists/:artistId').
delete(ArtistsController.deleteArtist);

export default router;