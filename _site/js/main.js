$(document).ready(function() {
    let num = $(".textbox").length-1;
    let count = 0;
    if(num>0) {
      runProject(count, num);
    }
});

function runProject(index, num) {
    var typed = new Typed('#t'+index, {
        strings: ['`ClayMcGinnis@MST:~$ `^1000'+$('#t'+index).attr('label')+'^1000'],
        typeSpeed: 70,
        onStringTyped: function() {
            $(".typed-cursor").remove();
            setTimeout(()=> {
                if(index != num) {
                    runProject(index+1, num)
                } else {
                    setTimeout(()=>{
                        $('.textbox').empty();
                        runProject(0, num);
                    }, 3000); // how long until restarting
                }
            }, 1000); // how long images stay up
        }
    });
}
