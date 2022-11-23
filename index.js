constyesBtn=documento. querySelector('#yesBtn');

síBtn. addEventListener('clic',función () {
    alert('BBY era obvio que querias salir conmigo')
});

constnoBtn=documento. querySelector('#noBtn');

noBtn. addEventListener('mouseover',function () {
    constrandomX=parseInt(Math. aleatorio()*100);
    constrandomY=parseInt(Math. aleatorio()*100);
    noBtn. estilo. setProperty('top',randomY+'%');
    noBtn. estilo. setProperty('left',randomX+'%');
    noBtn. estilo. setProperty('transform','translate(-${randomX}%,-${randomY}%)');
})
