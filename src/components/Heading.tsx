import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

export { Heading };
