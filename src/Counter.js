import React, { Component } from 'react';

class Counter extends Component {
  /*
   이는 컴포넌트의 생성자 메서드인데, 클래스형 컴포넌트에서 constructor 작성할때는
   반드시 super(props)를 호출 호출 해야한다. 이 함수가 호출되면 현재 클래스 형 컴포넌트가 상속 받고 있는 리액트이 Component클래스가 지닌 생성자를 함수를 호출한다.
  
  constructor(props) {
    super(props);
    // state에 초기값 설정하기
    this.state = {
      number: 0,
    };
  }
  */
  // 위 처럼 안하고,
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회를 한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2> 바뀌지 않는 값: {fixedNumber} </h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출 되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
