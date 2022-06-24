import './Burger.css';

const Burger = ({ burgerIngredients, hasIngredients}) => {
    let ingredients = [];
    Object.keys(burgerIngredients).forEach(ing => {
      for(let i=0; i < burgerIngredients[ing]; i++) {
        ingredients.push(<div className={ing}></div>)
      }
    });

    return (
      <div className='burger-component'>
        <div className='burger-top bun'>
          <div className='seed1'></div>
          <div className='seed2'></div>
        </div>
        {hasIngredients ?
          ingredients
         : <h2>No Ingredients Added</h2>}
        <div className='burger-bottom bun'></div>
      </div>
    );
}

export default Burger;
