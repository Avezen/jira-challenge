
export const fetchAdminNavigation = () => {
    const navigationTree = {
        admin: [
            {
                id: 1,
                label: 'Create',
                to: '/create',
                category: true,
            }
        ]
    };


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(navigationTree['admin']);
            reject('Wrong')
        }, 1)
    });
};