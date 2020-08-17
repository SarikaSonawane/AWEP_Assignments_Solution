


function post() {
    var newelement = document.createElement('div');
    var newchild = document.querySelector('#inp1').value;
    newelement.textContent = newchild;
    document.querySelector('#refid').appendChild(newelement);
    newelement.style.border = " 2px solid black";

    document.querySelector('#inp1').value = " ";
}

function comdelete(btnelement) {
    btnelement.document.querySelector
}


function post2() {
    var newelement = document.createElement('div');
    var newchild = document.querySelector('#inp2').value;
    newelement.textContent = newchild;
    document.querySelector('#refid2').appendChild(newelement);
    newelement.style.border = " 2px solid black";

    document.querySelector('#inp2').value = " ";
}
