# Sass coding guide

[Sass](http://sass-lang.com) is a superset of CSS, which brings a lot of developer candy to help scaling CSS in large
projects and keeping it maintainable.

The main benefits of using Sass over plain CSS are *variables*, *nesting* and *mixins*, see the
[basics guide](http://sass-lang.com/guide) for more details.

> Note that this project use the newer, CSS-compatible **SCSS** syntax over the old
  [indented syntax](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html).

## Naming conventions

- In the CSS world, everything should be named in `kebab-case` (lowercase words separated with a `-`).
- File names should always be in `kebab-case`

## Coding rules

- Use single quotes `'` for strings
- Use this general nesting hierarchy when constructing your styles:
  ```scss
  // The base component class acts as the namespace, to avoid naming and style collisions
  .my-component {
    // Put here all component elements (flat)
    .my-element {
      // Use a third-level only for modifiers and state variations
      &.active { ... }
    }
  }
  ```
  Note that with
  [Angular view encapsulation](https://angular.io/docs/ts/latest/guide/component-styles.html#!#view-encapsulation),
  the first "namespace" level of nesting is not necessary as Angular takes care of the scoping for avoid collisions.

  > As a side note, we are aware of the [BEM naming approach](https://en.bem.info/tools/bem/bem-naming/), but we found
    it impractical for large projects. The nesting approach has drawbacks such as increased specificity, but it helps
    keeping everything nicely organized, and more importantly, *scoped*.


Also keep in mind this general rules:
- Always use **class selectors**, never use ID selectors and avoid element selectors whenever possible
- No more than **3 levels** of nesting
- No more than **3 qualifiers**

## Best practices

- Use object-oriented CSS (OOCSS):
  * Factorize common code in base class, and extend it, for example:
  ```scss
  // Base button class
  .btn { ... }

  // Color variation
  .btn-warning { ... }

  // Size variation
  .btn-small { ... }
  ```
  * Try to name class by semantic, not style nor function for better reusability:
    Use `.btn-warning`, not `btn-orange` nor `btn-cancel`
  * Avoid undoing style, refactor using common base classes and extensions

- Keep your style scoped
  * Clearly separate **global** (think *framework*) and **components** style
  * Global style should only go in `src/theme/`, never in components
  * Avoid style interactions between components, if some style may need to be shared, refactor it as a framework
    component in put it in your global theme.
  * Avoid using wider selectors than needed: always use classes if you can!

- Avoid rules multiplication
  * The less CSS the better, factorize rules whenever it's possible
  * CSS is code, and like any code frequent refactoring is healthy

- When ugly hacks cannot be avoided, create an explicit `src/hacks.scss` file and put it in:
  * These ugly hacks should only be **temporary**
  * Each hack should be documented with the author name, the problem and hack reason
  * Limit this file to a reasonable length (~100 lines) and refactor hacks with proper solutions when the limit is
    reached.

## Pitfalls

- Never use the `!important` keyword. Ever.
- Never use **inline** style in html, even *just for debugging* (because we **KNOW** it will end up in your commit)

## Browser compatibility

You should never use browser-specific prefixes in your code, as [autoprefixer](https://github.com/postcss/autoprefixer)
takes care of that part for you during the build process.
You just need to declare which browsers you target in the [`browserslist`](https://github.com/ai/browserslist) file.

## Enforcement

Coding rules are enforced in this project with [stylelint](https://stylelint.io).
This tool also checks the compatibility of the rules used against the browsers you are targeting (specified in the
[`browserslist`](https://github.com/ai/browserslist) file), via [doiuse](https://github.com/anandthakker/doiuse).
