export interface UserApi {
    id : number,
    fullName: string,
    email: string,
    password: string,
    fonction : string,
    createdAt: string,
    updatedAt: string
}

export interface UserApiLogin {
    user: {
        id: number,
        fullName: string,
        email: string,
        fonction : string,
        createdAt: string,
        updatedAt: string
      },
      token: {
        type: string,
        name: null | string,
        token: string,
        abilities: [string],
        lastUsedAt: null | string,
        expiresAt: null | string
      }
    
}
