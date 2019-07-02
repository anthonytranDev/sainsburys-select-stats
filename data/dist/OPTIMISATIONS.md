# Optimisations

TIMESTAMP ∙ 15:20 JUNE 28 2019

This was data gather from the `sainsburys-select-cra` app

# [PRE] Luna V2 bundle optimisations

## Packages installed

@jsluna/fonts: ^1.0.0-alpha.0
@jsluna/icons: ^2.0.0-alpha.0
@jsluna/images: ^3.0.0-alpha.0
@jsluna/labs: ^2.0.0-alpha.0
@jsluna/link: ^1.0.0-alpha.0
@jsluna/react: ^4.0.0-alpha.0
@jsluna/style: ^3.0.0-alpha.0

## Statistics



- @jsluna ∙ 230.67KB (Compressed) ∙ 31.2%
  - @jsluna/react ∙ 119.36KB (Compressed) ∙ 16.1%
  - @jsluna//icons ∙ 40.25KB (Compressed) ∙ 5.4%
  - @jsluna//form ∙ 26.75KB (Compressed) ∙ 3.6%
  - @jsluna//labs ∙ 17.42KB (Compressed) ∙ 2.4%
  - @jsluna//button ∙ 5.98KB (Compressed) ∙ 0.8%
- react-dates ∙ 230.67KB (Compressed) ∙ 27.0%
- react-dom ∙ 106.39KB (Compressed) ∙ 27.0%
- moment ∙ 53.48KB (Compressed) ∙ 7.2%
- popper.js ∙ 20.77KB (Compressed) ∙ 2.8%
- downshift ∙ 15.9KB (Compressed) ∙ 2.2%


- @jsluna ∙ 117.53KB (Compressed) ∙ 40.7%
  - @jsluna//icons ∙ 40.11KB (Compressed) ∙ 13.9%
  - @jsluna//form ∙ 26.75KB (Compressed) ∙ 9.2%
  - @jsluna//labs ∙ 17.55KB (Compressed) ∙ 6.1%
  - @jsluna//button ∙ 6.23KB (Compressed) ∙ 2.2%
- react-dom ∙ 106.13KB (Compressed) ∙ 36.7%
- popper.js ∙ 20.77KB (Compressed) ∙ 7.2%


# [DURING] Luna V2 bundle optimisations

## Components targeted

### @jsluna

Accordion
AccordionItem
Button
Card
Container
Display1
FilledButton
FlagBody
FlagWrapper
Footer
FooterNav
GridItem
GridWrapper
ListGroup
ListGroupItem

### @jsluna/labs

Header
HeaderLogo
HeaderNav

### @jsluna/images

SainsburysSelect

### @jsluna/icons

Basket

## Component Packages to install

import { Accordion, AccordionItem } from "@jsluna/accordion";
import { Button } from "@jsluna/button";
import { Card } from "@jsluna/card";
import { Container, FlagBody, FlagWrapper, GridItem, GridWrapper } from "@jsluna/grid";
import { Footer, FooterNav } from "@jsluna/footer";
import { Basket } from "@jsluna/icons";
import { ListGroup, ListGroupItem } from "@jsluna/list";
import { Header, HeaderLogo, HeaderNav } from "@jsluna/labs";
import { SainsburysSelect } from "@jsluna/images";
import { Display1 } from "@jsluna/typography";

# [POST] Luna V2 bundle optimisations

- @jsluna ∙ 117.53KB (Compressed) ∙ 40.7%
  - @jsluna//icons ∙ 40.11KB (Compressed) ∙ 13.9%
  - @jsluna//form ∙ 26.75KB (Compressed) ∙ 9.2%
  - @jsluna//labs ∙ 17.55KB (Compressed) ∙ 6.1%
  - @jsluna//button ∙ 6.23KB (Compressed) ∙ 2.2%
- react-dom ∙ 106.13KB (Compressed) ∙ 36.7%
- popper.js ∙ 20.77KB (Compressed) ∙ 7.2%

* [Luna v2 (Pre Destructure)](https://agitated-aryabhata-184c36.netlify.com)

- First time loads (remove cache)
- Subsequent loads loads (remove cache)

* [Luna v2 (Post Destructure)](https://compassionate-archimedes-256fe2.netlify.com)
  Funny fact - when a package was accidentally installed with the application, which was `@jsluna/forms` this package wasn't utilise as it wasn't part of the build. Where as if `@jslna/react` was used, the script would have been loaded as it was part of the `[hash].chunk.js` bundle
