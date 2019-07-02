## Breaking Changes - Luna v2

[Document still incomplete]

Due to major changes in the functionality of Luna v2, many changes have been made to make the 

### Scoped packages names

**Package prefix change** - All packages have had the `luna-` prefix changed to use `@jsluna/` scope. Updates will be required for all Luna import and package.json instances.

### React version changed to v16.8.x

We were previously supporting `v16.2.x`, but the subsequent minor releases have brought in numerous features that would benefit the library and so with the major release change it felt like the right opportunity to make the switch to unlock us making use of them. Future releases will look to bring in:

- Improved `ref` handling with `createRef` & `forwardRef` (16.3)
- Explore potential for context API for theming / shared UI state (16.3)
- Performance profiling (16.5)
- Memoized and lazy loading utilities (16.6)
- Hooks (16.8)

### Luna React

#### Renamed/Changed
- The main index file location has changed from `./components/index` to `./dist`, so long as you weren't directly referencing this directory then this shouldn't impact anything.

#### Removed
- Removed **luna-style** proxies, so `luna-react/scss/main` & `luna-react/css` are no longer available. Use **luna-style** directly for this.
- Direct import of components (`import * from 'luna-react/components/*'`) is no longer available, but top level option (`import { * } from '@jsluna/react'`) still exists. We recommend using the relevant package for greater control over this.
- Direct import of icons (`import * from 'luna-react/icons/*`) is no longer available, but top level option (`import { * } from '@jsluna/react/icons'`) still exists. We recommend using **luna-icons** for greater control over this.
- Direct import of images (`import * from 'luna-react/images/*`) is no longer available, but top level option (`import { * } from '@jsluna/react/icons'`) still exists. We recommend using **luna-images** for greater control over this.

### Luna Style

#### Renamed/Changed
- `./scss/base` has been renamed to `./scss/elements`.
- `./scss/reset` has been renamed to `./scss/generics`.
- The compiled CSS output has moved from `./dist/main.css` to `./css/main.css`.

#### Removed
- `./icons` directory has been removed, they now exist in `./images` without the previous `ln-icon-` filename prefix however using **luna-icons** for this would be recommended.
- `./fonts` & `./images` directories have been removed from source but still exist in the distributed package, view **luna-fonts**, **luna-icons** & **luna-images** to view the source files.
- Assets uploaded to the CDN are no longer present in a relevant subfolder, e.g. https://cdn.luna.js-devops.co.uk/assets/luna-style/<VERSION>**/css/**main.css
- The `$ln-assets-url` setting has been removed to allow for more flexibility down the line. The current usage of it is now covered by `$ln-fonts-url` which states where the font files can be found. This new setting switches to `~luna-fonts/fonts` if `$ln-webpack: true;` is set.

#### Other
- `@import 'luna-style/**/*'` is no longer available in most instances - they will now be located within the relevant component package.
- `./scss/settings/*` & `./scss/tools/*` are now part of **luna-foundation**.
- `./scss/core` just adds layout objects, components and utilities with resets and base element styling moved into `./scss/primer`.
- `.ln-c-striped` has been removed. Get in touch if you were using this as it can potentially be restored if it still has value.
- `.ln-c-sainsburys-icon` has been removed. Get in touch if you were using this as it can potentially be restored if it still has value.
- `.ln-c-badge` has been removed. Get in touch if you were using this as it can potentially be restored if it still has value.
- Added `$ln-webpack` setting to apply default values for use with webpack file resolution.
