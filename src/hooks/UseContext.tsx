import React, { createContext, useContext, useState } from 'react';

interface Data {
  data: string | null;
}

const Context = createContext<Data | undefined>(undefined);

const UseContext = () => {

  const [data] = useState<Data>({ data: "I'm the Data from the Parent!" });

  return (
    <Context.Provider value={data}>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </Context.Provider>
  );
};

function One() {
  return (
    <div>One</div>
  );
}

function Two() {
  const context = useContext(Context);

  if (!context) {
    return <div>No context available</div>;
  }

  return (
    <div>Two: {context.data}</div>
  );
}

function Three() {
  return (
    <div>Three</div>
  );
}

function Four() {
  return (
    <div>Four</div>
  );
}

function Five() {
  const context = useContext(Context);

  if (!context) {
    return <div>No data available...</div>;
  }

  return (
    <div>Five: {context.data}</div>
  );
}

export default UseContext;
