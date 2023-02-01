import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { mock, Random } from 'mockjs';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

/* var mockData = mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'key|+1': 1,
    name: mock('@name'),
    address: mock('@city')
  }]
}) */
const mockData = mock({
  'list|1-10': [
    {
      key: '@increment(1)',
      age: '@integer(20, 70)',
      name: '@ctitle',
      address: '@cparagraph',
      add_time: '@date(yyyy-MM-dd hh:mm:ss)'
    }
  ]
});

console.log('%c [ mockData ]-51', 'font-size:13px; background:pink; color:#bf2c9f;', mockData);

export default function MenuList() {
  return <Table columns={columns} dataSource={mockData.list} />;
}
