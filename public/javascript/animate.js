// animation

const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('unlefting');
        } else {
            entry.target.classList.remove('show'); 
            entry.target.classList.remove('unlefting');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observe.observe(el));

const leftingElements = document.querySelectorAll('.lefting');
leftingElements.forEach((el) => observe.observe(el));
