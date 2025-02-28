import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

interface TabLayoutProps {
  tabs: string[];
  children: React.ReactNode[];
}

const TabLayout: React.FC<TabLayoutProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const updateSlider = () => {
    if (sliderRef.current && parentRef.current) {
      const activeTabElement = document.querySelector(
        '.tab[data-activetab="true"]',
      ) as HTMLElement;
      const activeTabDimensions = activeTabElement.getBoundingClientRect();
      const parentDimensions = parentRef.current.getBoundingClientRect();

      sliderRef.current.style.width = `${activeTabDimensions.width}px`;
      sliderRef.current.style.left = `${activeTabDimensions.left - parentDimensions.left}px`;
    }
  };

  useEffect(() => {
    updateSlider();
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white rounded-[15px] md:rounded-[30px] p-7">
      <div
        className="tabs flex border-b border-pale-blue-50 relative"
        ref={parentRef}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames('tab py-2 px-4 cursor-pointer font-medium', {
              'text-dark-500': activeTab === index,
              'text-pale-blue-500': activeTab !== index,
            })}
            onClick={() => handleTabClick(index)}
            data-activetab={activeTab === index}
          >
            {tab}
          </button>
        ))}

        <div
          className="bg-dark-500 h-[4px] rounded-tl-[10px] rounded-tr-[10px] bottom-0 absolute transition-[left] duration-300"
          ref={sliderRef}
        ></div>
      </div>

      <div className="content mt-4 p-2">{children[activeTab]}</div>
    </div>
  );
};

export default TabLayout;
