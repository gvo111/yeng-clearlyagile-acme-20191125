import * as fetch from "node-fetch"

const createJsonHeaders = function(token) {
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }

    return headers
}

export const jsonGet = async function(url: string, token?: string) {
    const method = "get"
    const headers = createJsonHeaders(token)
    const response = await fetch(url, {method, headers})

    return await response.json()
}

export const jsonPost = async function(url: string, data: any, token?: string) {
    const method = "post"
    const body = JSON.stringify(data)
    const headers = createJsonHeaders(token)

    const response = await fetch(url, {method, headers, body})

    return await response.json()
}
