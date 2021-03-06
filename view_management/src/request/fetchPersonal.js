import { basePath } from "../../config/globalValues";

const baseUrl = '/api/personal/';

// Json格式传参
// export const fetchUserLogin = (username, password) => fetch(baseUrl + 'user_login', {
//     method: "POST",
//     body: JSON.stringify({
//         username: username,
//         password: password
//     }),
//     mode: "cors",
//     credentials: 'include',
// }).then(function (response) {
//     return response.json()
// });

// 登录（from-data 格式传参）
export const fetchUserLogin = (username, password) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch(baseUrl + 'user_login', {
        method: "POST",
        body: formData,
        mode: "cors",
        credentials: 'include',
    }).then(function (response) {
        return response.json()
    });
};

// 获取用户名
export const fetchGetUsername = (token) => fetch(baseUrl + 'get_username', {
    headers: {"Token": token},
    method: "POST",
    body: JSON.stringify({"token":token}),
    mode: "cors",
    credentials: 'include',
}).then(function (response) {
    return response.json()
});

// 退出
export const fetchUserLogout = (token) => fetch(baseUrl + 'user_logout', {
    headers: { "Token": token },
    method: "POST",
    body: JSON.stringify({ "token": token }),
    mode: "cors",
    credentials: 'include',
}).then(function (response) {
    return response.json()
});