// WebProject1Overlay.jsx
export function WebProject1Overlay({ isOpen, onClose }) {
    return (
      <>
        {isOpen ? (
          <div className="overlay">
            <div className="overlay_background" onClick={onClose} />
            <div className="overlay_container">
              <div className="overlay_controls">
                <button className="overlay_close" type="button" onClick={onClose}>
                  X
                </button>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold">Web Project 1</h2>
                <p>Details about Web Project 1.</p>
                {/* Add more content here as needed */}
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  