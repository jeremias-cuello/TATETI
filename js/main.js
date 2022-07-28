var time = setInterval(() => {
    if(state){
        document.body.style.background = `repeating-linear-gradient(rgb(122, 190, 230), rgb(230, 112, 194))`;
    state = false;
}
else{
    document.body.style.background = `repeating-linear-gradient(rgb(230, 112, 194), rgb(122, 190, 230))`;
    state = true;
}
}, 1000);