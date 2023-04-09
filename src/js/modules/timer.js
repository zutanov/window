const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              sec = Math.floor((t/1000) % 60),
              min = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/1000/60/60) % 24),
              days = Math.floor(t/1000/60/60/24);
              
        return {
            "total": t,
            "days": days,
            "hours": hours,
            'minutes': min,
            'seconds': sec
        };
    };

    const setClock = (selector, endtime) => {

        const addZero = (n) => {
            if(n < 10) {
                return '0' + n;
            } else {
                return n;
            }
        };

        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
                    
            }
        }
    };

    setClock(id, deadline);

};

export default timer;