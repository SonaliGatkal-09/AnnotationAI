export declare class DashboardService {
    private readonly httpClient;
    private readonly endPoints;
    constructor(componentName: string);
    fetchclassDistributionData: () => Promise<{
        name: string;
        value: number;
    }[]>;
}
