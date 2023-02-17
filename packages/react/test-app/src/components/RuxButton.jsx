import { useState } from 'react'
import { RuxButton } from '../../../src'

export const Button = () => {
    const [ dis, setDis ] = useState(false)
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <RuxButton data-testid="reg">Button!</RuxButton>
            <br />
            <RuxButton icon="apps" data-testid="w-icon-prop">With Icon Prop</RuxButton>
            <br />
            <RuxButton disabled={true} data-testid="disabled">Disabled</RuxButton>
            <br />
            <h4>Toggle Disabled</h4>
            <RuxButton disabled={dis} data-testid="dis-test">Can I be clicked?</RuxButton>
            <RuxButton onClick={() => setDis(!dis)} data-testid="toggle">Toggle Disabled above</RuxButton>
        </div>
    )
}