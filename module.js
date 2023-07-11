export default async function fetchTest() {
    return (await fetch("kelbazz.github.io").then(r => r.text()));
}