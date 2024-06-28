const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;

            case 'white':
                body.style.backgroundColor = e.target.id;

            case 'blue':
                body.style.backgroundColor = e.target.id;

            case 'yellow':
                body.style.backgroundColor = e.target.id;
        }

    });
});