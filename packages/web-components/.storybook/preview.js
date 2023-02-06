import themes from './theme'
import { useEffect, useGlobals } from '@storybook/addons'
import {
    extractArgTypes,
    extractComponentDescription,
    setStencilDocJson,
} from '@astrouxds/storybook-addon-docs-stencil'

import docJson from '../docs.json'
if (docJson) setStencilDocJson(docJson)

export const decorators = [
    (Story, context) => {
        useEffect(() => {
            const { kind, name, parameters, viewMode } = context
            const isInDocs = viewMode === 'docs'
            console.log(`Show Code: ${kind} - ${name} - ${isInDocs}`)
            console.log(context)
        }, [])

        return Story()
    },
]

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setMutationObserver()
        console.log('I am loaded')
    }
}
function setMutationObserver() {
    const node = document.querySelector('#root')
    console.log(node)

    const config = { childList: true, subtree: true }

    const callback = (mutationList) => {
        if (mutationList) {
            console.log('I am a callback')
            console.log(mutationList)
        }
    }

    const observer = new MutationObserver(callback)

    observer.observe(node, config)
}

function addListener() {
    window.document.addEventListener('change', () => {
        console.log('loaded!')
    })
}
addListener()

export const parameters = {
    viewport: {
        disable: true,
    },
    docs: {
        extractArgTypes,
        extractComponentDescription,
        theme: themes.dark,
    },
    backgrounds: {
        grid: {
            disable: true,
        },
        disable: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: { disable: true },
    a11y: {
        element: '#root',
    },
    themes: {
        default: 'Dark Theme',
        list: [
            { name: 'Light Theme', class: 'light-theme', color: '#eceff4' },
            { name: 'Dark Theme', class: 'dark-theme', color: '#192635' },
        ],
    },
    readme: {
        codeTheme: 'duotone-sea',
        theme: {
            // bodyBackgroundColor: '#969896',
            bodyColor: themes.dark.textColor,
            linkColor: 'rgb(77, 172, 255)',
            hrColor: '#3c4c5d',
            // checkedRadioLabelColor: '#4078c0',
            // kbdColor: '#555',
            // kbdBackgroundColor: '#fcfcfc',
            // kbdBorderColor: '#ccc',
            // kbdBottomBorderColor: '#bbb',
            // kbdBoxShadowColor: '#bbb',
            preBackgroundColor: '#141f2c',
            // fontFamily:
            //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            // imgBackgroundColor: '#fff',

            tableTrBackgroundColor: '#182635',
            tableOddTrBackgroundColor: '#141f2c',
            tableTrBorderTopColor: '#3c4c5d',
            tableTdBorderColor: '#3c4c5d',

            codeBackgroundColor: '#060708',
            codeFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',
            preFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',

            // blockquoteBorderLeftColor: '#ddd',
            // h1h2BorderBottomColor: '#ddd',
            // h6Color: '#777',
        },
    },
}
