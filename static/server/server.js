function load_rejections(argv) {
	const express = require('express');
    const request = require('got');

    const app = express();
    app.enable('trust proxy');

    const METADATA_NETWORK_INTERFACE_URL =
        'http://metadata/computeMetadata/v1/' +
        '/instance/network-interfaces/0/access-configs/0/external-ip';

    const getExternalIp = async() => {
        const options = {
            headers: {
                'Metadata-Flavor': 'Google',
            },
            json: true,
        };

        try {
            const {
                body
            } = await request(METADATA_NETWORK_INTERFACE_URL, options);
            return body;
        } catch (err) {
            console.log('Error while talking to metadata server, assuming localhost');
            return 'localhost';
        }
    };

    app.get('/', async(req, res, next) => {
        try {
            const externalIp = await getExternalIp();
            res.status(200).send(`External IP: ${externalIp}`).end();
        } catch (err) {
            next(err);
        }
    });

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
        console.log('Press Ctrl+C to quit.');
    });
    
}

load_rejections.prototype.host = function(argv) {
   start();
};
