['keydown', 'keypress'].forEach(function(type){
    window.addEventListener(type,function(event) {
        event.stopImmediatePropagation();
    }, true)
});
