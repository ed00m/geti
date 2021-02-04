const { eventNames } = require('./app');
const app = require('./app');

const main = async () => {
    await app.listen(process.env.PORT || 3000);
    console.log(`Servidor iniciado...${(process.env.PORT || 3000)}`)
}

main();