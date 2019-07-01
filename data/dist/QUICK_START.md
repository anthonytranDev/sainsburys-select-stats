# Quickstart: Luna v2 and React

[Document still incomplete]

Guidelines on how to get you up and running with Luna and React

## Still using Luna v1?

Please check out [Luna v1]()

## Getting Started

### Contents

There are multiple ways to jump start your project with Luna v2, some more for demo purposes where as others can be use for a fully fledged application; see below;

1. Starter kits & demo projects
2. Migration Guides
3. Build your first Luna app

## Starter kits & demos

Prefer to get up and running straight away? Checkout

- **Starter kit** - [Luna CRA]()
- **Demo site** - [Sainsbury’s Select landing page]()

## Migration guides

Familiar with Luna v1?

- Migrating from [Luna v1 -> Luna v2]()

## Build your first Luna app

It’s worth following this guide, if this is your first time using Luna. It’ll help, keep the code consistent with the _design system_ and make your app more accessible for all users.

### Prerequisites

To start we assume, you have some knowledge with the below;

- HTML/CSS
- SASS
- JavaScript
- React

Don’t worry if you haven’t ever used any UI libraries before. This tutorial is here to discuss step-by-step ways, on how to build your first Luna project.

### Tutorial

Learning Aims:

I am able to...

- **Setup a Luna project** - how to get a starting project base up and running. With both Luna packages and create-react-app
- **Apply Luna best practices** - tips on ways to utilise some of the features Luna has to offer in your React app. Such as the `@jsluna/style` utilise mixins and functions and `@jsluna/react` components

### End result

Goal:

- End up with a mockup of Sainsbury’s Select landing page up

Tools we’ll be using
[Note: packages needs changing for future users]

- **create-react-app** - React’s official starter pack. Here’s a guide to get that up and running

- **node-sass** - enables one to include SASS into the project - if you haven’t used any SASS before. We recommend you looking at the SASS beginners guide first - https://sass-lang.com/guide

- **@jsluna packages**
  - **@jsluna/react: ^4.0.0-alpha.0** - this Luna’s react UI library
  - **@jsluna/style: ^3.0.0-alpha.0** - contains styles that enables setting up theming and helpful utility mixins
  - **@jsluna/fonts: ^1.0.0-alpha.0** - contain different font sizes and Mary Ann fonts
  - **@jsluna/icons: ^2.0.0-alpha.0** - custom iconography used across the Sainsbury’s Group suite of products
  - **@jsluna/images: ^3.0.0-alpha.0** - all logo assets available
  - **@jsluna/labs: ^2.0.0-alpha.0** - contains components currently in alpha/beta. Plus a useful tool in helping develop new components, to bring them into the Luna design system. For this tutorial we’ll be using this package to bring in the new Luna Header

### 1) Setup

[Insert tutorial material here]

#### 1a) Ask for access to packages
Please email the following package admins, for access to these packages
- edward.mortlock@sainsburys.co.uk
- mike.beach1@sainsburys.co.uk

Feel free to copy the email template below:

```
`Possible <email> template`
```

#### 1b) Use starter pack `create-react-app` (CRA)

Globally install the starter pack generator. Recommend you do this as it's easy to forget that you've installed it in one location; having to reinstall in a different location; keep starter packs setup scripts globally.

```
$ npm i -g create-react-app
```

Utilise the `npx` tool below; it's part of the command to kit start your project

```
$ npx create-react-app my-luna-project
```

The resulting directory structure below

```
.
├── README.md
├── package.json
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock
```

#### 1c) Integrate Luna v2 into CRA
Include a `.npmrc` in the root of this project, this allow you access to the private repos that managed by Nexus 3.
Please include following value to your project. 


**`.npmrc`**
```
@jsluna:registry=https://nexus.public.dev.golf-noprod.js-devops.co.uk/repository/npm/
email=my@sainsburys.co.uk?[YOUR_SECURITY_HASH]
```

### 2) First Luna Component

Going to throw you in the deep end, as we'll be utilising the `Header` component. As the first component in our webpage.

Here the benefits of using Luna, over other UI libraries and trying to create your own UI library from scratch, becomes apparently clear.

[Insert tutorial material here]
