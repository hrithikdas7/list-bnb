import { useState, useEffect } from "react";

export interface PaginationResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export function usePagination<T>(items: T[], itemsPerPage: number): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 if items change
  }, [items]);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setPage: setCurrentPage,
  };
}
