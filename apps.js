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

const ulElement = document.getElementById('ul');
const newLi2 = document.createElement('li');
newLi2.textContent = '2';

const newLi3 = document.createElement('li');
newLi3.textContent = '3';

ulElement.insertBefore(newLi2, document.getElementById('two'));

ulElement.insertBefore(newLi3, newLi2.nextSibling);

