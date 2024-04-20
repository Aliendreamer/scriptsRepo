const fs = require('fs');

const data = JSON.stringify({
    variables: {},
    query: `
            {
                __schema {
                types {
                    kind
                    name
                    possibleTypes {
                    name
                    }
                }
                }
            }
        `,
});


function generatePossibleTypes() {
    const url = 'xxx';
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
        },
        body: data,
    };

    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            const possibleTypes = result.data.__schema.types.filter((type) => type.possibleTypes);
            fs.writeFileSync('possibleTypes.json', JSON.stringify(possibleTypes, null, 4), 'utf8');
        })
        .catch((error) => console.log('error', error));
}

generatePossibleTypes();
