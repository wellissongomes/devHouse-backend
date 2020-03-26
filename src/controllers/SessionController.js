import User from '../models/User';

const SessionController = {
  async store(req, res) {
    const { email, name } = req.body;

    let user = await User.findOne({ email, name });
    if (!user) {
      user = await User.create({ email, name });
    }
    return res.json(user);
  },
};

export default SessionController;
