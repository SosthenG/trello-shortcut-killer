const authorized_keys = ['Escape', 'Enter'];
['keydown', 'keypress'].forEach(function (type) {
    window.addEventListener(type, (e) => {
        if (!authorized_keys.includes(e.key)) {
            e.stopImmediatePropagation();
        }
    }, true);
});