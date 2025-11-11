import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React from 'react';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  description?: string;
}

export const Modal: React.FC<ModalProps> = ({ open, onOpenChange, title, children, description }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-200" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] border border-gray-200">
          {/* Header with gradient background */}
          <div className="flex flex-col space-y-2 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-t-2xl">
            <Dialog.Title className="text-2xl font-bold text-white">{title}</Dialog.Title>
            {description && <Dialog.Description className="text-sm text-blue-100">{description}</Dialog.Description>}
          </div>

          {/* Content area */}
          <div className="overflow-y-auto max-h-[calc(100vh-300px)] p-8">{children}</div>

          {/* Close button */}
          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 z-10 rounded-full p-1 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-white" />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
