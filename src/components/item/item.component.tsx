import React, { FunctionComponent, useEffect, ReactNode } from 'react';
import './item.style.css';

type ItemComponentProps = {
  value: number;
  children?: ReactNode;
}

const ItemComponent: FunctionComponent<ItemComponentProps> = (props: ItemComponentProps) => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Hello World from Item : { props.value }</h1>
    </div>
  );
};

export default ItemComponent;
