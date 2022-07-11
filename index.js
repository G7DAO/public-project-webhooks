import waitlist from './_api/api.waitlist';
import user from './_api/api.users';

export const _waitlist = waitlist;
export const _user = user;

const models = {
  _waitlist,
  _user,
};

export default models;