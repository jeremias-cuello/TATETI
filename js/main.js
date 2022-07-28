var time = setInterval(() => {
    
    document.body.style.background ? (state) `repeating-linear-gradient(var(--colorBody_2), var(--colorBody_1))` : `repeating-linear-gradient(var(--colorBody_1), var(--colorBody_2))`;

}, 1000);