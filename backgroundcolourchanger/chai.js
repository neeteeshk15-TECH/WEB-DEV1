const color=document.querySelectorAll('button');
const colorarr=Array.from(color)
const body=document.querySelector('body')
colorarr.forEach( (btn)=>{
    btn.onclick= function()
    {
        body.style.backgroundColor=btn.className;
    };


});

