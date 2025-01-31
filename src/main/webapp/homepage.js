let mainblock = document.getElementById('main-block');
let cartdata=[];
let fetchdata = async function(){
    let response = await fetch('https://fakestoreapi.com/products');
    let result = await response.json();
    displaydata(result)
    console.log(result)
    
}
fetchdata()

let displaydata = (data)=>{
    data.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `<img src=${element.image}>
                            <h2>${element.title}</h2>
                            <p>Price: ${element.price}</p>
                            <div>
                            <button> <i class="fa-regular fa-heart"></i></button>
                            <button class='cartbtn' id='${element.id}'><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>`
        mainblock.appendChild(div);

       div.addEventListener('click',()=>{
        let model=document.getElementById('model')
        model.style.display='flex';
        model.style.alignItems='center';
        model.style.flexDirection='column';
        model.style.justifyContent='center';
        model.innerHTML=`<div id='model-div'>
        <img src=${element.image} height='200px' width='150px'>
                            <h2>${element.title}</h2>
                            <p>Price: ${element.price}</p>
                            <p>Description: ${element.description}</p>
                            <button id='closebtn'>Close</button>
             </div>
             </div> ` 
             let closebtn=document.getElementById('closebtn');
             closebtn.addEventListener('click',()=>{
                model.style.display='none';
             })             
       });


       let cartbtns=document.getElementsByClassName('cartbtn');
       for(let i=0;i<cartbtns.length;i++){
        cartbtns[i].addEventListener('click',(e)=>{
            e.stopPropagation()
            let eleid=parseInt(cartbtns[i].id);
            if(element.id===eleid){
                let jsondata=localStorage.getItem('cartdata');
                if(jsondata){
                    cartdata=JSON.parse(jsondata);
                }
                cartdata.push(element);
                localStorage.setItem('cartdata',JSON.stringify(cartdata))
                
            }
        })
       }
    
    });
};
let picon=document.getElementById('prfl-icon');
picon.addEventListener('click',()=>{
    let logblk=document.getElementById('logout');
    logblk.style.display='block'
})