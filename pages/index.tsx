import React, { useRef } from 'react';
import c from './index.module.less';

let idx = 0;
let speed = 1;
const runner = ({ node, ok }: { node: any; ok?: () => void }) => {
  if (!node) {
    return;
  }
  const callback = () => {
    if (idx >= 10) {
      ok?.();
      return;
    }
    node.style.left = node.offsetLeft + 10 + 'px';
    node.style.top = node.offsetTop + speed + 'px';
    speed += 2;
    idx++;
    requestAnimationFrame(callback);
  };
  requestAnimationFrame(callback);
};
const IndexHome = () => {
  const itemRef = useRef<any>();
  // 启动
  const onStart = () => {
    runner({
      node: itemRef.current,
    });
  };
  return (
    <div>
      <a onClick={onStart}>开始</a>
      <div className={c.container}>
        <div className={c.runer} ref={itemRef} />
      </div>
    </div>
  );
};
export default IndexHome;
