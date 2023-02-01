import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd';
import { IfElse } from '@bixi-design/core';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export function getColumns() {
  const columns: ColumnsType<ICategory[]> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'desc',
      dataIndex: 'desc',
      key: 'desc'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          {/*  <Button onClick={() => toNext(record)}>下层菜单</Button>
          <Button onClick={() => edit(record)}>编辑</Button>
          <Button onClick={() => deleteCategory(record)}>删除</Button> */}
        </Space>
      )
    }
  ];
  /* 
    function toNext(record) {
      setCurrentCategory(record);
      addBreadCrumb(record)
    }
  
    function edit(record) {
      setFlag(EFlag.edit)
      setEditCategory(record)
      setIsEditDialogOpen(true);
    }
  
    function deleteCategory(record) {
      console.log('delete');
    }
   */
  return { columns };
}
