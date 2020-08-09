server = 
    "server": 
        desc: "run a local server",
        process: load_rejections -> 
                    express = require 'express'
                    request = require 'got'
                    app = express()
                    app.enable 'trust proxy'
                    
                    METADATA_NETWORK_INTERFACE_URL =
                        'http://metadata/computeMetadata/v1/' +
                        '/instance/network-interfaces/0/access-configs/0/external-ip';
                    
                    getExternalIp = async() => {
                        options = 
                            headers: {
                                'Metadata-Flavor': 'Google',
                            },
                        json: true,
                    };

                    try 
                        const {
                            body
                        } = await request(METADA, TA_NETWORK_INTERFACE_URL, options);
                        return body;
                    catch (err) 
                        console.log('Error while talking to metadata server, assuming localhost');
                        return 'localhost';
                    
                };
            
                app.get('/', async(req, res, next) => 
                    try 
                        externalIp = await getExternalIp();
                        res.status(200).send(`External IP: #{externalIp}`).end();
                    catch err 
                        next err
                )
            
                PORT = process.env.PORT || 8080
                app.listen(PORT, () => 
                    console.log `App listening on port #{PORT}`
                    console.log 'Press Ctrl+C to quit.'
                );


exports.server = server;
