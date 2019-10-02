export interface Mapping{
    pullRequests: PR[];
    repos: Repo[];
}

export interface Repo{
    status: string;
    repoName: string;
}

export interface PR{
    id: string;
    name: string;
    repoTitle: string;
}