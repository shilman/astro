import { Watch, Element, Prop, State, Component, Host, h } from '@stencil/core'
import { getDayOfYear } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import { militaryTimezones } from '../rux-clock/military-timezones'
import { MilitaryTimezone } from '../rux-clock/rux-clock.model'
import { hasSlot } from '../../utils/utils'

@Component({
    tag: 'rux-timestamp',
    styleUrl: 'rux-timestamp.scss',
    shadow: true,
})
export class RuxTimestamp {
    @Element() el!: HTMLRuxTimestampElement

    private _timezone: string = 'UTC'
    @State() hasLabel: boolean = false
    /**
     * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    @Prop() timezone: string = 'UTC'

    @Prop() time?: string = '1670943978395'

    /**
     * Applies a smaller clock style.
     */
    @Prop({ reflect: true }) small: boolean = false

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }
    private _formatLosAosDateIn(dateTime: string | number): string {
        // Check for unix timestamp
        if (new Date(Number(dateTime)).getTime() > 0) {
            dateTime = Number(dateTime)
        }
        return format(utcToZonedTime(dateTime, this._timezone), 'HH:mm:ss')
    }

    private _handleSlotChange() {
        this.hasLabel = hasSlot(this.el, 'label')
    }

    render() {
        let newValue = Date.now()
        return (
            <Host>
                <div class="rux-clock" part="container">
                    <div class="rux-clock__segment">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__time-label"
                            part="time"
                        >
                            <slot></slot>
                        </div>
                        <div
                            class={{
                                'rux-clock__segment__label': true,
                                hidden: !this.hasLabel,
                            }}
                            id="rux-clock__time-label"
                            part="time-label"
                        >
                            <slot
                                name="label"
                                onSlotchange={this._handleSlotChange}
                            ></slot>
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
