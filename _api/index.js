import aid from './api.aid';
import bounty from './api.bounty';
import talent from './api.talent';
import waitlist from './api.waitlist';
import user from './api.users';

export const _aid = aid;
export const _bounty = bounty;
export const _talent = talent;
export const _waitlist = waitlist;
export const _user = user;

const models = {
  _aid,
  _bounty,
  _talent,
  _waitlist,
  _user,
};

export default models;