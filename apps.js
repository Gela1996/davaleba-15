// დავალება 1
    
    // divElement.style.marginLeft = '30px';
    // const style = getComputedStyle(divElement);
    // const marginLeft = styles.marginLeft;
    // console.log('Computed margin-left:', marginLeft);

//დავალება 2

   //function clear(elem) {
   //while (elem.firstchild) {
   //elem.removeChild(elem.firstChild);
   //}
   //}
   //const listElement = document.getElementById('list');
   //clear(listElement);

//დავალება 3
let list = document.getElementById('list');

let secondLi = document.createElement('li');
secondLi.innerHTML = '2';

let thirdLi= document.createElement('li');
thirdLi.innerHTML = '3';

let fourthLi = documemnt.getElementById('two');

list.insertBefore(secondLi, fourthLi);

list.insertBefore(thirdLi, fourthLi);