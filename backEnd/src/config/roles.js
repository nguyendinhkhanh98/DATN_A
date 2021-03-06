const allRoles = {
    user: [],
    admin: ['getUser', 'manageUsers'],
};

const roles = Object.keys(allRoles);

// return array[key, value]
const roleRights = new Map(Object.entries(allRoles));

module.export = {
    roles,
    roleRights,
}