import React, { useState } from 'react';

const Say = () => {
  const [message, setmessage] = useState(''); // useState 안에는 초기값을 넣어주는거고, 객체 형태 뿐만 아니라, 문자열,배열, 숫자 노상관,
  const onclickEnter = () => setmessage('안녕하세요!');
  const onclickLeaver = () => setmessage('안녕히 가세요');

  const [color, setcolor] = useState('black');

  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickLeaver}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setcolor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setcolor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setcolor('blue')}>
        파란색
      </button>
    </div>
  );
};
export default Say;
