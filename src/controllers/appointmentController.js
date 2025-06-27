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
  const meds = await Appointment.find().sort({ date: 1 });
  return res.json(meds);
}

async function getAppointmentsByUser(req, res) {
  try {
    const { user_id } = req.params;               
    const appts = await Appointment.find({ user_id }).sort({ date: 1 });
    return res.json(appts);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function getAppointmentById(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const appt = await Appointment.findOne({ appointment_id: req.params.id, user_id: userId });
    if (!appt) return res.status(404).json({ error: "Appointment not found for this user" });
    return res.json(appt);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function updateAppointment(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const appt = await Appointment.findOneAndUpdate(
      { appointment_id: req.params.id, user_id: userId },
      req.body,
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: "Appointment not found for this user" });
    return res.json(appt);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteAppointment(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const appt = await Appointment.findOneAndDelete({ appointment_id: req.params.id, user_id: userId });
    if (!appt) return res.status(404).json({ error: "Appointment not found for this user" });
    return res.json({ msg: "Appointment deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}


module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByUser,
};
