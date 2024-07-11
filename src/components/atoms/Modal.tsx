import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ConfirmButton, CancelButton } from './Button';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #444;
  font-family: inherit;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 3em;
`;

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm, children }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <ModalActions>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;