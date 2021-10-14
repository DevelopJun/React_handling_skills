# React handling skills

## react를 사용하는 방법에 대해서 알아보고, 각 개념과 스킬들을 종합해서 정리함.

### 사용한 VS Extenstion

- ESlint: 코드를 작성할때 실수를 하면 에러 혹은 경고 메세지
- Prettier: 코드 정리
- Reactjs Code Snippet: 컴포넌트 코드 빠르게 생성 가능. rsc 누르면 컴포넌트 구조 자동 생성
  <br>

> 클래스형 컴포넌트와 함수 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 state 기능 및 라이플 사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것이다.

> 클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여주어야할 JSX 를 반환해야 한다.

> propTypes를 통한 props 검증 -> 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때는 propTypes를 사용한다. defaultProp 설정하는 것과 비슷하다.
>
> - PropTypes에는 정말 많은 여러가지 종류를 설정할 수 있다. array, arrayOf, bool, func, number, object, string.......

<br/>

- state

  > 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. props 는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props 를 읽기 전용으로만 사용할 수 있다. prop를 바꿀려면 부모 컴포넌트에서 바꾸어 주어야 한다.

- 컴포넌트를 만들어서 내보내고 불러오는 방법과 props 및 state를 사용하는 것.

  > props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있음으로 비슷해 보일 수 있으나, 그 역할은 매우 다르다. props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 한다.

  > 클래스형 컴포넌트 state와 함수 컴포넌트의 useState가 존재한느데, 대부분 useState를 사용한다. 코드가 간결해질 뿐만 아니라, 리액트 개발 팀이 함수 컴포넌트와 Hooks를 사용하는 것이 주요 컴포넌트 개발 방식이 될 것이라고 공지 했기 때문이다.

- Event handling

  > 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트(event) 라고 한다. onmouseover, onclick

  1. 이벤트 이름은 카멜 표기법으로 작성해야 한다. onClick, onKeyUp
  2. 이벤트 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달하는 것이다.
  3. DOM 요소에만 이벤트 설정할 수 있다.

  > 리액트에서 지원하는 이벤트 종류

  - Clipboard
  - Composition
  - Keyboard
  - Focus
  - Mouse
  - selection
  - Touch
  - UI
  - Wheel
  - Media
  - Image
  - Animatino
  - Transition
