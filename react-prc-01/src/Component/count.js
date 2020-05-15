import React from 'react';
import '../Css/Count.scss';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // 下面的写法不对
    // this.change = this.change.bind(this);
  }

  change (flag,e) {
   e.preventDefault();
   console.log('this is:', this);
   var c = this.state.count;
   if(flag == 1) {
     c++;
   } else {
     c--;
     if(c <= 0){
       c = 0;
     }
   }
   this.setState(state => ({
     count: c
   }));
 }


  render() {
    var count = this.state.count;
    // var self = this;
    const style = {
      color: 'blue',
      fontSize:16
    };
    return (
      // <div style="background-color:red;">
      /* 两种bind之2 */ 
      <div>
        <p className="is-lower-roman count">{count}</p>
        <button className="button is-light add" onClick={(e) => this.change(1,e)}>
        +
        </button>
        <button className="button is-light minus" onClick={this.change.bind(this,0)}>
        -
        </button>
      </div>
    );
  }
}

export default Count;
