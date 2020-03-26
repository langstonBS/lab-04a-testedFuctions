const test = QUnit.test;


function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiple(x, y){
    return x * y;
}

function devide(x, y){
    return x / y;
}

function iseven(x){
    const y = x % 2;
    if(y === 0){
        return true;
    } 
    else {
        return false;
    }

}

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(sum, expected);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = subtract(x, y);
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(sum, expected);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expectedex = 12;
    //Act 
    // Call the function you're testing and set the result to a const
    const multipleEx = multiple(x, y);
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(multipleEx, expectedex);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 8;
    const y = 2;
    const expectedex = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const devideEx = devide(x, y);
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(devideEx, expectedex);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 8;
    const expectedex = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const even = iseven(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(even, expectedex);
});