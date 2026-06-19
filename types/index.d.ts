export interface ApiResponse<T> {
    data: T | null;
    error: unknown;
    loading: boolean;
}

export interface BillingHealth {
    status: string,
    tenantId: string
}