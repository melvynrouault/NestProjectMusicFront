import React, { FunctionComponent, ReactNode } from "react";
import { Fragment } from "react";
import './modal.style.css';

type Props = {
  title: string;
  children?: ReactNode;
  visible?: boolean;
  onClose: () => void;
}

const ModalComponent: FunctionComponent<Props> = (props: Props) => {

  function onClickCloseBtn(): void {
    if (props.onClose) {
      props.onClose();
    }
  }
  
  return (
    <Fragment>
      {
        props.visible &&
        <div className='modalOverlay'>
          <div className='modalContainer'>
            <h1 className='modalTitle'>{ props.title }</h1>
            <p className='modalBody'>
              { props.children }
            </p>
            <button className='modalCloseBtn' onClick={ onClickCloseBtn }>Close</button>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default ModalComponent;