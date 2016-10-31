import React from 'react';

class HomeScene extends React.Component {
  render({ name, style }) {
    return (
      <Text style={style}>Hello {name}!</Text>
    );
  }
}
