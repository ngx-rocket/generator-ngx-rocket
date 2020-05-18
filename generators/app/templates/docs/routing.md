# Browser routing

To allow navigation without triggering a server request, Angular now use by default the
[HTML5 pushState](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
API enabling natural URL style (like `localhost:4200/home/`), in opposition to Angular 1 which used the *hashbang* hack
routing style (like `localhost:4200/#/home/`).

This change has several consequences you should know of, be sure to read the
[browser URL styles](https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles) notice to fully
understand the differences between the two approaches.

In short:

- It is only supported on modern browsers (IE10+), a [polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#html5-history-api-pushstate-replacestate-popstate)
  is required for older browsers.

- You have the option to perform *server-side rendering* later if you need to increase your app perceived performance.

- You need to [configure URL rewriting](#server-configuration) on your server so that all routes serve your index file.

It is still possible to revert to the hash strategy, but unless you have specific needs, you should stick with the
default HTML5 routing mode.

## Server configuration

To allow your angular application working properly as a *Single Page Application* (SPA) and allow bookmarking or
refreshing any page, you need some configuration on your server, otherwise you will be running into troubles.

> Note that during development, the live reload server already supports SPA mode.

The basic idea is simply to serve the `index.html` file for every request aimed at your application.

Here is an example on how to perform this on an [Express](http://expressjs.com) NodeJS server:

```js
// Put this in your `server.js` file, after your other rules (APIs, static files...)
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});
```

For other servers like [Nginx](https://www.nginx.com/blog/creating-nginx-rewrite-rules/) or
[Apache](http://httpd.apache.org/docs/2.0/misc/rewriteguide.html), you may look for how to perform *URL rewriting*.
