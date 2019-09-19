# L's React Component Template

What's included:

1. [![storybook](https://img.shields.io/badge/storybook-%F0%9F%93%95-red)](https://storybook.js.org/) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://louisgv.ga/lrct)
2. [![typescript](https://img.shields.io/badge/typescript-%E2%9C%A8-blue)](https://www.typescriptlang.org/)
3. [![styled-system](https://img.shields.io/badge/styled--system-%F0%9F%97%B3-lightgrey)](https://github.com/styled-system/styled-system)
4. [![auto-changelog](https://img.shields.io/badge/auto--changelog-%F0%9F%93%9D-blue)](https://github.com/CookPete/auto-changelog)
5. [![styled-components](https://img.shields.io/badge/styled--components-%F0%9F%92%85%20-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Available Scripts

### `start`

Start the storybook server, used for standalone development.

### `watch`

Watch `src` and compile with `babel` and `tsc` to `dist`, used for integration development.

### `dist`

Compile using `babel` and `tsc` into `dist`, ready to be deployed.

### `deploy`

Build storybook static page and deploy it via `gh-pages`.

### `publish`

Bump version and publish `dist` to remote registry.

## Integration Example

```tsx
import { Footer } from 'lrct/dist/components/Footer'

render(<Footer>Hello</Footer>)
```

## Usage with monorepo (lerna)

It should work out of the box