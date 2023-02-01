import React from 'react';
import { ReactIcon } from '@/assets';
import { RpaMenu } from '@/components';

export default function RpaListDemo() {
  const data = [
    {
      key: '1',
      text: 'dataIndex',
      onClick: (item) => {
        console.log(item);
      }
    },
    {
      key: '2',
      text: 'nice',
      onClick: (value) => {
        console.log(value);
      }
    },
    {
      key: '3',
      text: 'nice',
      onClick: (value) => {
        console.log(value);
      }
    }
  ];

  return <RpaMenu dataSource={data} defaultKey='2' />;
}
