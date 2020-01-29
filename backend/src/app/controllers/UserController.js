import User from '../models/User';

class UserController {
  async store(req, res) {
    // User registration
    const userExists = await User.findOne({ where: { email: req.body.email } }); // verifica antes de cadastrar o usuario se ja existe algum email igual na base de dados

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
