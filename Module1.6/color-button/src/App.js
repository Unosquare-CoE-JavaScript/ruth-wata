import { useState }  from 'react'
import logo from './logo.svg';
import './App.css';

export function replaceColorName(colorName){
  return 'MidnightBlue'
}

function App() {
  const [colorButton, setButtonColor] = useState('red')
  const newColor = colorButton === 'red' ? 'blue' : 'red'
  const [activeCheckBox, setActiveCheckBox] = useState(false)

  function clickHandler () {
    setButtonColor( newColor)
  }

  const checkHandler = (e) => {
    const checked = e.target.checked

    setActiveCheckBox(checked)


  }
  return (
    <div>
      <button
      style={{ backgroundColor: activeCheckBox ? 'gray' : colorButton }} 
      onClick={ clickHandler }
      disabled={activeCheckBox}
      >Change to {  newColor  }</button>

      <input 
        type='checkbox'
        id="enable-button-checkbox"
        onChange={ (e) => setActiveCheckBox(e.target.checked)}
        defaultChecked={activeCheckBox}
      />
    </div>
  );
}

export default App;
