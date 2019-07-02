# Why Migrate to Luna v2?

[Document still incomplete]

**TL;RD** - bespoke package management, by enabling package scoping and splitting; supports React 16.8

## Why?

### Core Reasons
#### Package Splitting
Enables greater control over how and when your individual packages take updates; individual components separated into constituent parts; more robust to changes to made to the Luna monorepo.

The new approach also includes splitting apart component styling from the single `luna-style` stylesheet allowing for easier code reduction of CSS and more flexibility in terms of when it could be loaded.

This provides many benefits;

- **More resilient to breaking changes** - patching a bug, does not hinder the progress of developing with the other components - as each are somewhat isolated
- **Fine tuning bundle sizes** - here instead of the whole React or style package needed to be installed as of Luna v1. You can pick and choose to install and import the individual components instead

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

#### Comparing package sizes

Luna v2 - Unsplit

- @jsluna/react ∙ 119.36KB (Compressed)
- @jsluna/accordion ∙ 4.02B (Compressed)
- @jsluna/icons ∙ 40.25KB (Compressed)

Luna v2 - Split

- @jsluna/accordion ∙ 4.02KB (Compressed)

For package size comparison Unsplit : Split

**163.63KB: 4.02KB** that saves up to 97.5%, of course applications will use more than one component.

Nevertheless, understand that Luna is a **design system** and it will evolve and add newer components over time, so being able 

#### 1 CHANGELOG per component
Having separate changelogs will also unlock the ability for a more detailed history of how each component has evolved, including 'last updated' dates for an at a glance view of if a new feature is available.

#### Package Scoping & Nexus Registry (Auto update)

- **No messing around with Tar files** - installing these packages should be second nature, as new NPM installations should give you the most recent of `@jsluna` package. In Luna v1, you'd need to manually look up the most recent version of a Luna package, see whether the version exists and install your packages that way

- **Automatically update your packages** - updating now is as simple as `npm update @jsluna/<package-name>`


### Additional Reasons

#### v16.8.x minimum React version
will enable users of the Luna design system to take full advantages of the list of features below; Luna v1 is currently supporting React `v16.2.x`;

- Improved `ref` handling with `createRef` & `forwardRef` (16.3)
- Explore potential for context API for theming / shared UI state (16.3)
- Performance profiling (16.5)
- Memoized and lazy loading utilities (16.6)
- Hooks (16.8)
