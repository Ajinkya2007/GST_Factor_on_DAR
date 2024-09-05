document.querySelector(".button").addEventListener('click',()=> {
    let gst = parseInt(document.querySelector(".gst").value)/100;
    let co = parseInt(document.querySelector(".co").value)/100;
    let res_el = document.querySelector(".result");
    let n1 = (1 + co);
    let n2 = (gst * n1);
    let d1 = (co * gst);
    let d2 = (1 - d1)
    let rt = (n2/d2).toFixed(4);
    res_el.innerHTML=`The GST Factor is ${rt}`;
})