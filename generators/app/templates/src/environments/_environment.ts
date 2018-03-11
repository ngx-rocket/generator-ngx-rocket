// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: '<%=props['i18n-default'] || (props['i18n-langs'] && props['i18n-langs'][0])%>',
  supportedLanguages: <%- JSON.stringify(props['i18n-langs'] || []).replace(/["]/g, '\'').replace(/['],/g, '\', ').replace(/[\[]/, '[ ').replace(/[\]]/, ' ]') %>
};
