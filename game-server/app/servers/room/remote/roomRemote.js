module.exports = function(app) {
	return new ChatRemote(app);
};

var RoomRemote = function(app) {
	this.app = app;
	this.channelService = app.get('channelService');
};