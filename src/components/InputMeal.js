import React from 'react';

function InputMeal({ onSendMeal, printMeals }) {

  return (
    <div>
      <h2>Today you should eat this</h2>
      <form onSubmit={onSendMeal}>
        <input name="name" type="text" />
        <textarea name="description" type="text" />
        <input name="image" type="text" />
        <button type="submit">Add meal</button>
      </form>
      <ul>
        {printMeals()}
      </ul>
    </div>
  );
}

export default InputMeal;
