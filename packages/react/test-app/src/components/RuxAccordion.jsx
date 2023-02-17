import { RuxAccordion, RuxAccordionItem, RuxButton } from '../../../src'
import { useState, useEffect } from 'react'

export const Accordion = () => {
    const [ dis, setDis ] = useState(false)
    useEffect(() => {
        document.body.addEventListener('ruxexpanded', onEvent);
      }, []);
    
      function onEvent(e) {
        console.log(e.detail, 'ruxexpanded emit');
      }
    return(
        <div style={{padding: "5%", width: "500px"}}>
            <RuxAccordion data-testid="default">
                <RuxAccordionItem data-testid="item-default">
                    <div slot="label">Title 1</div>
                    <p>Content 1</p>
                </RuxAccordionItem>
                <RuxAccordionItem>
                    <div slot="label">Title 2</div>
                    <p>Content 2</p>
                </RuxAccordionItem>
                <RuxAccordionItem>
                    <div slot="label">Title 3</div>
                    <p>Content 3</p>
                </RuxAccordionItem>
            </RuxAccordion>
            <br />
            <RuxAccordion data-testid="disabled" disabled={dis}>
                <RuxAccordionItem>
                    <div slot="label">Title 1</div>
                    <p>Content 1</p>
                </RuxAccordionItem>
                <RuxAccordionItem>
                    <div slot="label">Title 2</div>
                    <p>Content 2</p>
                </RuxAccordionItem>
                <RuxAccordionItem>
                    <div slot="label">Title 3</div>
                    <p>Content 3</p>
                </RuxAccordionItem>
            </RuxAccordion>
            <br />
            <RuxButton onClick={() => setDis(!dis)} data-testid="toggle">Toggle Disabled</RuxButton>
        </div>
    )
}