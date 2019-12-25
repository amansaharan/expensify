import React, { Component } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY HH:mm:ss'));

export default class ExpenseForm extends Component {
  state = {
    description: '',
    createdAt: moment(),
    calenderFocused: false
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>

        <form action="">
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="number" placeholder="Amount" />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={date => this.setState({ createdAt: date })}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
          />
          <textarea placeholder="Add a note for your text (optional)"></textarea>
        </form>
      </div>
    );
  }
}
