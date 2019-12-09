import React from 'react';
import PropTypes from 'prop-types';

/**
 * "안녕하세요"를 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `size` 값을 `big`으로 설정하면 **크게** 나타납니다.
 * - `onHello`와 `onBye` props로 버튼이 클릭됐을 때 호출 할 함수를 지정할 수 있습니다.
 */
const Hello = ({ name, size, onHello, onBye }) => {
  return (
    <div>
      {size === 'big' ? <h1>안녕하세요 {name}!</h1> : <p>안녕하세요 {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.propTypes = {
  /** 보여주고싶은 이름 */
  name: PropTypes.string.isRequired,
  /** 이 값을 'big' 으로 설정하면 h1 태그로 랜더링 됩니다. */
  big: PropTypes.string,
  /** Hello 버튼 누를 때 호출 할 함수 */
  onHello: PropTypes.func,
  /** Bye 버튼 누를 때 호출 할 함수 */
  onBye: PropTypes.func,
};

Hello.defaultProps = {
  big: 'false',
};

export default Hello;
