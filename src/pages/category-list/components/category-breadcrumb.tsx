import React, { useState } from 'react';
import { IfElse } from '@bixi-design/core';
import { Breadcrumb } from 'antd';
import { cloneDeep } from 'lodash-es';
import { defaultCategory } from '..';

export function useBreadcrumb() {
  /* 
    // TODO 2022年10月1日 18:37:25 为什么用immer会报mobx的错？？
    const [breadCrumbs, setBreadCrumbs] = useImmer<ICategory[]>([]);
    function addBreadCrumb(category: ICategory) {
      setBreadCrumbs(draft => {
        draft.push(category);
      })
    }
    function handleClick(category: ICategory, index: number) {
      setCategoryId(category.pId);
      setBreadCrumbs((draft, index) => {
        draft.splice(index);
      });
    }
   */

  const [breadCrumbs, setBreadCrumbs] = useState<ICategory[]>([]);

  function addBreadCrumb(category: ICategory) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.push(category);

    setBreadCrumbs(_breadCrumbs);
  }

  return { breadCrumbs, addBreadCrumb };
}

export function CategoryBreadcrumb({ breadCrumbs, setCurrentCategory, setBreadCrumbs }) {
  function chooseBreadCrumb(category: ICategory, index: number) {
    if (index === breadCrumbs.length - 1) {
      return;
    }

    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.splice(index + 1);

    if (_breadCrumbs.length === 0) {
      setCurrentCategory({});
    } else {
      console.log('%c [ category ]-52', 'font-size:13px; background:pink; color:#bf2c9f;', category);
      setCurrentCategory(category);
    }
    setBreadCrumbs(_breadCrumbs);
  }

  function chooseHome() {
    setCurrentCategory(defaultCategory);
    setBreadCrumbs([]);
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item className='cursor-pointer' onClick={chooseHome}>
        HOME
      </Breadcrumb.Item>
      {breadCrumbs.map((item, index) => {
        return (
          <IfElse key={index} if={index !== breadCrumbs.length - 1} else={<Breadcrumb.Item key={index + item.name}>{item.name}</Breadcrumb.Item>}>
            <Breadcrumb.Item className='cursor-pointer' key={index} onClick={() => chooseBreadCrumb(item, index)}>
              {item.name}
            </Breadcrumb.Item>
          </IfElse>
        );
      })}
    </Breadcrumb>
  );
}
