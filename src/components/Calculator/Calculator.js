import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    //value to be displayed in <Display />
    displayValue: '0',
    //values to be displayed in number <keys />
    numbers: [],
    //values to be displayed in operator <keys />
    operators: [],
    //operator selected for math operation
    selectedOperator: '',
    //stored vslue to use for math operatiion
    storedValue: '',
  }

}
