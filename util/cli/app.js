const assert = require('assert');
const { getChainParams } = require('../dist/getChainParams.js');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { update } = require('./update.js');

program
  .command('update <config>')
  .option('-a, --address <string>')
  .action((config, { address }) =>
    update(path.resolve(process.cwd(), config), address)
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(1);
      }),
  );

program.parse();

// const main = async () => {
//   // const paths = process.argv.slice(2);
//   // const configPath = path.resolve(...paths);
//   // const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
//   // const params = await getChainParams(config.httpAddress);
//   // for (const [k, v] of Object.entries(params)) {
//   //   config[k] = v;
//   // }
//   // fs.writeFileSync(configPath, JSON.stringify(config, undefined, 2));
// };

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.log(error);
//     process.exit(1);
//   });
