export function getCookie(name: string) {
    const cookies = `${document.cookie}`.split(`${name}=`);
    if (cookies.length > 1) {
        return cookies[1].split(";")[0];
    }
    return null;
}
