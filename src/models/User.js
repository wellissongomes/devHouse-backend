import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    name: String
});


export default model('User', UserSchema);