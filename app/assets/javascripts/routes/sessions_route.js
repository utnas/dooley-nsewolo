DooleyNsewolo.SessionsRoute = Ember.Route.extend({
	model: function(){
		return DooleyNsewolo.Session.find();
	}
});
