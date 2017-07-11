function AuthController() {
    var roles;
    function setRoles(role){
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

    return {
        isAuthorized,
        isAuthorizedAsync,
        setRoles
    };
}

module.exports = AuthController();