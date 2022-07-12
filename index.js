import aid from './_api/api.aid';
import auth from './_auth';
import bounty from './_api/api.bounty';
import talent from './_api/api.talent';
import waitlist from './_api/api.waitlist';
import user from './_api/api.users';

export const _aid = aid;
export const _auth = auth;
export const _bounty = bounty;
export const _talent = talent;
export const _waitlist = waitlist;
export const _user = user;

const models = {
  _aid,
  _auth,
  _bounty,
  _talent,
  _waitlist,
  _user,
};

export default models;