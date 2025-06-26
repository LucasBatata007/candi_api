const router = require('express').Router();
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');  

router.post('/',  createProfile);
router.get('/',   getAllProfiles);
router.get('/:id', getProfileById);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

module.exports = router;
