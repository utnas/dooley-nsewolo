/*
DooleyNsewolo.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false
});
*/

DooleyNsewolo.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.FixtureAdapter.create()
});