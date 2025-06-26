/* src/controllers/AppointmentController.js */
const Appointment = require('../models/Appointment');

async function createAppointment(req, res) {
  try {
    const med = await Appointment.create(req.body);
    return res.status(201).json(med);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAllAppointments(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const meds = await Appointment.find({ user_id: userId }).sort({ start_date: 1 });
  return res.json(meds);
}

async function getAppointmentById(req, res) {
  const userId = req.params.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Appointment.find({ user_id: userId });
  if (!med) return res.status(404).json({ error: 'Appointment not found for this user' });
  return res.json(med);
}

async function updateAppointment(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Appointment.findOneAndUpdate(
    { appointments_id: req.params.id, user_id: userId },
    req.body,
    { new: true }
  );
  if (!med) return res.status(404).json({ error: 'Appointment not found for this user' });
  return res.json(med);
}

async function deleteAppointment(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Appointment.findOneAndDelete({ Appointments_id: req.params.id, user_id: userId });
  if (!med) return res.status(404).json({ error: 'Appointment not found for this user' });
  return res.json({ msg: 'Appointment deleted' });
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
