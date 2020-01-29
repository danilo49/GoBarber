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

  async update(req, res) {
    // console.log(reqIuserId);
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      }); // verifica antes de atualizar o usuario se ja existe algum email igual na base de dados

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      // Just make sure that the old password corresponds to a record in the database, if he enters the password, otherwise it will not enter the case, as there is no more old password
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
