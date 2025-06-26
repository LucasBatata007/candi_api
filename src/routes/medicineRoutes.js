const router = require('express').Router();
const {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} = require('../controllers/medicineController');

router.post('/',  createMedicine);
router.get('/',   getAllMedicines);
router.get('/:id', getMedicineById);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);

module.exports = router;
