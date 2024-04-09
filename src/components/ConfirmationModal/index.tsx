// src/components/ConfirmationModal.tsx
import React from 'react';
import { Modal } from '@/components/Modal';


interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, content }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} onConfirm={onConfirm}>
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmationModal;
