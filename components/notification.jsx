import { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    // Define um timer para fechar a notificação após 3 segundos
    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    // Limpa o timer se o componente for desmontado antes do tempo
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-9 py-6 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
