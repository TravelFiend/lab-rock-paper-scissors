// IMPORT MODULES under test here:
import checkResult from '../src/check-result.js';

const test = QUnit.test;

test('Did the user and computer both pick rock?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'rock';
  const computerHand = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 0);
});

test('Did the user and computer both pick paper?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'paper';
  const computerHand = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 0);
});

test('Did the user and computer both pick scissors?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'scissors';
  const computerHand = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 0);
});

test('Did the user pick rock and the computer pick scissors?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'rock';
  const computerHand = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 1);
});

test('Did the user pick rock and the computer pick paper?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'rock';
  const computerHand = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, -1);
});

test('Did the user pick paper and the computer pick scissors?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'paper';
  const computerHand = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, -1);
});

test('Did the user pick paper and the computer pick rock?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'paper';
  const computerHand = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 1);
});

test('Did the user pick scissors and the computer pick rock?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'scissors';
  const computerHand = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, -1);
});

test('Did the user pick scissors and the computer pick paper?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const userHand = 'scissors';
  const computerHand = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const

  const result = checkResult(userHand, computerHand);

    //Assert
    // Make assertions about what is expected valid result
  assert.equal(result, 1);
});