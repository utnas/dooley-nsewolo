DooleyNsewolo.Router.map(function() {
	this.resource("sessions", { path: "/" }, function(){
		this.resource('session', {path: ':session_id'});
	});

});
