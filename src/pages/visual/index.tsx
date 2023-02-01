import React, { useEffect } from 'react';
import './index.less';

export default function Visual() {
  useEffect(() => {
    const insertFlag = document.createElement('div');
    insertFlag.classList.add('insert-flag');

    const list = document.querySelector('.list') as HTMLElement;
    let sourceNode; // movingNode
    let targetNode; //

    list.ondragstart = (e) => {
      console.log('%c [ e ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', e);
      // setTimeout 异步 为了解决被拖动的元素样式，会是原来的元素被拖动瞬间的样式
      setTimeout(() => {
        (e.target as Element).classList.add('moving');
      }, 0);
      sourceNode = e.target;
      e.dataTransfer!.effectAllowed = 'move';
    };

    list.ondragover = (e) => {
      e.preventDefault();
    };

    list.ondragenter = (e) => {
      e.preventDefault();
      const target = e.target as Element;
      if (target === list || target === insertFlag) {
        return;
      }

      const children = Array.from(list.children);
      const sourceIndex = children.indexOf(sourceNode);
      if (target === sourceNode) {
        targetNode = sourceNode;
        if (children.includes(insertFlag)) {
          list.removeChild(insertFlag);
        }

        return;
      }

      const targetIndex = children.indexOf(target);
      if (sourceIndex < targetIndex) {
        // 向下移动
        targetNode = target.nextElementSibling;
      } else {
        // 向上移动
        targetNode = target;
      }
      list.insertBefore(insertFlag, targetNode);
    };

    list.ondragend = (e) => {
      (e.target as Element).classList.remove('moving');
      if (sourceNode === targetNode) {
        return;
      }

      list.removeChild(insertFlag);
      list.insertBefore(sourceNode, targetNode);
    };
  }, []);

  return (
    <div className="list">
      <div draggable="true" className="list-item">
        1
      </div>
      <div draggable="true" className="list-item">
        2
      </div>
      <div draggable="true" className="list-item">
        3
      </div>
      <div draggable="true" className="list-item">
        4
      </div>
      <div draggable="true" className="list-item">
        5
      </div>
    </div>
  );
}
