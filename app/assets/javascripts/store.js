/*
DooleyNsewolo.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false
});
*/

DooleyNsewolo.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});