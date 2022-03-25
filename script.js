const authorized_keys = ['Escape', 'Enter', 'Tab'];
['keydown', 'keypress'].forEach(function (type) {
    window.addEventListener(type, (e) => {
        if (!authorized_keys.includes(e.key)) {
            e.stopImmediatePropagation();
        }
    }, true);
});
