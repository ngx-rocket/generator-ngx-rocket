# HTML coding guide

## Naming conventions

- Everything should be named in `kebab-case` (lowercase words separated with a `-`): tags, attributes, IDs, etc,
  **except for everything bound to Angular** such variables, directives or events which should be in `camelCase`
- File names should always be in `kebab-case`

## Coding rules

- Use HTML5 doctype: `<!doctype html>`
- Use HTML [semantic elements](https://developer.mozilla.org/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)
- Use double quotes `"` around attribute values in tags
- Use a new line for every block, list, or table element, and indent every such child element
- Clearly Separate structure (HTML) from presentation (CSS) from behavior (JavaScript):
  * Never use inline CSS or JavaScript
  * Keep any logic out of the HTML
- `type` attribute for stylesheets and script tags should be omitted

## Common pitfalls

- **Block**-type tags cannot be nested inside **inline**-type tags: a `<div>` tag cannot be nested in a `<span>`.
  This rule also applies regarding the `display` value of an element.
- HTML is **not** XML: empty tags cannot be self-closing and will result in improper results
  * `<div/>` will be interpreted as a simple `<div>` without closing tag!
  * The only tags that allows self-closing are the one that does not require a closing tag in first place:
    these are the void elements that do not not accept content `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`
    (and others).
    
## Templates

In accordance with the [Angular style guide](https://angular.io/styleguide), HTML templates should be extracted in
separate files, when more than 3 lines.

Only use inline templates sparingly in very simple components with less than 3 lines of HTML.

## Enforcement

Coding rules enforcement and basic sanity checks are done in this project by [HTMLHint](http://htmlhint.com).
 