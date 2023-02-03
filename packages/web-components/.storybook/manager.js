import themes from './theme'
import { addons } from '@storybook/addons'
import getClicks from './tagmanager'
getClicks()

addons.setConfig({
    panelPosition: 'right',
    selectedPanel: 'REACT_STORYBOOK/readme/panel',
    theme: themes.dark,
})
