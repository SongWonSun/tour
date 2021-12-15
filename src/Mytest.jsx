import React, {Component} from 'react';
class Mytest extends Component{
  constructor(props) {
    super(props);
    console.log('in constructor');
    }
    state = {
      myAge : 0,
    };
    plus = () => {
      this.setState(stateValue => ({
        myAge :stateValue.myAge +1,
      })
    );
  };
    minus = () => {
      this.setState(stateValue => ({
        myAge: stateValue.myAge-1,
      })
    );
  }
  componentDidUpdate(){
    console.log('in componentDidUpdate');
    alert('정보가 업데이트되었습니다.');
  }

  render(){
   return (
     <div>
        <input type="button" value="plus" onClick= {this.plus}></input>
        <input type="button" value="minus" onClick= {this.minus}></input>
        <p>My Age is: {this.state.myAge}</p>
     </div>
   );
 }
}
export default Mytest;
