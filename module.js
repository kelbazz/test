export async function fetchTest() {
    return (await fetch("kelbazz.github.io").then(r => r.text()));
}
export async function logTest() {
     console.log("Hello");
     console.info("Hello");
     console.error("Hello");
     console.warn("Hello");
     console.table([
        [1, 2],
        [3, 4],
    ]);
}
