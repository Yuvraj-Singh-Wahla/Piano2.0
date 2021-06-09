
const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','f','g','h','j']

const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')
keys.forEach(key=>{
    key.addEventListener('click',() => playNote(key))
})
document.addEventListener('keydown', e=>{

    if(e.repeat) return

    const key=e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const balckKeyIndex = BLACK_KEYS.indexOf(key)


    if(whiteKeyIndex>-1) playNote(whitekeys[whiteKeyIndex])
    if(balckKeyIndex>-1) playNote(blackkeys[balckKeyIndex])
})
function playNote(key){
     const noteAudio = document.getElementById(key.dataset.note)
     noteAudio.currentTime=0
     noteAudio.play()
     key.classList.add('active');
     noteAudio.addEventListener('ended',()=>{
         key.classList.remove('active')
     });
}
var backgroundc = { "Red":"Red","Yellow":"Yellow","Green":"Green","Blue":"Blue","Orange":"Orange","Aqua":"Aqua","White":"White" }
window.onload=function()
{
    var bgcolor = document.getElementsByName("color");
    for(var i=0;i<bgcolor.length;i++)
    {
        bgcolor[i].onclick=function()
        {
            document.getElementById("pp").style.backgroundColor = backgroundc[this.value]
        }
    }
}   