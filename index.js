const uuid = require('uuid');
const fs = require('fs');

const MY_NAMESPACE = 'de635495-eefe-4ccb-95f6-87fdca9c9b28';

const data = [];

for (let index = 0; index < 250; index++) {
    const name = 'jacket';
    data.push({
        item: name,
        index: index +1,
        uuid: uuid.v5(`${name}-${index}`, MY_NAMESPACE),

    });
}

for (let index = 0; index < 250; index++) {
    const name = 'hoodie';
    data.push({
        item: name,
        index: index +1,
        uuid: uuid.v5(`${name}-${index}`, MY_NAMESPACE),
    });
}

for (let index = 0; index < 250; index++) {
    const name = 't-shirt';
    data.push({
        item: name,
        index: index +1,
        uuid: uuid.v5(`${name}-${index}`, MY_NAMESPACE),
    });
}


fs.writeFileSync('./src/data.json', JSON.stringify(data));
