import React from 'react';

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => (
  <h1 className="text-4xl font-bold">{children}</h1>
);

export { Title };
