import aid from './_api/api.aid';
import auth from './_auth';
import bounty from './_api/api.bounty';
import grant from './_api/api.grant';
import newsletter from './_api/api.newsletter';
import talent from './_api/api.talent';
import waitlist from './_api/api.waitlist';
import user from './_api/api.users';

export const _aid = aid;
export const _auth = auth;
export const _bounty = bounty;
export const _grant = grant;
export const _newsletter = newsletter;
export const _talent = talent;
export const _waitlist = waitlist;
export const _user = user;

const models = {
  _aid,
  _auth,
  _bounty,
  _grant,
  _newsletter,
  _talent,
  _waitlist,
  _user,
};

export default models;