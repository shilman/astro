import themes from './theme'
import { addons } from '@storybook/addons'

addons.setConfig({
    enableShortcuts: false,
    panelPosition: 'right',
    selectedPanel: 'REACT_STORYBOOK/readme/panel',
    theme: themes.dark,
})
