import House from '../models/House';

const DashboardController = {
  async show(req, res) {
    const { user_id } = req.headers;
    const houses = await House.find({ user: user_id });

    return res.json(houses);
  },
};

export default DashboardController;
