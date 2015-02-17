![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# ionicons-stylus

[Ionic](http://ionicframework.com/)'s [Ionicons](http://ionicons.com/) library in Stylus and bundled for Meteor. Currently up to date with version `2.0.0`.

## Installation

Using juliancwirko:s-jeet since the stylus package is currently out of date, see https://github.com/meteor/meteor/pull/3749
```
meteor add juliancwirko:s-jeet
meteor add koolaid1551:ionicons-stylus
```

Then in your app's `.styl` file:

```
@import '.meteor/local/build/programs/server/assets/packages/koolaid1551_ionicons-stylus/ionicons';
```

**NOTE:**
Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run meteor reset. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

## Docs

See the official [Ionicons](http://ionicons.com/) site for usage instructions.

## License
[MIT License](https://github.com/meteoric/ionicons-sass/blob/master/LICENSE)
