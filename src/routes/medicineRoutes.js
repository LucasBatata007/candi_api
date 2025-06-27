const router = require('express').Router();
const {
  createMedicine,
  getAllMedicines,
  getMedicinesByUser,
  getMedicineById,
  updateMedicine,
  deleteMedicine, 
  
} = require('../controllers/medicineController');

router.post('/',  createMedicine);
router.get('/',   getAllMedicines);
router.get('/:id', getMedicineById);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);
router.get('/user/:user_id', getMedicinesByUser);

module.exports = router;
