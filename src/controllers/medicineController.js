const Medicine = require('../models/Medicine');

async function createMedicine(req, res) {
  try {
    const med = await Medicine.create(req.body);
    return res.status(201).json(med);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAllMedicines(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  // Busca todos os remédios do usuário, ordenados pela data inicial (exemplo)
  const meds = await Medicine.find({ user_id: userId }).sort({ start_date: 1 });
  return res.json(meds);
}

async function getMedicineById(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Medicine.findOne({ medicines_id: req.params.id, user_id: userId });
  if (!med) return res.status(404).json({ error: 'Medicine not found for this user' });
  return res.json(med);
}

async function updateMedicine(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Medicine.findOneAndUpdate(
    { medicines_id: req.params.id, user_id: userId },
    req.body,
    { new: true }
  );
  if (!med) return res.status(404).json({ error: 'Medicine not found for this user' });
  return res.json(med);
}

async function deleteMedicine(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  const med = await Medicine.findOneAndDelete({ medicines_id: req.params.id, user_id: userId });
  if (!med) return res.status(404).json({ error: 'Medicine not found for this user' });
  return res.json({ msg: 'Medicine deleted' });
}

module.exports = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
