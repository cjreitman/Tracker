import React from 'react';

const Suggestions = (props) => {
  if ( props && props.props) {
    console.log(props.props)
    const options = props.props.map(food => (
      <li key={food.fdcId}>
        {food.description}
      </li>
    ))
    return <ul>{options}</ul>
  } else {
    return [];
  }
}

export default Suggestions