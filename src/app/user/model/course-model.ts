
export interface AppUserAccessResponse {
    notAccessibleApps: UserNotAccessibleApp[];
    accessibleApps: UserAccessibleApp[];
    userID: number;
}

export interface UserNotAccessibleApp {
    applicationId: number;
    name: string;
    description: string;
    isActive: boolean
}

export interface UserAccessibleApp {
    applicationID: number;
    applicationName: string;
    description: string;
    roleID: number;
    roleName: string
}


