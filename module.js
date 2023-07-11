export default async function fetchTest() {
    console.log("Hello");
    return (await fetch("kelbazz.github.io").then(r => r.text()));
}
