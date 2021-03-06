import axiosFetch from "./axios";

export function getItems() {
    return axiosFetch({
        method: 'GET'
    })
}

/* Данный файл можно использовать для конфигурирования запросов к разным эндпоинтам,
 которые относится к приложению в целом (регистрация, авторизация, аутентификация и т.д.*/