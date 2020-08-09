export interface UserLogin {
    "token": string,
    "authenticated": boolean,
    "internalUserId": number,
    "internalUserUUID": string,
    "type": number,
    "privileges": string
}
