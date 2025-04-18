import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPageSelect?: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded border text-sm ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-pink-500 border-pink-500 hover:bg-pink-50"
        }`}
      >
        Prev
      </button>

      <span className="text-gray-600 text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded border text-sm ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-pink-500 border-pink-500 hover:bg-pink-50"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
