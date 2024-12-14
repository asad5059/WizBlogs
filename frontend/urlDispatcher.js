import config from './config.json';

class UrlDispatcher {
    constructor() {
        this.baseUrl = config.baseUrl;
        this.endpoints = this.generateEndpoints(config);
    }

    generateEndpoints(config) {
        const endpoints = {};
        
        // Remove baseUrl from config before processing
        const { baseUrl, ...services } = config;

        // Iterate through each service (e.g., blog, user, etc.)
        Object.entries(services).forEach(([serviceName, serviceEndpoints]) => {
            endpoints[serviceName] = {};

            // Iterate through each endpoint in the service
            Object.entries(serviceEndpoints).forEach(([endpointName, details]) => {
                endpoints[serviceName][endpointName] = (params = '') => {
                    return `${this.baseUrl}${details.endPoint}${params}`;
                };
            });
        });

        return endpoints;
    }

    getUrl(service, action, params = '') {
        if (!this.endpoints[service] || !this.endpoints[service][action]) {
            throw new Error(`Invalid endpoint: ${service}.${action}`);
        }
        return this.endpoints[service][action](params);
    }
}

const urlDispatcher = new UrlDispatcher();
export default urlDispatcher; 