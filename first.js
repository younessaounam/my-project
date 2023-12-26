let title = document.getElementById('title')
let prix = document.getElementById('prix')
let tax = document.getElementById('tax')
let ads = document.getElementById('ads')
let promo = document.getElementById('promo')
let totall = document.getElementById('total')
let contité = document.getElementById('cont')
let type = document.getElementById('type')
let creat = document.getElementById('creat')
let delall = document.getElementById('delall')

function somme(){
    if(prix.value != ''){
        result=(+prix.value+ +tax.value+ +ads.value)- +promo.value
        totall.innerHTML = result;
        totall.style.background='#040'
    }
    else{
        totall.style.background='red'
        totall.innerHTML=''
    }
}
let dataPro;
if(localStorage.produit != null){
    dataPro = JSON.parse(localStorage.produit)
}
else{dataPro = []}

creat.onclick = function(){
    let newPro = {
        title:title.value,
        prix:prix.value,
        tax:tax.value,
        ads:ads.value,
        promo:promo.value,
        totall:totall.innerHTML,
        contité:contité.value,
        type:type.value
    }

    dataPro.push(newPro)
    localStorage.setItem('produit',   JSON.stringify(dataPro))
    netwey()
    lire()
}
function netwey(){
    title.value=''
    prix.value=''
    tax.value=''
    ads.value=''
    promo.value=''
    totall.innerHTML=''
    contité.value=''
    type.value=''
}


function lire(){
    let table ='';
    for(i=0;i<dataPro.length;i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].prix}</td>
        <td>${dataPro[i].tax}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].promo}</td>
        <td>${dataPro[i].totall}</td>
        <td>${dataPro[i].contité}</td>
        <td>${dataPro[i].type}</td>
        <td><button>save</button></td>
        <td><button onclick="del(${i})">delet</button></td>
    </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table
    // if(dataPro.length>0){
    //     delall
    // }else{delall.style.display='none'}
}
lire()

function del(i){
    dataPro.splice(i,1);
    localStorage.produit = JSON.stringify(dataPro)
    lire()
}