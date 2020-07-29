config = require '../../static/config.json',
version = require '../../package.json'.version,
main = require '../main.js',
avatars = require '../avatars.js',
mod = require '../moderation.js';
    
    

aliases = {
	"kick": "k",
	"ban": "b",
	"avatar": "pfp",
	"compile": "c"
}

exports = { aliases };