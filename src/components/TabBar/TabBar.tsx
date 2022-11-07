import React, { FC } from 'react';
import { ITabBar } from '../../types/common';

interface ITabBarProps {
  tabs: ITabBar[];
  activeId: number;
  onClick: (tabId: number) => void;
}

const TabBar: FC<ITabBarProps> = ({ tabs, activeId, onClick }) => {
  const getScaleClass = (id: number): string => {
    return activeId === id
      ? 'tab-bar__item tab-bar__item--active'
      : 'tab-bar__item';
  };

  return (
    <div className="tab-bar">
      <ul className="tab-bar__list">
        {tabs.map((item) => (
          <li key={item.id} className={getScaleClass(item.id)}>
            <button
              onClick={() => onClick(item.id)}
              type="button"
              className="tab-bar__btn"
            >
              {item.name}
            </button>
            <span className="tab-bar__scale" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
