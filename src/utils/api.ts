type HTTP_VERBS = 'POST' | 'GET';

export const apiRequest = async (
    url: string,
    method: HTTP_VERBS = 'GET',
    body?: any,
) => {
    try {
        const options = body ? { method, body } : { method };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`Error came ${e}`);
    }
};
