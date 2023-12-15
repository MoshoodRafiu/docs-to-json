export interface Framework {
    name: string;
    versions: FrameworkVersion[];
}

export interface FrameworkVersion {
    name: string;
    url: string;
}

export interface initAppPrompt {
    framework: string;
    version: string;
}