import React, { Component } from 'react';

const FreeDays = ({days}) => {
  // console.log(this.props);
  var i = 0;
  const updateC = days.map((day) => {
    if(day != 0) {
      return (
        <li key = {day}>
          {day}
        </li>
      );
    }

  });

  return(
    <ul>
      {updateC}
    </ul>
  );
}


export default FreeDays;
