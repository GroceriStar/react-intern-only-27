import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
      meals: []
    };

  }

  renderMeals() {
    return _.map(this.state.meals, meal =>
      <div>
        <img src={meal.image} alt="Smiley face" height="42" width="42"></img>
        <li>{meal.name}</li>
        <span>{meal.description}</span>
      </div>
    );
  }

  saveMeal(event) {
    event.preventDefault();
    const launch = {
      name: event.target.name.value || '', 
      image: event.target.image.value || '',
      description: event.target.description.value || '' 
    }
    this.setState({ meal: launch });
    this.setState({ prueba: 'ADIOS' });
    this.setState({ meals: [...this.state.meals, launch] });
  }

  render() {
    return (
      <div>
        <h2>Today you should eat this</h2>
        <form onSubmit={e => this.saveMeal(e)}>
          <input name="name" type="text" />
          <textarea name="description" type="text" />
          <input name="image" type="text" />
          <button type="submit">Add meal</button>
        </form>
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}

export default MealPlan;
