import React, { PureComponent } from 'react';
import circle from './circles';
import buttons from './buttons';
import Ball from './Ball';

class App extends PureComponent {
  state = {
    newCircle: circle,
  };

  getRandomValue = () => {
    return Math.floor(Math.random() * 256).toString(16);
  };

  getRandomColor = () => {
    return `#${this.getRandomValue()}${this.getRandomValue()}${this.getRandomValue()}`;
  };

  handleClick = (circleNumber, animation) => () => {
    this.setState({
      newCircle: this.state.newCircle.map((el) => {
        if (el.id === circleNumber) {
          if (animation === 'color') {
            return {
              ...el,
              color: this.getRandomColor(),
            };
          }
          return {
            ...el,
            animation: animation,
          };
        }
        return {
          ...el,
          animation: '',
        };
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          {buttons.map((el) => {
            return (
              <button
                key={el.id}
                onClick={this.handleClick(el.circleNumber, el.animation)}
              >
                {el.animation}
              </button>
            );
          })}
        </div>
        {this.state.newCircle.map((el) => {
          return <Ball key={el.id} animation={el.animation} color={el.color} />;
        })}
      </div>
    );
  }
}

export default App;
