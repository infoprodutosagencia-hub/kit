const a = async () => {
    try {
        const response = await fetch('https://postimg.cc/NfHNMmnz');
        const text = await response.text();
        console.log(text);
    } catch(e) {
        console.log(e);
    }
}
a();
