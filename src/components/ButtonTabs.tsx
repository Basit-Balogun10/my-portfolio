import React from 'react';

type tabsType = {
    tabs: tabType[]
}

export type tabType = {
    title: string;
    isActive: boolean;
    icon: JSX.Element;
}

const ButtonTabs = ({tabs}: tabsType) => {
  return (
      <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {
                tabs.map((tab, index) => (
                        <li key={index} className="mr-2">
                            <a
                                href="#"
                                className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            >
                                <tab.icon />
                                {tab.title}
                            </a>
                        </li>
                ))
            }
            </ul>
      </div>
  );
}

export default ButtonTabs