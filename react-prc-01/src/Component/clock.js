import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()

    };

    setInterval(()=>{
      this.setState({
        date: new Date()
      });
    },1000);
  }

  loadCssFunc = ()=>{
      return {
          color:'red',
          fontSize:12
      }
  }

  render() {
    var date = this.state.date;
    var self = this;
    const style = {
      color: 'blue',
      fontSize:16
    };
    return (
      // <div style="background-color:red;">
      <div style={style}>
        {date.toLocaleDateString()}
        <br/>
        {date.getMonth()}:{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </div>
    );
  }
}

export default Clock;
