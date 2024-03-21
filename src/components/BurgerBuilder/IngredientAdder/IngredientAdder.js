import './IngredientAdder.css'

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const IngredientAdder = ({ name, disabled, addIngredient, removeIngredient }) => {
  return ( <div className='adder-row'>
        <h3>{capitalize(name)}</h3>
        <button disabled={disabled} onClick={() => removeIngredient(name)}>Less</button>
        <button className='more-btn' onClick={() => addIngredient(name)}>More</button>
    </div> );
}

export default IngredientAdder;
