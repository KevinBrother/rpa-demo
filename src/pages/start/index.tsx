import React, { useState } from 'react';
import { Button } from 'antd';

export default function Start() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount(count + 1)}>开始吧{count}</Button>;
}
