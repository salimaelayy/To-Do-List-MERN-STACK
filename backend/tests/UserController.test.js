const userModel = require('../Models/UserModels');
const bcrypt = require('bcrypt');
const { createToken } = require('../Middlewares/tokenCreation');
const UserController = require('../Controllers/UserController');
jest.mock('../Models/UserModels');
jest.mock('bcrypt');
jest.mock('../Middlewares/tokenCreation');

describe('User Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user', async () => {
    // Mocking input data
    const req = {
      body: {
        username: 'testUser',
        password: 'testPassword',
        email: 'test@example.com',
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    // Mocking bcrypt.hash
    bcrypt.hash.mockResolvedValueOnce('hashedPassword');

    // Mocking userModel.findOne
    userModel.findOne.mockResolvedValueOnce(null); // User does not exist in the database

    // Mocking userModel.create
    userModel.create.mockResolvedValueOnce({
      _id: 'mockUserId',
      username: 'testUser',
      password: 'hashedPassword',
      email: 'test@example.com',
    });

    await UserController.register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: {
        _id: 'mockUserId',
        username: 'testUser',
        password: 'hashedPassword',
        email: 'test@example.com',
      },
      message: 'New user added successfully',
    });
  });

});
