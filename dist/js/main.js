document.addEventListener('DOMContentLoaded', function(event) {
    const darkmodeEnabler = document.querySelector('.darkmode-enabler');

    if(darkmodeEnabler) {
        const darkmodeToggle = darkmodeEnabler.querySelector('input[type=checkbox]');

        darkmodeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.querySelector('body').classList.add('darkmode-pls');
            } else {
                document.querySelector('body').classList.remove('darkmode-pls');
            }
        })
    }
});
