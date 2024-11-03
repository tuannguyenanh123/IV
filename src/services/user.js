import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from 'src/constants/common';
import { request } from 'src/utils/request';

export const loginWithGoogle = data => request.post(API_URL + '/v1/member/login-google', data);
export const getProfile = () => request.get(API_URL + '/v1/member/profile');
export const register = data => request.post(API_URL + '/v1/member/register', data);
export const login = data => request.post(API_URL + '/v1/member/login', data);
export const addBank = data => request.post(API_URL + '/v1/member/update-bank', data);
export const addWallet = data => request.post(API_URL + '/v1/member/update-wallet', data);
export const changePassword = data => request.post(API_URL + '/v1/member/change-password', data);
export const getMemberAPI = () => request.get(API_URL + '/v1/member-api');

// Mutation
export const useGoogleLoginMutation = () => useMutation({ mutationFn: loginWithGoogle });
export const useRegisterMutation = () => useMutation({ mutationFn: register });
export const useLoginMutation = () => useMutation({ mutationFn: login });
export const useChangePasswordMutation = () => useMutation({ mutationFn: changePassword });
export const useAddBankMutation = () => useMutation({ mutationFn: addBank });
export const useAddWalletMutation = () => useMutation({ mutationFn: addWallet });
export const useGetMemberAPIMutation = () => useMutation({ mutationFn: getMemberAPI });

// Query
export const useQueryUserProfile = (options = {}) => useQuery({ queryKey: ['getUserProfile'], queryFn: () => getProfile(), ...options });
