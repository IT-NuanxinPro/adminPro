import { defineStore } from 'pinia';
import pinia from '@/store';
import { userLogin, refreshUserInfo } from '@/api/user';
import { IUserState } from './type';

export const useUserStoreHook = defineStore('userInfo', {
    state: (): IUserState => ({
        username: '暖心',
        accessToken: '',
        roles: ['common']
    }),
    getters: {},
    actions: {
        storeUserLogin(data) {
            return userLogin(data).then((res) => {
                this.username = res.username;
                this.accessToken = res.accessToken;
                this.roles = res.roles;
            });
        },
        storeRefreshUserInfo() {
            if (this.username == '暖心' && this.accessToken != '') {
                refreshUserInfo({
                    accessToken: this.accessToken
                })
                    .then((res) => {
                        this.username = res.username;
                        this.roles = res.roles;
                        this.accessToken = res.accessToken;
                    })
                    .catch(() => {
                        this.accessToken = '';
                    });
            }
        }
    },
    persist: {
        key: 'userInfo',
        storage: sessionStorage,
        paths: ['accessToken']
    }
});

export function useUserStore() {
    return useUserStoreHook(pinia);
}
