export interface IPagination<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
};
