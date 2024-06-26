import { jwtDecode } from "jwt-decode";

const checkToken = (token) => {
    try {
        if (token) {
            const { exp } = jwtDecode(token);
            // console.log("token", token);
            // console.log("exp", exp);
            // console.log("data", data);

            const dateNow = Math.floor(Date.now() / 1000);
            // console.log("dateNow", dateNow);
            if (dateNow >= exp) {
                // console.log("Token has expired");
                return null;
            } else {
                // console.log("Token is valid!");
                return token;
            }
        }
    } catch (error) {
        console.log("token error");
    }
    return null;
}

export {
    checkToken,
}