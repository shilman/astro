import { storiesOf } from '@storybook/web-components'
import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const Default = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?secondary="${args.secondary}"
                .size="${args.size}"
                .icon="${args.icon}"
                .onClick="${args.onClick}"
            >
                Button update
            </rux-button>
        </div>
    `
}

storiesOf('Examples/Button3', module).add('Default', Default)
