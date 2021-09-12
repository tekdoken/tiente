function nut() {
    let vao = document.getElementById('inp').value;
    let aa = document.getElementById('aa').value;
    let bb = document.getElementById('bb').value;
    if (aa == bb) {
        document.getElementById('ee').innerHTML='result:'+vao;
    } else {
        if (aa == '2' && bb == '1') {
            document.getElementById('ee').innerHTML='result:'+(vao / 22783.51);
        } else {
            document.getElementById('ee').innerHTML='result:'+ (vao * 22783.51);
        }

    }

}
