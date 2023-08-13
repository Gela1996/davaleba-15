    // დავალება 1
    
    // divElement.style.marginLeft = '30px';
    // const style = getComputedStyle(divElement);
    // const marginLeft = styles.marginLeft;
    // console.log('Computed margin-left:', marginLeft);

    //დავალება 2

function clear(elem) {
    while (elem.firstchild) {
    elem.removeChild(elem.firstChild);
}
}
const listElement = document.getElementById('list');
clear(listElement);