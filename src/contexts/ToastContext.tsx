import { IToastMessage } from '@/types/toast-message';
import React, { createContext, useContext, useState } from 'react';

interface ToastContextData {
  messages: IToastMessage[];
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

interface IToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const ToastProvider = ({ children }: IToastProviderProps) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = (message: Omit<IToastMessage, 'id'>) => {
    const id = new Date().getTime().toString();

    const toast = {
      id,
      ...message,
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  };

  const removeToast = (id: string) => {
    setMessages((oldMessages) => oldMessages.filter((message) => message.id !== id));
  };

  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }
  return context;
};
