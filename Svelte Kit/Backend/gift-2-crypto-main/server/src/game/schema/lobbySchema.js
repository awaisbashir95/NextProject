import {LobbyTC} from  '../models/Lobby';

const LobbyQuery = {
  LobbyById: LobbyTC.getResolver('findById'),
  LobbyByIds: LobbyTC.getResolver('findByIds'),
  LobbyOne: LobbyTC.getResolver('findOne'),
  LobbyMany: LobbyTC.getResolver('findMany'),
  LobbyCount: LobbyTC.getResolver('count'),
  LobbyConnection: LobbyTC.getResolver('connection'),
  LobbyPagination: LobbyTC.getResolver('pagination'),
};

const LobbyMutation = {
  LobbyCreateOne: LobbyTC.getResolver('createOne'),
  LobbyCreateMany: LobbyTC.getResolver('createMany'),
  LobbyUpdateById: LobbyTC.getResolver('updateById'),
  LobbyUpdateOne: LobbyTC.getResolver('updateOne'),
  LobbyUpdateMany: LobbyTC.getResolver('updateMany'),
  LobbyRemoveById: LobbyTC.getResolver('removeById'),
  LobbyRemoveOne: LobbyTC.getResolver('removeOne'),
  LobbyRemoveMany: LobbyTC.getResolver('removeMany'),
};

export { LobbyQuery, LobbyMutation };
