export interface ApiResponse<T> {
    data: T | null;
    error: unknown;
    loading: boolean;
}