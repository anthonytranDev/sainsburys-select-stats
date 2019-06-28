# Why Migrate to Luna v2?

[Document still incomplete]

**TL;RD** - we're giving users more choice on how they best utilise their packages, by scoping specific components; supports React 16.8

## v16.8.x minimum React version

Upgrading to React `v16.8.x`, will enable users of the Luna design system to take full advantages of the list of features below; Luna v1 is currently supporting React `v16.2.x`;

- Improved `ref` handling with `createRef` & `forwardRef` (16.3)
- Explore potential for context API for theming / shared UI state (16.3)
- Performance profiling (16.5)
- Memoized and lazy loading utilities (16.6)
- Hooks (16.8)

## Bespoke package management

Two major advantages in managing your Luna packages with Luna v2.

### 1) Package Scoping

Make use of the `@jsluna/` scoping. In the previous version you'd need to pull in all the Luna components, include all their subsequent styling, regardless of whether you using all of them or not.

With package scoping, you can now target the exact component you need. Pull down the packages you need.

Example below demonstates how you would include the `Accordion` component in your project.

**Luna v1: Accordion**

`package.json`:

```json
"luna-react": "https://cdn.luna.js-devops.co.uk/pkg/luna-react/v3.0.0.tgz",
"luna-style": "https://cdn.luna.js-devops.co.uk/pkg/luna-style/v2.0.0.tgz",
```

`main.scss`:

```scss
$ln-assets-url: "~luna-style";
@import "luna-react/scss/style";
```

`App.jsx`

```jsx static
import { Accordion, AccordionItem } from "luna-react";
```

**Luna v2: Accordion**

`package.json`:

```js
// Packaged destructuring

"@jsluna/accordion": "^1.0.0-alpha.0",
"@jsluna/icons": "^2.0.0-alpha.0",
"@jsluna/style": "^3.0.0-alpha.0",
"@jsluna/typography": "^1.0.0-alpha.0",
```

`main.scss`:

```scss
$ln-assets-url: "~luna-style";

// Base
@import "@jsluna/foundation/scss/settings";
@import "@jsluna/foundation/scss/tools";

// Objects
@import "@jsluna/list/scss/objects";

// Components
@import "@jsluna/accordion/scss/components";

// Utilities
@import "@jsluna/utils/scss/main";
```

`App.jsx`:

```jsx static
import { Accordion, AccordionItem } from "@jsluna/accordion";
```

#### Comparing bundle sizes

Luna v1

- Total JavaScript bundle size - [Enter number here] KB (compressed)
- Total CSS bundle size - [Enter number here] KB (compressed)

Luna v2

- Total JavaScript bundle size - [Enter number here] KB (compressed)
- Total CSS bundle size - [Enter number here] KB (compressed)

### 2) Auto Update packages

This feature seems trivial, but it has been a long asked feature.

- **No messing around with Tar files** - installing these packages should be second nature, as new NPM installations should give you the most recent of `@jsluna` package. In Luna v1, you'd need to manually look up the most recent version of a Luna package, see whether the version exists and install your packages that way

- **Automatically update your packages** - updating now is as simple as `npm update @jsluna/<package-name>`
