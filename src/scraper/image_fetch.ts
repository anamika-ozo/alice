// image_fetch.ts

import cheerio from 'cheerio'
import Eris from 'eris'
import request from 'request'
import url from 'url'

var page_url = 'https://danbooru.donmai.us';
var results = [];

var target = 'http://localhost:8100?fetch_url=' + encodeURIComponent(page_url);
request.get(target, function(error, response, body) {
    var $ = cheerio.load(JSON.parse(body).content);

    $("img").each(function(i, image) {
        results.push(url.resolve(page_url, $(image).attr('src')));
    });

    Message.channel.send (results)
});

module.exports = image_fetch
