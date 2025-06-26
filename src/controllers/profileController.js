const Profile = require('../models/Profile');

async function createProfile(req, res) {
  try {
    const profile = await Profile.create(req.body);
    return res.status(201).json(profile);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAllProfiles(_req, res) {
  const profiles = await Profile.find();
  return res.json(profiles);
}

async function getProfileById(req, res) {
  const profile = await Profile.findOne({ user_id: req.params.id });
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  return res.json(profile);
}

async function updateProfile(req, res) {
  const profile = await Profile.findOneAndUpdate(
    { user_id: req.params.id },
    req.body,
    { new: true }
  );
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  return res.json(profile);
}

async function deleteProfile(req, res) {
  const profile = await Profile.findOneAndDelete({ user_id: req.params.id });
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  return res.json({ msg: 'Profile deleted' });
}

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
};
