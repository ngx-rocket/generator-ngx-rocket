# Backend proxy

Usually when working on a web application you consume data from custom-made APIs.

To ease development with our development server integrating live reload while keeping your backend API calls working,
we also have setup a backend proxy to redirect API calls to whatever URL and port you want. This allows you:

- To develop frontend features without the need to run an API backend locally
- To use a local development server without [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) issues
- To debug frontend code with data from a remote testing platform directly

## How to configure

In the root folder you will find a `proxy.conf.js`, containing the backend proxy configuration.

The interesting part is there:
```js
const proxyConfig = [
  {
    context: '/api',
    pathRewrite: {'^/api': ''},
    target: 'http://api.icndb.com',
    changeOrigin: true
  }
];
```

This is where you can setup one or more proxy rules.

For the complete set of options, see the `http-proxy-middleware`
[documentation](https://github.com/chimurai/http-proxy-middleware#options).

### Corporate proxy support

To allow external API calls redirection through a corporate proxy, you will also find a `setupForCorporateProxy()`
function in the proxy configuration file. By default, this method configures a corporate proxy agent based on the 
`HTTP_PROXY` environment variable, see the [corporate proxy documentation](corporate-proxy.md) for more details.

If you need to, you can further customize this function to fit the network of your working environment.

If your corporate proxy use a custom SSL certificate, your may need to add the `secure: false` option to your
backend proxy configuration.
