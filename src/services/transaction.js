import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from 'src/constants/common';
import { request } from 'src/utils/request';

export const getUSDTRate = () => request.get(API_URL + '/v1/usdt');
export const createTransaction = data => request.post(API_URL + '/v1/transactions/create', data);
export const getHistory = params => request.get(API_URL + '/v1/my-transaction-histories', { params });
export const createTransactionVND = data => request.post(API_URL + '/v1/transactions/create-via-qr', data);

// Query
export const useQueryGetUSDTRate = (options = {}) => useQuery({ queryKey: ['getUSDTRate'], queryFn: () => getUSDTRate(), ...options });
export const useQueryGetHistory = (params, options = {}) =>
  useQuery({ queryKey: ['getHistory', params], queryFn: () => getHistory(params), ...options });

// Mutation
export const useCreateTransactionMutation = () => useMutation({ mutationFn: createTransaction });
export const useCreateTransactionVNDMutation = () => useMutation({ mutationFn: createTransactionVND });
