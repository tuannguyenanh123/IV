import { useQuery } from '@tanstack/react-query';
import { API_URL } from 'src/constants/common';
import { request } from 'src/utils/request';

export const getBanks = () => request.get(API_URL + '/v1/transactions/banks');

// Query
export const useQueryGetBanks = (options = {}) => useQuery({ queryKey: ['getBanks'], queryFn: () => getBanks(), ...options });
