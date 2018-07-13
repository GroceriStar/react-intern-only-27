import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
  state = {
    meal: {
      name: '',
      description: '',
      image: ''
    },
    meals: []
};

  renderMeals() {
    return _.map(this.state.meals, meal => 
      <div>
        <img src={meal.image} alt="Smiley face" height="42" width="42"></img>
        <li>{meal.name}</li>
        <span>{meal.description}</span>
      </div>
    );
  }

  saveImage(event) {
    this.setState({ meal: { ...this.state.meal, image: event.target.value }});
  }
  saveName(event) {
    this.setState({ meal: { ...this.state.meal, name: event.target.value }});
  }
  saveDescription(event) {
    this.setState({ meal: { ...this.state.meal, description: event.target.value }});
  }

  render() {
    return (
      <div>
        <h2>Today you should eat this</h2>
        <input onChange={e => this.saveName(e)} value={this.state.meal.name} type="text" />
        <textarea onChange={e => this.saveDescription(e)} value={this.state.meal.description} type="text" />
        <input onChange={e => this.saveImage(e)} value={this.state.meal.image} type="text" />
        <button onClick={() =>  this.setState({ meals: [...this.state.meals, this.state.meal] })}>
          Add meal
        </button>
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}

export default MealPlan;
