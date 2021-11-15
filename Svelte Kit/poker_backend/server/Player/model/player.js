import mongoose from 'mongoose'
import {composeWithMongoose} from 'graphql-compose-mongoose'

export const PlayersSchema = new mongoose.Schema({

        index: true,
        unique: true,
        id: Number,
        name: String,
        email: String,
        picture_address: String,
})
export const Player= mongoose.model("Player",PlayersSchema);
export const PlayerTC= composeWithMongoose(Player);
