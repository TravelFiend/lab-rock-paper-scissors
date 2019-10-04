const checkResult = (player, computer) => {
  if (player === computer) {
    return 0;
 
  } else if ((player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock') || (player === 'rock' && computer === 'scissors')) {
    return 1;

  } else {
    return -1;
  }
};

export default checkResult;