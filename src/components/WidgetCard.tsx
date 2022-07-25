import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type WidgetCardProps = {
  icon: IconDefinition;
  children: React.ReactNode;
};

const WidgetCard: React.FC<WidgetCardProps> = ({ icon, children }) => (
  <div className="flex flex-row items-center gap-4 p-4 text-black bg-white rounded-xl">
    <FontAwesomeIcon icon={icon} className="h-5" />
    <div className="flex flex-col">{children}</div>
  </div>
);

export { WidgetCard };
