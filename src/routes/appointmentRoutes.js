const router = require('express').Router();

const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByUser,
} = require('../controllers/appointmentController'); 

router.post('/',  createAppointment);
router.get('/',   getAllAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.get('/user/:user_id', getAppointmentsByUser);
router.delete('/:id', deleteAppointment);


module.exports = router;
