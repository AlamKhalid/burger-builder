import { useState } from 'react';
import Burger from "./Burger/Burger";
import BurgerIngredientAdder from './BurgerIngredientAdder/BurgerIngredientAdder';

const INGREDIENT_PRICE = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

const BurgerBuilder = () => {
  const [burgerIngredients, setBurgerIngredients] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  })
  const [price, setPrice] = useState(3);

  const hasIngredients = () => {
    let totalCount = 0;
    Object.keys(burgerIngredients).forEach(b => totalCount += burgerIngredients[b]);
    return totalCount > 0;
  };

  const addIngredient = (ingName) => {
    setBurgerIngredients(prevIngs => ({...prevIngs, [ingName]: prevIngs[ingName] + 1}));
    setPrice(prevPrice => prevPrice + INGREDIENT_PRICE[ingName]);
  }

  const removeIngredient = (ingName) => {
    if(burgerIngredients[ingName] > 0) {
      setBurgerIngredients(prevIngs => ({...prevIngs, [ingName]: prevIngs[ingName] - 1}));
      setPrice(prevPrice => prevPrice - INGREDIENT_PRICE[ingName]);
    }
  }

  return (
    <>
    <Burger burgerIngredients={burgerIngredients} hasIngredients={hasIngredients()} />
    <BurgerIngredientAdder burgerIngredients={burgerIngredients} price={price} hasIngredients={hasIngredients()} addIngredient={addIngredient} removeIngredient={removeIngredient} />
    </>
   );
}

export default BurgerBuilder;
