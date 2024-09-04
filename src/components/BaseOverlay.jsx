// BaseOverlay.jsx
export function BaseOverlay({ isOpen, onClose, children }) {
  if (!isOpen) return null;  // Don't render anything if the overlay is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg relative shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* This is where the child (unique) content will be inserted */}
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}
