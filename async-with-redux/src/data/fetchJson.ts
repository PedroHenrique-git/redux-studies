export default async function fetchJson<T>(url: string): Promise<T> {
    const request = await fetch(url);
    const json = await request.json();
    return json;
}