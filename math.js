//decimal formating
function roundDecimal0(x) {
    x = Math.round(x);
}
function roundDecimal1(x) {
    x = Math.round(x*10)/10;
}
function roundDecimal2(x) {
    x = Math.round(x*100)/100;
}
function roundDecimal3(x) {
    x = Math.round(x*1000)/1000;
}
function roundDecimal4(x) {
    x = Math.round(x*10000)/10000;
}

//Algebra Multistep Functions

//Pythagorean Function
function pythag() {
    var a, b, c, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    sol = document.getElementById('pythag-sol');
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if(isNaN(a) === true && isNaN(b) === true || isNaN(b) === true && isNaN(c) === true || isNaN(a) === true && isNaN(c) === true || isNaN(a) === true && isNaN(b) === true && isNaN(c) === true) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(isNaN(a) !== true && isNaN(b) !== true && isNaN(c) !== true) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'All sides are already known';
    } else if(isNaN(c) != true) {
        if(isNaN(a) === true && b >= c) {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'Hypotenuse (c) cannot be less than or equal to the other sides (a & b)';
        } else if(isNaN(a) === true && b < c) {
            sol.style.color = '#000000';
            sol.innerHTML = 'Side 1 (a): ' + Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
        } else if(isNaN(b) === true && a >= c) {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'Hypotenuse (c) cannot be less than or equal to the other sides (a & b)';
        } else if(isNaN(b) === true && a < c) {
            sol.style.color = '#000000';
            sol.innerHTML = 'Side 2 (b): ' + Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
        }
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = 'Hypotenuse (c): ' + Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    }
}
function resetPythag() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('pythag-sol').innerHTML = '';
}

//Distance Formula Function
function distance() {
    var x1, x2, y1, y2, sol;
    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;
    sol = document.getElementById('distance-sol');
    if(x1 === '' || x2 === '' || y1 === '' || y2 === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing Values';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }
}
function resetDistance() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('distance-sol').innerHTML = '';
}

//Trignometry Functions

//Finding the Side or Angle of a Right Triangle using Trignometric Functions
function sideAngleWithTrigFunc() {
    var a, b, c, A, B, angleAFromRadToDeg, angleBFromRadToDeg, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    angleAFromRadToDeg = A*Math.PI/180;
    angleBFromRadToDeg = B*Math.PI/180;
    sol = document.getElementById('sideAngleWithTrigFunc-sol');

    if(a != '' && b != '' && A != '') {
        if(a === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = b*Math.tan(angleAFromRadToDeg);
        } else if(b === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = a/Math.tan(angleAFromRadToDeg);
        } else if(A === 'x') {
            sol.style.color = '#000000';
            var radOne = Math.atan(a/b);
            sol.innerHTML = radOne*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!';
        }
    } else if(a != '' && b != '' && B != '') {
        if(a === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = b/Math.tan(angleBFromRadToDeg);
        } else if(b === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = a*Math.tan(angleBFromRadToDeg);
        } else if(B === 'x') {
            sol.style.color = '#000000';
            var radTwo = Math.atan(b/a);
            sol.innerHTML = radTwo*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!'
        }
    } else if(a != '' && c != '' && A != '') {
        if(a === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = c*Math.sin(angleAFromRadToDeg);
        } else if(c === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = a/Math.sin(angleAFromRadToDeg);
        } else if(A === 'x') {
            sol.style.color = '#000000';
            var radThree = Math.asin(a/c);
            sol.innerHTML = radThree*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!';
        }
    } else if(a != '' && c != '' && B != '') {
        if(a === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = c*Math.cos(angleBFromRadToDeg);
        } else if(c === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = a/Math.cos(angleBFromRadToDeg);
        } else if(B === 'x') {
            sol.style.color = '#000000';
            var radFour = Math.acos(a/c);
            sol.innerHTML = radFour*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!';
        }
    } else if(b != '' && c != '' && A != '') {
        if(b === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = c*Math.cos(angleAFromRadToDeg);
        } else if(c === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = b/Math.cos(angleAFromRadToDeg);
        } else if(A === 'x') {
            sol.style.color = '#000000';
            var radFive = Math.acos(b/c);
            sol.innerHTML = radFive*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!';
        }
    } else if(b != '' && c != '' && B != '') {
        if(b === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = c*Math.sin(angleBFromRadToDeg);
        } else if(c === 'x') {
            sol.style.color = '#000000';
            sol.innerHTML = b/Math.sin(angleBFromRadToDeg);
        } else if(B === 'x') {
            sol.style.color = '#000000';
            var radSix = Math.asin(b/c);
            sol.innerHTML = radSix*180/Math.PI;
        } else {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'There is no x value to solve for!';
        }
    } else {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This calculator does not function unless you have two sides and an angle with one being x to solve for.'
    }
}

function resetSideAngleWithTrigFunc() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('sideAngleWithTrigFunc-sol').innerHTML = '';
}
//Pre-Calculus Multistep Functions

//Parametrics Function
function parametrics() {
    var x1, y1, t1, x2, y2, t2, sol;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    t1 = document.getElementById('t1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    t2 = document.getElementById('t2').value;
    sol = document.getElementById('parametrics-sol');
    if(x1 === '' || y1 === '' || t1 === '' || x2 === '' || y2 === '' || t2 === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(t1 != 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'The time at the first point must be 0';
    } else {
        b = (x2-x1)/t2;
        d = (y2-y1)/t2;
        ftb = 't';
        ftd = 't';
        if(x1 === 0) {
            x1 = '';
        }
        if(y1 === 0) {
            y1 = '';
        }
        if(b > 0) {
            b = ' + ' + b;
        } else if(b < 0) {
            b = ' - ' + Math.abs(b);
        } else if(b === 0) {
            b = '';
            ftb = '';
        } else if(b === 1) {
            b = '';
            ftb = ' + t';
        } else if(b === -1) {
            b = '';
            ftb = ' - t';
        }
        if(d > 0) {
            d = ' + ' + d;
        } else if(d < 0) {
            d = ' - ' + Math.abs(d);
        } else if(d === 0) {
            d = '';
            ftd = '';
        } else if(d === 1) {
            d = '';
            ftd = ' + t';
        } else if(d === -1) {
            d = '';
            ftd = ' - t';
        }
        sol.style.color = '#000000';
        sol.innerHTML = '( ' + x1 + b + ftb + ' , ' + y1 + d + ftd + ' )';
    }
}
function resetParametrics() {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('t1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('t2').value = '';
    document.getElementById('parametrics-sol').innerHTML = '';
}

//Quadratic Function
function quadratic() {
    var a, b, c, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    sol = document.getElementById('quadratic-sol');
    if(a === '' || b === '' || c === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing Values';
    } else {
        sol.style.color = '#000000';
        sol1 = (-1*b + Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);
        sol2 = (-1*b - Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);
        if(isNaN(sol1) && isNaN(sol2)) {
            sol.innerHTML = 'No solution';
        } else {
            sol.innerHTML = 'x = ' + sol1 + ' & ' + sol2;
        }
    }
}
function resetQuadratic() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('quadratic-sol').innerHTML = '';
}

//Power Rule of Derivative
function pwrDerivative() {
    var x, y, sol;
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    sol = document.getElementById('pwrDerivative-sol');
    x = parseInt(x);
    y = parseInt(y);
    if(isNaN(x) === true || isNaN(y) === true) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing Values';
    } else if(y === 2) {
        sol.style.color = '#000000';
        sol.innerHTML = x*y + 'x';
    } else if(y === 1) {
        sol.innerHTML = x;
    } else if(y === 0) {
        sol.innerHTML = 0;
    } else {
        var exp = y-1;
        exp = exp.toString();
        sol.innerHTML = x*y+'x'+exp.sup();
    }
}

function resetPwrDerivative() {
    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
    document.getElementById('pwrDerivative-sol').innerHTML = '';
}


//Advanced Circle Calculators
function standEqOfCircle() {
    var h, k, r, sol;
    var superscript = '2';
    h = document.getElementById('h').value;
    k = document.getElementById('k').value;
    r = document.getElementById('r').value;
    sol = document.getElementById('circleEquation-sol');
    if(h === '' || k === '' || r === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing Values';
    } else if(r < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Radius Cannot Be Negative';
    } else if(h < 0 && k > 0) {
        sol.style.color = '#000000';
        sol.innerHTML = 'Standard Equation: (x + ' + Math.abs(h) + ')' + superscript.sup() + ' + (y - ' + k + ')' + superscript.sup() +  ' = ' + Math.pow(r,2);
    } else if(h < 0 && k < 0) {
        sol.style.color = '#000000';
        sol.innerHTML = 'Standard Equation: (x + ' + Math.abs(h) + ')' + superscript.sup() + ' + (y + ' + Math.abs(k) + ')' + superscript.sup() + ' = ' + Math.pow(r,2);
    } else if(h > 0 && k > 0) {
        sol.style.color = '#000000';
        sol.innerHTML = 'Standard Equation: (x - ' + h + ')' + superscript.sup() + ' + (y - ' + k + ')' + superscript.sup() + ' = ' + Math.pow(r,2);
    } else if(h > 0 && k < 0) {
        sol.style.color = '#000000';
        sol.innerHTML = 'Standard Equation: (x - ' + h + ')' + superscript.sup() + ' + (y + ' + Math.abs(k) + ')' + superscript.sup() + ' = ' + Math.pow(r,2);
    }
}

//Look at this code later to make this a function   
//Complicated Circle Calculators
function completeSqrCircleEq() {
    var inp, sol;
    inp = document.getElementById('inp').value;
    sol = document.getElementById('completeSqrCircleEq-sol');
    if(inp === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Please Enter an Equation';
    } else if(inp.indexOf(' ') >= 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Cannot Have Spaces';
    } else {
        if(inp.indexOf('-') >= 0) {
            var arr = inp.split('-').join(',').split('+').join(',');
            var strArr = arr.toString();
            while(strArr.indexOf('^2') >= 0) {
                var asthticArr = strArr.replace('^2', '2'.sup())
                strArr = asthticArr;
                sol.style.color = '#000000';
                sol.innerHTML = asthticArr;
            }
        } else if(inp.indexOf('-') === -1) {
            var arr1 = inp.split('+');
            var arr1 = arr1.toString();
            while(arr1.indexOf('^2') >= 0) {
                var arr1 = arr1.replace('^2', '2'.sup());
            }
            sol.style.color = '#000000';
            sol.innerHTML = arr1;
        } 
    }          
}

//Reset Circle Equations
function resetStandEqOfCircle() {
    document.getElementById('h').value = '';
    document.getElementById('k').value = '';
    document.getElementById('r').value = '';
    document.getElementById('circleEquation-sol').innerHTML = '';
}

function resetcompleteSqrCircleEq() {
    document.getElementById('inp').value = '';
    document.getElementById('completeSqrCircleEq-sol').innerHTML = '';
}