function AuthController() {
    var roles;

    function setRoles(role) {
        roles = role;
    }

    function isAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(roles, neededRole, cb) {
        setTimeout(function () {
            cb((isAuthorized(roles, neededRole)))
        }, 3000);
    }

    function isAuthorizedPromise(neededRole, cb) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(roles.indexOf(neededRole) >= 0)
            }, 0)
        });
    }

    return {
        isAuthorized,
        isAuthorizedAsync,
        setRoles,
        isAuthorizedPromise
    };
}

module.exports = AuthController();