export const fetchUser = () => {
    const data = {
        data: {
            id: 1,
            email: 'user@user.com',
            password: 'useruser',
            roles: ['ROLE_USER'],
        }
    };


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(data);
            reject('Wrong')
        }, 1)
    });
};


export const login = ({email, password}: { email: any, password: any }) => {
    const data = {
        data: {
            success: {
                user: {
                    id: 1,
                    email: email,
                    password: password,
                    roles: ['ROLE_USER'],
                }
            }
        }
    };


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(data);
            reject('Wrong')
        }, 1)
    });
};

export const logout = () => {
    const data = {
        data: {
            success: {
                user: null
            }
        }
    };


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(data);
            reject('Wrong')
        }, 1)
    });
};