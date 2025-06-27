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
const meds = await Medicine.find().sort({ start_date: 1 });
return res.json(meds);

}

async function getMedicinesByUser(req, res) {
  try {
    const { user_id } = req.params;
    const meds = await Medicine.find({ user_id }).sort({ start_date: 1 });
    return res.json(meds);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function getMedicineById(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const med = await Medicine.findOne({ medicines_id: req.params.id, user_id: userId });
    if (!med) return res.status(404).json({ error: "Medicine not found for this user" });
    return res.json(med);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function updateMedicine(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const med = await Medicine.findOneAndUpdate(
      { medicines_id: req.params.id, user_id: userId },
      req.body,
      { new: true }
    );
    if (!med) return res.status(404).json({ error: "Medicine not found for this user" });
    return res.json(med);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteMedicine(req, res) {
  const userId = req.query.user_id;
  if (!userId) return res.status(400).json({ error: "user_id é obrigatório" });

  try {
    const med = await Medicine.findOneAndDelete({ medicines_id: req.params.id, user_id: userId });
    if (!med) return res.status(404).json({ error: "Medicine not found for this user" });
    return res.json({ msg: "Medicine deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}


module.exports = {
  createMedicine,
  getAllMedicines,
  getMedicinesByUser,   
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};