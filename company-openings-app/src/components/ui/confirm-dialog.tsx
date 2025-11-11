import * as Dialog from '@radix-ui/react-dialog';
import { AlertCircle, X } from 'lucide-react';
import React from 'react';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  isLoading?: boolean;
  variant?: 'danger' | 'default';
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  isLoading = false,
  variant = 'default',
}) => {
  const [isConfirming, setIsConfirming] = React.useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    try {
      await onConfirm();
      onOpenChange(false);
    } finally {
      setIsConfirming(false);
    }
  };

  const isDanger = variant === 'danger';
  const headerBg = isDanger ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-amber-600 to-amber-700';

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-200" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] border border-gray-200 overflow-hidden">
          {/* Header with gradient background */}
          <div className={`flex flex-col space-y-2 ${headerBg} p-8 rounded-t-2xl`}>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
              <Dialog.Title className="text-xl font-bold text-white">{title}</Dialog.Title>
            </div>
          </div>

          {/* Content area */}
          <div className="p-8">
            <Dialog.Description className="text-base text-gray-700 leading-relaxed">{description}</Dialog.Description>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-200 p-6 bg-gray-50">
            <button
              onClick={() => onOpenChange(false)}
              disabled={isLoading || isConfirming}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {cancelText}
            </button>
            <button
              onClick={handleConfirm}
              disabled={isLoading || isConfirming}
              className={`px-6 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${variant === 'danger' ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                }`}
            >
              {isLoading || isConfirming ? 'Processing...' : confirmText}
            </button>
          </div>

          {/* Close button */}
          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 z-10 rounded-full p-1 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-400" />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
