import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen, within } from 'testing-library__dom'
import { Button } from '../components/RuxButton';
import userEvent from '@testing-library/user-event'

describe('RuxButton', () => {
    it('should be rendered by react', () => {
        render(<Button />)
        const btn = document.querySelector('rux-button')
        expect(btn).toBeInTheDocument()
    })
    it('should correctly add and remove the disabled prop', async () => {
        render(<Button />)

        const disBtn = screen.getByTestId('dis-test')
        const toggleBtn = screen.getByTestId('toggle')
        expect(disBtn).not.toHaveAttribute('disabled')
        await userEvent.click(toggleBtn)
        expect(disBtn).toHaveAttribute('disabled')
    })

})

