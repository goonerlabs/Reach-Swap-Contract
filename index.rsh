'reach 0.1';

const market = {
  swapTokens: Fun([UInt, UInt], Bool),
  }

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    // Specify Alice's interact interface here
    ...market,
    swapAlice: UInt
  });
  const Bob = Participant('Bob', {
    // Specify Bob's interact interface here
    ...market,
    swapBob: UInt,
    acceptSwap: Fun([UInt], Null),
  });
  init();
  Alice.only(() => {
    const amountAlice = declassify(interact.swapAlice);
  }) 
  Alice.publish(amountAlice).pay(amountAlice);
  commit();
  Bob.only(() => {
    const amountBob = declassify(interact.swapBob)
    const acceptSwap = declassify(interact.acceptSwap(amountAlice))
  })
  Bob.publish(amountBob, acceptSwap).pay(amountBob);
  commit();
  
  Alice.only(() => {
    const isValid = declassify(interact.swapTokens(amountAlice, amountBob))
  });
  Alice.publish(isValid);
  const [forAlice, forBob] = isValid ? [amountBob, amountAlice] : [amountAlice, amountBob];
  transfer(forAlice).to(Alice);
  transfer(forBob).to(Bob);
  commit();
  exit();
});
