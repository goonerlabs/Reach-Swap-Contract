import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
// attacher address specified by alice
const attacherAddress = accBob.getAddress();
const addressBob = accBob.getAddress();

const market = (who) => ({
  swapTokens: (amountAlice, amountBob) => {
    if (attacherAddress == addressBob) {
      console.log(`${who} swapped ${fmt(amountAlice)} for ${fmt(amountBob)} with Bob`);
      return true
    } else {
      console.log(`Error cannot process trnasfer. Wrong Address is trying to swap. Please input the correct Wallet Address`);
      return false
    }


  }
})
await Promise.all([
  ctcAlice.p.Alice({
    // implement Alice's interact object here
    ...market('Alice'),
    swapAlice: stdlib.parseCurrency(50),
  }),
  ctcBob.p.Bob({
    // implement Bob's interact object here
    ...market('Bob'),
    swapBob: stdlib.parseCurrency(10),
    acceptSwap: (amt) => {
      console.log(`Bob accepts the swap of ${fmt(amt)}`);
    }
  }),
]);
const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

console.log('Goodbye, Alice and Bob!');
