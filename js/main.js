var tiempo = setInterval(() => {
    if(ESTADO){
        document.body.style.background = `repeating-linear-gradient(rgb(122, 190, 230), rgb(230, 112, 194))`;
    ESTADO = false;
}
else{
    document.body.style.background = `repeating-linear-gradient(rgb(230, 112, 194), rgb(122, 190, 230))`;
    ESTADO = true;
}
}, 1000);