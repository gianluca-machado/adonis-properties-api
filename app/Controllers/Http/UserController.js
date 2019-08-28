'use strict';

const User = use("App/Models/User");

class UserController {
  
  async create({ request }) {
    const data = request.only(['name', 'email', 'password']);
    const user = await User.create(data);
    return user;
  }

  async store({ request }) {
    const data = request.only(['name', 'email', 'password']);
    const user = await User.create(data);
    return user;
  }

  async show({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  async index({ request, response, view }) {
    const users = await User.all();
    return users;
  }

  async update({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    const data = request.only(['name', 'email', 'password']);
    user.merge(data);
    await user.save();
    return user;
  }

  async destroy({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }
  
}

module.exports = UserController;
