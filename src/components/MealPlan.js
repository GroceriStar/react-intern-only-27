import React, { Component } from 'react';
import _ from 'lodash';

import InputMeal from  './InputMeal';

class MealPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
      meals: []
    };
    
    this.saveMeal = this.saveMeal.bind(this);
    this.renderMeals = this.renderMeals.bind(this);
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
    this.setState({ meals: [...this.state.meals, launch] });
  }

  render() {
    return (
      <InputMeal 
        onSendMeal={this.saveMeal} 
        printMeals={this.renderMeals}>
      </InputMeal>
    );
  }
}

export default MealPlan;
