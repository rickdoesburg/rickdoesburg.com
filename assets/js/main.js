document.addEventListener('DOMContentLoaded', function() {
    const darkmodeEnabler = document.querySelector('.darkmode-enabler');

    if(darkmodeEnabler) {
        const darkmodeToggle = darkmodeEnabler.querySelector('input[type=checkbox]');
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches; // true

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { console.log('changed!!');})

        darkmodeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.querySelector('body').classList.add('darkmode-pls');
            } else {
                document.querySelector('body').classList.remove('darkmode-pls');
            }
        });

        if(prefersDarkMode) {
            darkmodeToggle.checked = true;
            document.querySelector('body').classList.add('darkmode-pls');
        }
    }
});
