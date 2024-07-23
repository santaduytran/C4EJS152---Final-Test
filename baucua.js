document.addEventListener('DOMContentLoaded', function() {
    const quayBtn = document.getElementById('quay');
    const datLaiBtn = document.getElementById('datlai');
    const betItems = document.querySelectorAll('.bet-item');
    const results = [document.getElementById('result1'), document.getElementById('result2'), document.getElementById('result3')];
    
    let isQuay = false;

    const images = ['bau.png', 'ca.png', 'cua.png', 'ga.png', 'huou.png', 'tom.png'];

    quayBtn.addEventListener('click', function() {
        if (isQuay) return;
        isQuay = true;

        let count = 0;
        const interval = setInterval(function() {
            results.forEach(result => {
                const randomIndex = Math.floor(Math.random() * images.length);
                result.src = images[randomIndex];
            });
            count++;
            if (count >= 100) {
                clearInterval(interval);
                isQuay = false;
                // Calculate final result
            }
        }, 50);
    });

    betItems.forEach(item => {
        item.addEventListener('click', function() {
            if (isQuay) return;
            let currentBet = parseInt(this.getAttribute('data-bet'));
            if (currentBet < 3) {
                currentBet++;
                this.setAttribute('data-bet', currentBet);
                this.querySelector('p').innerText = currentBet;
            }
        });
    });

    datLaiBtn.addEventListener('click', function() {
        if (isQuay) return;
        betItems.forEach(item => {
            item.setAttribute('data-bet', 0);
            item.querySelector('p').innerText = 0;
        });
    });
});
