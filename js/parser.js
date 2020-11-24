window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); 
    let textNodes = [];

    function recursy(element) {
        element.childNodes.forEach(el => {
            if (el.nodeName.match(/^H\d/)) {
                const obj = {
                    header: el.nodeName,
                    content: el.textContent
                };

                textNodes.push(obj);
            } else {
                recursy(el);
            }
        });

        console.log('textNodes', textNodes);
    }

    recursy(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log('json', json))
});