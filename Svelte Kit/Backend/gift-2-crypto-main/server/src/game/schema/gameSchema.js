import {authMiddleware, authAdminMiddleware} from '../middlewares/auth';
import {lobbyTC} from  '../models/Lobby';
import {AuthUserTC} from  '../models/GameSession';
const UserQuery = {
  authLogin: AuthUserTC.getResolver('authLogin'),
  authUser: AuthUserTC.getResolver('authUser').withMiddlewares([authMiddleware]),
  authForgetPassword: AuthUserTC.getResolver('authForgetPassword'),
  authResetPassword: AuthUserTC.getResolver('authResetPassword'),

  userById: UserReadTC.getResolver('findById').withMiddlewares([authAdminMiddleware]),
  userByIds: UserReadTC.getResolver('findByIds').withMiddlewares([authAdminMiddleware]),
  userOne: UserReadTC.getResolver('findOne').withMiddlewares([authAdminMiddleware]),
  userMany: UserReadTC.getResolver('findMany').withMiddlewares([authAdminMiddleware]),
  userCount: UserReadTC.getResolver('count').withMiddlewares([authAdminMiddleware]),
  userConnection: UserReadTC.getResolver('connection').withMiddlewares([authAdminMiddleware]),
  userPagination: UserReadTC.getResolver('pagination').withMiddlewares([authAdminMiddleware]),
};
