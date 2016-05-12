# ardrone-autolanding
:helicopter: Autonomous landing system for a Parrot AR-Drone 2 drone with control and image processing 

## Running the software

You will need the
[ardrone-webflight](https://github.com/eschnou/ardrone-webflight) and
ardrone-autonomy repos:

```
git clone git://github.com/eschnou/ardrone-webflight.git
git clone git://github.com/marcos90gil/ardrone-autolanding.git
```

Run `npm install` for each to install the backend dependencies:

```
$ cd ardrone-webflight && npm install
$ cd ardrone-autolanding && npm install
```

Plus `bower install` for webflight to install the frontend dependencies:
(The first command is to install bower if you do not have it already installed)
```
$ npm install -g bower
$ cd ardrone-webflight && bower install
```

Link `ardrone-autolanding` into webflight's `plugins` directory:

```
$ cd ardrone-webflight/plugins && ln -s ../../ardrone-autolanding
```

Copy ardrone-webflight's `config.js.example` to `config.js`:

```
$ cd ardrone-webflight && cp config.js.example config.js
```

Add `"ardrone-autolanding"` to the `plugins` array in `config.js` so it looks something like this:

```javascript
var config = {
    plugins: [
        "ardrone-autolanding" // Autonomous landing with control and image processing 
        , "video-png"     // Display the video feed as static pngs (work in every browser)
        //, "video-stream"  // Display the video as a native h264 stream decoded in JS 
        , "hud"   // Display the artificial horizon, altimeter, compass, etc.
        , "battery"   // Display a simple battery widget in the header bar
        , "pilot" // Pilot the drone with the keyboard
        , "blackbox"  // Experimental: Records all mision data (navData, raw video, PaVE headers, etc.)
        //, "replay"// Experimental: Replay the data recorded by the blackbox
    ],
};

module.exports = config;
```

### Start the server

Now you can start the webflight server:

```
$ cd ardrone-webflight && node app.js
```

And point your browser at http://localhost:3000/
