import React, { Dispatch, SetStateAction, useContext } from 'react';
import Context from '../context/context';

const LoginModal = ({ showModal, setShowModal }:
                 {
                   showModal: boolean,
                   setShowModal: Dispatch<SetStateAction<boolean>>
                 }) => {
  console.log(showModal);
  const { setIsAuth } = useContext(Context);
  const login = () => {
    setIsAuth(true);
    setShowModal(false);
  }
  return (
    <div className={`modal ${showModal && 'd-block'}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button onClick={() => setShowModal(false)}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"/>
          </div>
          <div className="modal-body">
            <p>Login in App</p>
            <input placeholder="input your email" type="email"/>
            <input placeholder="input your password" type="password"/>
          </div>
          <div className="modal-footer">
            <button onClick={() => setShowModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={() => login()} type="button" className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;