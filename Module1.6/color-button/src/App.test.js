import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import {logRoles} from '@testing-library/dom'

test('renders has the correct inital color', () => {
  render(<App/>);

  // find an element with a role of button
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  // expect the background color to be red

  expect(colorButton).toHaveStyle({ background: 'red' })
 
});



test('button turns blue when clicked', () => {
 

  render(<App/>)

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  expect(colorButton).toHaveTextContent('Change to red')
});



test('Initial conditions', () => {
  render(<App/>)


   const colorButton = screen.getByRole('button', {
    name : 'Change to blue'
  })

  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()

})

test('Initial setup', () => {
  render(<App/>)


    // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

})

test('web color gray', () => {

  render(<App/>)


  
const colorButton = screen.getByRole('button')
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray'})


  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

})


test('second flow' , () =>{
  render(<App/>)

  const colorButton = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')

     // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: blue");


})


// describe('changing colors', () =>{

//   test('works for exact word', () =>{
//     expect(replaceColorName('MediumVioletRed')).toBe('MidnightBlue')
//   })
// })
