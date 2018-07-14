import React, { Component } from 'react';
import _ from 'lodash';

import recipes from '../data/Recipes';
import InputMeal from './InputMeal';

class MealPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
      meals: [],
      showAddMealMessage: false
    };

    this.saveMeal = this.saveMeal.bind(this);
    this.renderMeals = this.renderMeals.bind(this);
  }

  renderMeals() {
    return _.map(this.state.meals, meal =>
      <li>
        <h5>{meal.name}</h5>
        <img src={meal.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'} alt="Meal Image" height="42" width="42"></img>
        <p>{meal.description}</p>
      </li>
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

  componentWillMount() {
    this.setState({ meals: recipes });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.meals.length < this.state.meals.length) {
      this.setState({showAddMealMessage: true});
      setTimeout(() => this.setState({showAddMealMessage: false}), 1000);
    }
  }

  render() {
    return (
      <InputMeal
        onSendMeal={this.saveMeal}
        printMeals={this.renderMeals}
        showAddMealMessage={this.state.showAddMealMessage}>
      </InputMeal>
    );
  }
}

export default MealPlan;
