import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'; // password hash

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      // antes de salvar/update convert password to hashing
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8); // convert password to hashing
        // 8 refers to the number of the strength of the encryption
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash); // Comparing password that the user typed with the password that is registered in the database, with their respective email that is in SessionController
  }
}

export default User;
