var Intro = document.querySelector('.element0');
var I = document.querySelector('.element1');
var II = document.querySelector('.element5');
var III = document.querySelector('.element9');
var IA = document.querySelector('.element2');
var IB = document.querySelector('.element3');
var IC = document.querySelector('.element4');
var IIA = document.querySelector('.element6');
var IIB = document.querySelector('.element7');
var IIC = document.querySelector('.element8');
var IIIA = document.querySelector('.element10');
var IIIB = document.querySelector('.element11');
var Conclu = document.querySelector('.element12');
var Biblio = document.querySelector('.element13');
var img = document.getElementsByClassName('img');
var leg = document.getElementsByClassName('leg');

var pIntro = document.querySelector('.pIntro');
var pIA = document.querySelector('.pIA');
var pIB = document.querySelector('.pIB');
var pIC = document.querySelector('.pIC');
var pIIA = document.querySelector('.pIIA');
var pIIB = document.querySelector('.pIIB');
var pIIC = document.querySelector('.pIIC');
var pIIIA = document.querySelector('.pIIIA');
var pIIIB = document.querySelector('.pIIIB');
var pConclu = document.querySelector('.pConclu');
var pBiblio = document.querySelector('.pBiblio');

IA.style.display = "none";
IB.style.display = "none";
IC.style.display = "none";
IIA.style.display = "none";
IIB.style.display = "none";
IIC.style.display = "none";
IIIA.style.display = "none";
IIIB.style.display = "none";

pIntro.style.display = "none";
pIA.style.display = "none";
pIB.style.display = "none";
pIC.style.display = "none";
pIIA.style.display = "none";
pIIB.style.display = "none";
pIIC.style.display = "none";
pIIIA.style.display = "none";
pIIIB.style.display = "none";
pConclu.style.display = "none";
pBiblio.style.display = "none";

I.style.cursor = "pointer";
II.style.cursor = "pointer";
III.style.cursor = "pointer";

Intro.onmouseover = function() {
    pIntro.style.display = "inline"
};
Intro.onmouseleave = function() {
    pIntro.style.display = "none";
};
IA.onmouseover = function()
{
    pIA.style.display = "inline";
};
IA.onmouseleave = function()
{
    pIA.style.display = "none";
};

IB.onmouseover = function () {
    pIB.style.display = "inline";
};
IB.onmouseleave = function () {
    pIB.style.display = "none";
}
IC.onmouseover = function () {
    pIC.style.display = "inline";
};
IC.onmouseleave = function () {
    pIC.style.display = "none";
};
IIA.onmouseover = function () {
    pIIA.style.display = "inline";
};
IIA.onmouseleave = function () {
    pIIA.style.display = "none";
};
IIB.onmouseover = function () {
    pIIB.style.display = "inline";
};
IIB.onmouseleave = function () {
    pIIB.style.display = "none";
};
IIC.onmouseover = function () {
    pIIC.style.display = "inline";
};
IIC.onmouseleave = function () {
    pIIC.style.display = "none";
};
IIIA.onmouseover = function () {
    pIIIA.style.display = "inline";
};
IIIA.onmouseleave = function () {
    pIIIA.style.display = "none";
}
IIIB.onmouseover = function () {
    pIIIB.style.display = "inline";
};
IIIB.onmouseleave = function () {
    pIIIB.style.display = "none";
};
Conclu.onmouseover = function() {
    pConclu.style.display = "inline";
};
Conclu.onmouseleave = function() {
    pConclu.style.display = "none";
};
Biblio.onmouseleave = function() {
    pBiblio.style.display = "none";
};
Biblio.onmouseover = function() {
    pBiblio.style.display = "inline";
}



II.onclick = function()
{
    if (IIA.style.display == "block")
    {
    	IIA.style.display = "none";
    	IIB.style.display = "none";
    	IIC.style.display = "none";
    }
    else if (IIA.style.display = "none")
    {
    	IIA.style.display = "block";
    	IIB.style.display = "block";
		IIC.style.display = "block";
		
        IA.style.display = "none";
        IB.style.display = "none";
    	IC.style.display = "none";
        IIIA.style.display = "none";
        IIIB.style.display = "none";
    }
};

I.onclick = function()
{
	if (IA.style.display == "block")
	{
		IA.style.display = "none";
        IB.style.display = "none";
        IC.style.display = "none";
	}
	else if(IA.style.display == "none")
	{
        IA.style.display = "block";
        IB.style.display = "block";
		IC.style.display = "block";
		
        IIA.style.display = "none";
        IIB.style.display = "none";
        IIC.style.display = "none";
        IIIA.style.display = "none";
        IIIB.style.display = "none";
    }
};

III.onclick = function()
{
    if (IIIA.style.display == "none")
    {
    	IIIA.style.display = "block";
		IIIB.style.display = "block";
		
        IIA.style.display = "none";
        IIB.style.display = "none";
		IIC.style.display = "none";		
        IA.style.display = "none";
        IB.style.display = "none";
        IC.style.display = "none";
    }
    else if(IIIA.style.display == "block")
    {
    	IIIA.style.display = "none";
    	IIIB.style.display = "none";
    }
};

for (var i = 0; i != img.length; i++) {
    img[i].onload = function() {
        this.parentNode.setAttribute("style", "width:" + this.width + "px;");
    }
    
}
