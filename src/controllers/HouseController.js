import House from '../models/House';
import User from '../models/User';

const checkAuthorization = (user_id, house_id) => { 
  const user = await User.findById(user_id);
  const house = await House.findById(house_id);

  if (String(user._id) !== String(house.user)) return false
    
  return true
}

const getHouseInfosFromRequest = (req) => {
  return {
    user: req.headers.user_id,
    thumbnail: req.file.filename,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    available: req.body.available,
  }
}

const HouseController = {
  async index(req, res) {
    const { available } = req.query;
    const houses = await House.find({ available });

    return res.json(houses);
  },

  async store(req, res) {
    const houseInfos = getHouseInfosFromRequest(req);

    const house = await House.create(houseInfos);

    return res.json(house);
  },
  async update(req, res) {
    const { houseId } = req.params;
    const { userId } = req.headers;
    const houseInfos = getHouseInfosFromRequest(req);

    if (!checkAuthorization(userId, houseId)) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    await House.updateOne(
      { _id: houseId },
      houseInfos,
    );

    return res.send();
  },

  async destroy(req, res) {
    const { houseId } = req.body;
    const { userId } = req.headers;

    if (!checkAuthorization(userId, houseId)) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    await House.findByIdAndDelete({ _id: houseId });

    return res.json({ message: 'Excluida com sucesso' });
  },
};

export default HouseController;
