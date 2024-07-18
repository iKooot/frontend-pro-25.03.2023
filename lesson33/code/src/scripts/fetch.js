export async function foo() {
  try {
    const resp = await fetch("http://example.com/api/users");

    if (!resp.ok) throw new Error('Ups something went wrong...')

    const data = await resp.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}
