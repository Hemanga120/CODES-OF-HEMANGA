window.onload = function() {
    const chocolatePack = document.getElementById('chocolatePack');
    const animatedHand = document.getElementById('animatedHand');
    const roseAndChocolate = document.getElementById('roseAndChocolate');
    const openedChocolate = document.getElementById('openedChocolate');
    const happyChocolateDay = document.getElementById('happyChocolateDay');

    setTimeout(() => {
        animatedHand.style.top = '0';
        setTimeout(() => {
            chocolatePack.style.opacity = '0';
            animatedHand.style.opacity = '0';
            roseAndChocolate.style.opacity = '1';

            setTimeout(() => {
                roseAndChocolate.style.opacity = '0';
                openedChocolate.style.opacity = '1';

                setTimeout(() => {
                    happyChocolateDay.style.opacity = '1';
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}