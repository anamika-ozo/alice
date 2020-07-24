var config = require("../../static/config.json"),
	version = require("../../package.json").version.
    main = require("../main.js"),
    avatars = require("../avatars.js"),
    mod = require("../moderation.js");
    
    

var aliases = {
	"kick": "k",
	"ban": "b",
	"avatar": "pfp"
}

exports = { aliases };