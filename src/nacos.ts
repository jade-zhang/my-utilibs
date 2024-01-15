/*
 * @Author: liujj
 * @Date: 2024-01-15 11:22:37
 * @LastEditors: liujj
 * @LastEditTime: 2024-01-15 15:01:51
 * @Description: 
 */
import axios from 'axios';

class NacosConfigClient {
    private serverAddress?: string;
    private namespace?: string;

    constructor(serverAddress?: string, namespace?: string) {
        this.serverAddress = serverAddress;
        this.namespace = namespace;
    }

    async getConfig(dataId: string, group: string, namespace: string) {
        const configUrl = `${this.serverAddress}/nacos/v1/cs/configs`;

        const url = `${configUrl}?dataId=${dataId}&group=${group}&tenant=${namespace}`;
        try {
            const response = await axios.get(url);
            return response.data;
            // return [];
        } catch (error) {
            console.error('Failed to get config:', error);
            throw error;
        }
    }
}

export default NacosConfigClient