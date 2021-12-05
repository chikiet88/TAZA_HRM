export interface User
{
    id: string;
    name: string;
    username: string;
    email: string;
    block: string;
    sendEmail: string;
    registerDate: Date;
    lastvisitDate: Date;
    activation: string;
    params: string;
    groups: string;
    guest: string;
    lastResetTime: string;
    resetCount: string;
    requireReset: string;
    aid: string;
    typeAlias: string;
    Profile: JSON;
    otpKey: string;
    otep: string;
    avatar?: string;
    status?: string;
}