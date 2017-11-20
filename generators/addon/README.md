# :rocket: ngx-rocket/generator-ngx-rocket:addon

> ngX-Rocket add-on generator

Have an awesome add-on idea for the [ngX-Rocket generator](https://github.com/ngx-rocket/generator-ngx-rocket), or
maybe you just want to tweak a little its output? This is for you! :point_left:

This *meta* generator creates all the boilerplate needed for your own ngX-Rocket add-on.

## Getting started

1. Install required tools:
 ```sh
 npm install -g yo generator-ngx-rocket
 ```

2. Create your add-on:
 ```sh
 yo ngx-rocket:addon
 ```

## Add-on creation

See [ngx-rocket/core](https://github.com/ngx-rocket/core) for the complete documentation about add-on creation.

## Testing

To test your add-on once it's finished, you can use the `npm link .` command.
It will make your add-on available globally as if it was installed using `npm install -g`, while still allowing you to
make modifications to it.

Then use the [ngX-Rocket CLI](https://github.com/ngx-rocket/cli) to test your add-on with the command `ngx new`.
