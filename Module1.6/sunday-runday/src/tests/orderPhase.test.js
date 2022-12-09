import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'


test('order phases for happy path', async() =>{
    const user = userEvent.setup()
    // render app

    render(<App/>)

    // add ice cream scoops and topppings
    const vanillaInput = await screen.findByRole('spinbutton', { 
        name: 'Vanilla'
    })

    await user.clear(vanillaInput)
    await user.type(vanillaInput, '1')

    const chocolateInput = await screen.findByRole('spinbutton', {
        name: 'Chocolate'

    })
    await user.clear(chocolateInput)
    await user.type(chocolateInput, '2') // waits till the user inputs 2

    const cherriesCheckbox = await screen.findByRole('checkbox', {
        name: 'Cherries'
    })
    await user.click(cherriesCheckbox)

    // check summary information based on order
    const orderSummaryButton =  screen.getByTole('button', {
        name: /order sundae/i,
    } )
    await user.click(orderSummaryButton)


    const summaryHeading = screen.getByRole('heading', {
        name: 'Order Summary'
    })
    expect(summaryHeading).toBeInTheDocument();


    const scoopsHeading = screen.getByRole("heading", {
        name: 'Scope: $6.00'
    })
    expect(summaryHeading).toBeInTheDocument()

    const toppingsHeading = screen.getByRole('heading', {
        name: 'Toppings: $1.50'
    })
    expect(toppingsHeading).toBeInTheDocument()


    

    // accept terms and conditioons and click button to confirm order
 

    // confirm order number on confirmation pagr


    // click new order button on confirmation page


    // check that scoop and tioppings subtotals have been reset


    // do we need to await anything to avoid errors 
})