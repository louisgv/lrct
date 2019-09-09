import { configure, addDecorator } from '@storybook/react'
import { withThemes } from 'storybook-styled-components'

import { theme } from '../src/styles'

addDecorator(withThemes({
  'default' : theme
}))

const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}
configure(loadStories, module)
