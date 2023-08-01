import aid from './_api/api.aid';
import auth from './_auth';
import bounty from './_api/api.bounty';
import file from './_api/api.file';
import grant from './_api/api.grant';
import newsletter from './_api/api.newsletter';
import talent from './_api/api.talent';
import waitlist from './_api/api.waitlist';
import waitingroom from './_api/api.waitingroom';
import user from './_api/api.users';
import xps from './_api/api.xps';

export const _aid = aid;
export const _auth = auth;
export const _bounty = bounty;
export const _file = file;
export const _grant = grant;
export const _newsletter = newsletter;
export const _talent = talent;
export const _waitlist = waitlist;
export const _waitingroom = waitingroom;
export const _user = user;
export const _xps = xps;

const models = {
  _aid,
  _auth,
  _bounty,
  _file,
  _grant,
  _newsletter,
  _talent,
  _waitlist,
  _waitingroom,
  _user,
  _xps,
};

export default models;