import IngredientAdder from '../IngredientAdder/IngredientAdder';
import './BurgerIngredientAdder.css';



const BurgerIngredientAdder = ({ burgerIngredients, price, hasIngredients, addIngredient, removeIngredient}) => {
  return (
    <div className="adder-div">
      <div>Current price: <strong>${price.toFixed(2)}</strong></div>
      {Object.keys(burgerIngredients).map(ingredient => <IngredientAdder key={ingredient} name={ingredient} disabled={burgerIngredients[ingredient] === 0} addIngredient={addIngredient} removeIngredient={removeIngredient} />)}
      <button className='sign-up-btn' disabled={!hasIngredients}>SIGN UP TO ORDER</button>
    </div>
   );
}

export default BurgerIngredientAdder;
