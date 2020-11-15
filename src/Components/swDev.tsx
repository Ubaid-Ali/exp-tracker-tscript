
export default function swDev() {

    let swDev = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swDev)
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('error', error);
        })
}
