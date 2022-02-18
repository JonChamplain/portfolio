## SET UP

# THIS REPO WAS INITIALIZED WITH THIS COMMAND

`npx create-next-app -e with-tailwindcss my-project`

Then move contents into root if you initialized from an already initialized project.

# Optional: we like npm better i guess so delete yarn lock & npm i

# Before first push, create .gitignore

```
# Dependency directories
node_modules/

# dotenv environment variable files
.env

# next files
.next/

# Mac files
.DS_Store

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
.next/
out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel
```

# if you screw up this is the command:

`git rm -r --cached .`

# STARTING INSTALLATIONS FOR STYLING

sass

# (in dev dependencies?)

autoprefixer
postcss
postcss-flexbugs-fixes
postcss-preset-env
tailwindcss

#postcss.config.js

```
// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};
```

# postcss.config.js file:

```
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

# create src folder & throw pages, styles & components in there

# Styles setup

Create styles folder
Global scss file:

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@import "pages/index";
```

# File setup

Pages folder (& however many other folders)
`_filename.scss`
Be sure to wrap in class or whatever to isolate as needed.
import global.scss into index first line.

# For refernce of some css conventions install skeleton & drag out contents into styles (put in like a reference folder & do one import at a time to see changes)

`npm i -D skeleton-scss`

# For cool 1 rem = 10px system & scaling up on larger screen sizes put higher up import in base styles:

```
html {
  font-size: 62.5%;
  @media (min-width: 2240px) {
    font-size: 72.9166666667%;
  }
  @media (min-width: 2560px) {
    font-size: 83.3333333333%;
  }
  @media (min-width: 2880px) {
    font-size: 93.75%;
  }
  @media (min-width: 3200px) {
    font-size: 104.166666667%;
  }
  @media (min-width: 3520px) {
    font-size: 114.583333333%;
  }
  @media (min-width: 3840px) {
    font-size: 125%;
  }
}
```

## BE SURE TO NOT IMPORT ALL SKELETON AT ONCE, START WITH LIKE NORMALIZE, TYPOGRAPHY, BASE STYLES, & EXPAND ONLY AS NEEDED & BTW ORDER OF IMPORTS REALLY REALLY REALLY MATTER

# When defining typography, h1, .h1 for class accessibility on top of html

# eslint & prettier install

`npm i -D babel-eslint eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier`

# .prettierrc in root

```
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false
}
```

# .eslintrc in root UP FOR REVISION & OPINION

```
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "prettier"],
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "prettier/prettier": "warn",
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 2,
    "strict": ["error", "global"],
    "curly": "warn",
    "react/prop-types": "off",
    "no-case-declarations": "off",
    "no-console": "error",
    "quotes": [
      "warn",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "prefer-const": [
      "warn",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "no-var": "warn",
    "comma-spacing": "warn",
    "semi": ["warn", "always"],
    "object-curly-spacing": ["warn", "always"],
    "object-shorthand": "warn",
    "quote-props": ["warn", "as-needed"]
  }
}
```

# Add scripts to package.json

```
"eslint": "eslint --fix-dry-run src --ext jsx,js",
"eslintfix": "eslint --fix src --ext jsx,js",
```

############

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) (v2.1) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
