import React, { useRef, useEffect, LegacyRef } from 'react';
import classnames from 'classnames';
import $ from 'jquery';
import './index.less';

interface IRpaMenu {
  text: React.ReactNode;
  key: string;
  onClick: Function;
}
export function RpaMenu({ dataSource, defaultKey }: { dataSource: IRpaMenu[]; defaultKey: string }) {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const lis = menuRef?.current?.querySelectorAll('li')!;
    const liFindIndex = [].findIndex.bind(lis);
    const activeIndex = liFindIndex((item: HTMLElement) => item.className === 'active');

    if (activeIndex > 0) {
      lis[activeIndex - 1].classList.add('active-prev');
    }
  });
  // menuRef.current?.querySelector('li');
  // document.querySelector('li')
  // const liFindIndex = [].findIndex.bind(li)
  // liFindIndex(item => item.className === 'active')
  return (
    <div className='rpa-menu'>
      <ul ref={menuRef}>
        {dataSource.map(({ key, text, onClick }) => (
          <li onClick={() => onClick()} key={key} className={classnames({ active: defaultKey === key })}>
            <div>
              {text} {key}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
