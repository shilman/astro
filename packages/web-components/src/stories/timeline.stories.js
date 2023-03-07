import { Meta, Story, Canvas, ArgsTable } from '@storybook/blocks'
import { html, render } from 'lit-html'
import { styled } from '@storybook/theming'

const StyledDiv = styled.div`
    position: relative;
    margin: 1rem 0;
    border-left: 20px solid var(--color-status-serious);
    background: white;
    color: var(--color-status-serious);
    padding: 19px;
    font-family: var(--font-body-1-bold-font-family);
    font-size: var(--font-body-1-bold-font-size);
    font-weight: var(--font-body-1-bold-font-weight);
    letter-spacing: var(--font-body-1-bold-letter-spacing);
    .banner-text {
        margin-top: 1rem;
        color: var(--color-text-inverse);
    }
`

const BetaTag = styled.div`
    display: inline-block;
    padding: 7px;
    color: var(--color-palette-neutral-1000);
    border-radius: var(--radius-base);
    background: var(--color-palette-teal-300);
    font-family: var(--font-body-2-bold-font-family);
    font-size: var(--font-body-2-bold-font-size);
    font-weight: var(--font-body-2-bold-font-weight);
    letter-spacing: var(--font-body-2-bold-letter-spacing);
`

const Default = (args) => {
    let start = args.start
    let end = args.end
    let position = args.playhead
    if (args.start) {
        start = new Date(args.start).toISOString()
    }
    if (args.end) {
        end = new Date(args.end).toISOString()
    }
    if (args.playhead) {
        position = new Date(args.playhead).toISOString()
    }
    return html`
        <div style="width: 950px; margin: auto">
            <rux-timeline
                timezone="${args.timezone}"
                start="${start}"
                end="${end}"
                playhead="${position}"
                interval="${args.interval}"
                zoom="${args.zoom}"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T01:00:00Z"
                        end="2021-02-01T02:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 2</div>
                    <rux-time-region
                        start="2021-02-01T10:00:00Z"
                        end="2021-02-01T12:00:00Z"
                        status="serious"
                    >
                        Event 2.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 3</div>
                    <rux-time-region
                        start="2021-02-01T00:00:00Z"
                        end="2021-02-02T02:00:00Z"
                        status="standby"
                    >
                        Event 3.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 4</div>
                    <rux-time-region
                        start="2021-02-01T03:00:00Z"
                        end="2021-02-02T04:33:00Z"
                        status="critical"
                    >
                        Event 4.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 5</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="caution"
                    >
                        Event 5.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 6</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 6.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 7</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 7.1
                    </rux-time-region>
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

export default {
    title: 'Beta/Timeline [BETA]',
    component: 'rux-timeline',

    subcomponents: {
        RuxTrack: 'rux-track',
        RuxRuler: 'rux-ruler',
        RuxTimeRegion: 'rux-time-region',
    },

    argTypes: {
        end: {
            name: 'end',
            description:
                'The timeline\'s end date. Must be an ISO string "2021-02-02T05:00:00Z"',

            type: {
                name: 'date',
                required: false,
            },

            control: {
                type: 'date',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: '2021-02-02T00:00:00Z',
                },
            },
        },

        timezone: {
            name: 'timezone',
            description: "The timeline's timezone",

            type: {
                name: 'string',
                required: false,
            },

            control: {
                type: 'text',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: "'UTC'",
                },
            },

            options: [null],
        },

        interval: {
            name: 'interval',
            description: "The timeline's date time interval",

            type: {
                name: '"day" | "hour"',
                required: false,
            },

            control: {
                type: 'radio',
            },

            table: {
                category: 'props',

                type: {
                    summary: '"day" | "hour"',
                },

                defaultValue: {
                    summary: "'hour'",
                },
            },

            options: ['day', 'hour'],
        },

        playhead: {
            name: 'playhead',
            description:
                'The timeline\'s playhead date time. Must be an ISO string "2021-02-02T05:00:00Z"',

            type: {
                name: 'date | undefined',
                required: false,
            },

            control: {
                type: 'date',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'date | undefined',
                },

                defaultValue: {
                    summary: '2021-02-01T10:00:00Z',
                },
            },

            options: [null],
        },

        start: {
            name: 'start',
            description:
                'The timeline\'s start date. Must be an ISO string "2021-02-02T05:00:00Z"',

            type: {
                name: 'string',
                required: false,
            },

            control: {
                type: 'date',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: '2021-02-01T00:00:00Z',
                },
            },

            options: [null],
        },

        zoom: {
            name: 'zoom',
            description: "The timeline's zoom level.",

            type: {
                name: 'number',
                required: false,
            },

            control: {
                type: 'number',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'number',
                },

                defaultValue: {
                    summary: '1',
                },
            },

            options: [null],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        zoom: 2,
        interval: 'hour',
        start: '2021-02-01T00:00:00Z',
        end: '2021-02-03T00:00:00Z',
        playhead: '2021-02-01T04:00:00Z',
        timezone: 'America/New_York',
    },
}

export const Track = {
    render: () => '',
    name: 'Track',
}
