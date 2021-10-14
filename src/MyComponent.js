// 함수형 ///
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // 위처럼 함수 파라미터가 현재 객체이기 때문에, 그 값을 바로 비구조화 해서 이렇게 사용도 가능하다
//   //   const { name, children } = props; // 이렇게 객체에서 사용한 값을 추출하는 문법을 비구조화 할당(destructuring assignment)이라고 부른다.
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       Children 값은 {children} 입니다. <br />
//       가장 좋아하는 숫자는 {favoriteNumber}
//     </div>
//   );
// };

// 클래스 형으로 만들기 //
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        Children 값은 {children} 입니다. <br />
        가장 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// default porps 설정하는 부분
MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

//
