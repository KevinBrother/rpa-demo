import { Button, Divider, Select, Tag } from 'antd';
import React, { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { observer } from 'mobx-react';
import { getColumns } from './getColumns';
import { useRootCategory, useTableData, useSelectedTags } from './hooks';
import './index.less';

const { Option } = Select;

export default observer(function CategoryChoose() {
  // 下拉选项数据
  const { rootCategory } = useRootCategory();

  // 默认根类目的第一个参数
  const [currentCategoryId, setCurrentCategoryId] = useState(rootCategory[0]?.id || '');

  // 列定义
  const { columns } = getColumns();

  // 列表
  const { tableData } = useTableData(currentCategoryId);

  // 选项数据
  const { selectedCategory, startSelect, removeSelected } = useSelectedTags(tableData);

  return (
    <PageContainer className="category-choose-container">
      <div className="flex">
        <div>已选： </div>
        <div className="select-tags">
          {selectedCategory.map(({ id, name }, index) => (
            <Tag closable key={index} onClose={() => removeSelected(id)}>
              {name}
            </Tag>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          {/* // TODO 默认选中第一个 */}
          <Select defaultValue={rootCategory[0]?.id || ''} style={{ width: 120 }} onChange={(value: string) => setCurrentCategoryId(value)}>
            {rootCategory.map((item, index) => {
              return (
                <Option key={index} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
          <Button className="ml-20" type="primary" onClick={startSelect}>
            开选
          </Button>
        </div>
        <Divider />
        <Table striped columns={columns} dataSource={tableData} expandable={{ showExpandColumn: false }} rowKey="id" />
      </div>
    </PageContainer>
  );
});
