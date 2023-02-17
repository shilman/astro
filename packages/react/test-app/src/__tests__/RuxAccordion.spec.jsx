import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen, within } from 'testing-library__dom'
import { Accordion } from '../components/RuxAccordion';
import userEvent from '@testing-library/user-event'

describe('RuxAccordion', () => {
    it('should be rendered by react', () => {
        render(<Accordion />)

        const acc = document.querySelector('rux-accordion')
        const accI = document.querySelector('rux-accordion-item')

        expect(acc).toBeInTheDocument()
        expect(accI).toBeInTheDocument()
    })
    it('should correctly handle boolean props', async () => {
        render(<Accordion />)

        const acc = screen.getByTestId('disabled')
        expect(acc).not.toHaveAttribute('disabled')
        const btn = screen.getByTestId('toggle')
        await userEvent.click(btn)
        expect(acc).toHaveAttribute('disabled')
    })
    it('should fire custom ruxexpanded event', async () => {
        const logSpy = jest.spyOn(console, 'log');
        const accI = screen.getByTestId('item-default')
        expect(accI).not.toHaveAttribute('expanded')
        await userEvent.click(accI)
        expect(accI).toHaveAttribute('expanded')
        expect(logSpy).toBeCalledWith('ruxexpanded emit')
    })
})