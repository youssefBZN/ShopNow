console.log('im working ')


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange=Action;
// xhttp.open("GET", '/Ecomerce.json');

// let data = 'Ecomerce.json'
// let C = fetch("https://restcountries.com/v3.1/all")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// console.log(C)

let empty;
let bt;

// console.log(document.body.children[0].children[3])

// for(let y = 0 ; y < document.body.children[0].children[3].length ; y++) {

//              console.log(document.body.children[0].children[3][i])

// }

console.log(document.body)
let gets = document.getElementById('Test3')

// let gtc = document.getElementById('Card2') 
// gtc.style.display = 'none'






















// let gtE = document.getElementsByClassName('carde')[0]
// console.log(gtE)







// console.log(document.body)
// console.log(document.body.children)
// console.log(document.body.childNodes[0])
// console.log(document.body.querySelectorAll('div'))

// for (let i = 0 ; i < document.body.children.length ; i++) {

//        console.log(document.body.children[i])

// }


let geton = document.getElementById('ajoute')






let Objects =
 {
    "items": [
      {
        "sys": { "id": "1" },
        "fields": {
          "title": "Chaussures blancs pour homme",
          "price": 10.99,
          "image": { "fields": { "file": { "url": "https://planetsport.ma/48037-home_default/chaussures-champion-rr-champ-elemen-1122.jpg" } } }
        }
      },
      {
        "sys": { "id": "2" },
        "fields": {
          "title": "Chaussures gris pour homme",
          "price": 12.99,
          "image": { "fields": { "file": { "url": "https://planetsport.ma/48012-home_default/chaussures-champion-rr-champ-mix-1122.jpg" } } }
        }
      },
      {
        "sys": { "id": "3" },
        "fields": {
          "title": "Chaussure blanc pour homme",
          "price": 12.99,
          "image": { "fields": { "file": { "url": "https://i.ebayimg.com/thumbs/images/g/T9QAAOSwtwBjI~xi/s-l300.jpg" } } }
        }
      },
      {
        "sys": { "id": "4" },
        "fields": {
          "title": "Chaussure bleu pour homme",
          "price": 22.99,
          "image": { "fields": { "file": { "url": "https://contents.mediadecathlon.com/p1985520/k$eb8ed3a45ad9172f8ddc862ea1c5fa48/chaussures-de-running-homme-kalenji-run-100-gris.jpg?format=auto&quality=40&f=452x452" } } }
        }
      },
      {
        "sys": { "id": "5" },
        "fields": {
          "title": "Chaussure noire pour homme",
          "price": 88.99,
          "image": { "fields": { "file": { "url": "https://planetsport.ma/35024-home_default/chaussures-champion-cl-0322.jpg" } } }
        }
      },
      {
        "sys": { "id": "6" },
        "fields": {
          "title": "Chaussure blanc pour homme",
          "price": 32.99,
          "image": { "fields": { "file": { "url": "https://photos6.spartoo.com/photos/202/20297323/20297323_500_A.jpg" } } }
        }
      },
      {
        "sys": { "id": "7" },
        "fields": {
          "title": "Chaussure gris pour homme",
          "price": 45.99,
          "image": { "fields": { "file": { "url": "https://photos6.spartoo.com/photos/215/21544293/21544293_350_A.jpg" } } }
        }
      },
      {
        "sys": { "id": "8" },
        "fields": {
          "title": "chaussure blanc pour homme",
          "price": 33.99,
          "image": { "fields": { "file": { "url": "https://www.cdiscount.com/pdt2/2/4/c/1/300x300/m20324c/rw/adidas-originals-baskets-stan-smith-blanc-vert-mix.jpg" } } }
        }
      }
    ]
  }



  console.log(Objects.items)

//   let createDiv = document.createElement('div')
//   let creatP = document.createElement('p')
//   createDiv.appendChild(creatP)
//   document.body.appendChild(createDiv)
 


let Card = []






// let V = window.localStorage.getAttribute("Produits")
// let Ve = JSON.parse(V)
// console.log(Ve)
let getPrde = window.localStorage.getItem("Produits")
let objParsee = JSON.parse(getPrde)
console.log(objParsee)
console.log(objParsee.length)



// window.localStorage.clear()



let D = document.getElementById('cards')
let P = document.createElement('p')
D.appendChild(P)
P.innerHTML = objParsee.length
// console.log(localStorage.getItem('Produits'))


if(localStorage.getItem('Produits')) {
   Card = JSON.parse(localStorage.getItem('Produits'))
}


console.log(Card)

let Total = Card.map((el) => {

          return el.fields.price

})
 
let Prixtotal = Total.reduce((acc , cu) => {
       
      return acc + cu

})
console.log(Prixtotal)

geton.innerHTML = Prixtotal + ' Dh'
geton.style.display = 'none'


console.log(document.body)

let crd = document.getElementById('Card2')
crd.style.padding = '200px'
// crd.style.width = '700px'
// crd.style.backgroundColor = 'gray'
// crd.style.marginTop = '200px'
// crd.style.marginRight = '-600px'


// console.log(typeof crd)
// for(let i = 0 ; i < crd.length; i++) {
    
//      console.log(crd[i])


// }
console.log(crd)


    







//   let createH = document.createElement('h1')
//   document.body.appendChild(createH)
//   createH.innerHTML = objParsee.length
//   createH.style.marginTop = '-1300px'



let dispalayhouse = Objects.items.map((elem) => {

    let getdivPro = document.getElementsByClassName('Products')[0]
    console.log(getdivPro)

    let createPP = document.createElement('p')
    
  // getdivPro.style.backgroundColor = '#F0F0F0'

  
  getdivPro.style.marginTop = '300px'


  let createDiv = document.createElement('div')
  let creabiggDiv = document.createElement('div')
  creabiggDiv.appendChild(createDiv)
  getdivPro.appendChild(creabiggDiv)
  getdivPro.style.backgr
// //   let creatDiv2 = document.createElement('div')
// //   let creatDiv3 = document.createElement('div')
  let creatP = document.createElement('p')
  let creaImg = document.createElement('img')
  let creatButon = document.createElement('button')
  bt = creatButon
  
  


// //   creatDiv3.appendChild(createDiv)
// //   creatDiv3.appendChild(creatDiv2)
  createDiv.appendChild(creatP)
  createDiv.setAttribute('class', 'pro')
  createDiv.appendChild(creaImg)
  createDiv.appendChild(creatButon)
  creabiggDiv.appendChild(createPP)
  creatButon.style.marginRight='200px'
//   creatButon.style.position ='absolute'
  creatButon.innerHTML = 'Add to card'
  creatButon.style.marginLeft = '30px'

  creatButon.setAttribute('class', 'btn btn-danger')
  createDiv.style.width='auto'
  createDiv.style.height='auto'
  createDiv.style.display = 'flex'
  createDiv.style.flexDirection = 'column'
  creabiggDiv.style.border ='0,5px black solid'
  creabiggDiv.style.boxShadow = '0 5px 25px rgba(1 1 1 / 15%) '           
  creabiggDiv.style.marginTop = '20px'
  creabiggDiv.style.backgroundColor ='white'

  // creabiggDiv.style.backgroundColor ='#F0F0F0'

 



//   creabiggDiv.appendChild(createDiv)
//   document.body.appendChild(creabiggDiv)
// //   document.body.appendChild(creatDiv2)
  creatP.innerHTML = elem.fields.title
  creatP.style.marginTop = '20px'
  creaImg.style.width = '500px'
  creaImg.style.height = '500px'
  creabiggDiv.style.display = 'flex'
  creabiggDiv.style.justifyContent ='space-around'
  creabiggDiv.style.display='flex'
  creabiggDiv.style.flexWrap='wrap'
  creabiggDiv.style.width = "auto"
  creabiggDiv.style.height = "auto"
  createDiv.setAttribute('data', elem.sys.id)
  createDiv.setAttribute('dataPrix', elem.fields.price)
//   document.body.style.gridTemplateColumns = "200px 200px 200px"
//   document.body.style.gridTemplateRows = "200px 200px 200px 200px"

console.log(typeof elem.fields.price)



  console.log(createDiv)
  console.log(creabiggDiv)
// //   console.log(creatDiv2)
// //   console.log(creatDiv3)
  
  creaImg.style.height='320px';
  creaImg.style.width='320px';
  creaImg.setAttribute('src', elem.fields.image.fields.file.url )
  let Num = parseInt(elem.sys.id)
  creatButon.setAttribute( 'data', Num)
  let createPr = document.createElement('p')
  createDiv.appendChild(createPr)
  createPr.innerHTML = elem.fields.price
  createPr.style.marginLeft = '30px'
  console.log(typeof Num)
  console.log(creatButon)
  let getBUton = document.getElementsByTagName('button')

  let gte = document.getElementsByClassName('carde')
  console.log(gte)
  console.log(typeof creatButon.getAttribute("data"))

  let K = elem.sys.id

    for(let i = 0 ; i < getBUton.length ; i++ ) {

          getBUton[i].onclick = function() {

                 console.log(this.parentElement)
                 console.log(this.elem)
                 

                 console.log( typeof parseInt(this.parentElement.children[3].innerHTML))
                 console.log(Card)
                //  P.innerHTML = objParsee.length ++
                P.innerHTML = objParsee.length = objParsee.length + 1
          
                
                // alert(objParsee.length = objParsee.length + 1)
                //  alert('im here')
                // let Yo = document.getElementById('Test3')
                // let Po = document.createElement('p')
                // Yo.appendChild(Po)
                // Po.innerHTML = this.parentElement.innerHTML
                // console.log(this.parentElement)
              console.log(this.parentElement.getAttribute('dataprix'))
              let pars = parseInt(this.parentElement.getAttribute('dataprix'))
              console.log(pars)
              console.log(typeof pars)
              console.log(typeof this.parentElement.getAttribute('dataprix'))
              //  alert(this.parentElement.getAttribute('data'))
              geton.innerHTML= Prixtotal  = Prixtotal + parseInt(this.parentElement.children[3].innerHTML)
              // alert(this.parentElement.getAttribute('data'))
              console.log(this.parentElement)
              let getI = document.getElementsByClassName('Items')[0]
             let gc = document.getElementById('Card2')
      
             
             for(let O = 0; O<getI.length ; O++) {

                      console.log(getI[O])

             }


             console.log(gc.children)
             for(let Y = 0 ; Y < gc.children.length ; Y++) {

               let prx = gc.children[Y].childNodes.item(1)
            
              if(gc.children[Y].childNodes.item(1) === null ) {

                 continue


              }
              console.log(prx.innerHTML)
              let pars2 = parseInt(prx.innerHTML)
              console.log(pars2)
              console.log(typeof pars2)

              // for(let I = 0 ; I < gc.children[Y].childNodes.length; I++) {
                           
              //   console.log(gc.children[Y].childNodes[I])

              // }

                 if(gc.children[Y].getAttribute('data-id') === this.parentElement.getAttribute('data')) {
                    console.log(prx)
            
                    prx.innerHTML = pars2 = pars2+pars
                        //  P.innerHTML = objParsee.length = objParsee.length + 1
                  // continue
                  // console.log(gc.children[Y])
                  // alert(this.parentElement.getAttribute('data'))
                  //  console.log(prx)
                  // continue
                 }
                 else {
                     console.log(gc.children[Y])

                 }

               

             }


             console.log(gc)
              console.log(GetC)
              console.log(getI)
              console.log(getI.children[1].innerHTML)
              let getP = getI.children[1].innerHTML
              let getP2 = parseInt(getP)
              console.log(getP2)
              console.log(typeof getP2)

              // getI.children[1].innerHTML = getP2 + parseInt(this.parentElement.children[3].innerHTML)
           
          
                
               
              
               
              let Y =   Objects.items.filter((elem) => {
             
                   
                return  elem.sys.id === this.parentElement.getAttribute("data")

            })
           console.log(Y)
            console.log(Card)
              
            

            let C =  Y.map((el) => {
                    Card.push(el)
            })
            
            empty = C
             
    
           console.log(Card)

           window.localStorage.setItem('Produits', JSON.stringify(Card))
         
           console.log(empty)
            

          }

          
    

    }


    // let getPrd = window.localStorage.getItem("Produits")
    // let objParse = JSON.parse(getPrd)
    // console.log(objParse)
    // let createDI = document.createElement('div')
    // document.body.appendChild(createDI)
    // let createP = document.createElement('p')
    // createDI.appendChild(createP)


    // let obj = objParse.map((element) => {

    //     //    let createDI = document.createElement('div')
    //     //    document.body.appendChild(createDI)
    //     //    let createP = document.createElement('p')
    //     //    createDI.appendChild(createP)
                 
    //                return  element
           

    // })

    // console.log(obj)
    // let createDI = document.createElement('div')
    // document.body.appendChild(createDI)
    // let createP = document.createElement('p')
    // createDI.appendChild(createP)


    // obj.map((ele) => {
     
    //        createP.innerHTML = ele.fields.title

           

    // })



  
    // console.log(Card)
 






       


})








let getPrd = window.localStorage.getItem("Produits")
let objParse = JSON.parse(getPrd)
console.log(objParse)
// console.log(objParse.length)
let createD = document.createElement('div')
// createD.setAttribute('class','carde')
document.body.appendChild(createD)
createD.style.display ='none'
// createD.style.flexWrap ='wrap'
createD.style.justifyContent = 'space-around'
createD.style.width = 'auto'
createD.style.height = 'auto'
createD.style.backgroundColor='red'

// let creatPriTo = document.createElement('p')
// createD.appendChild(creatPriTo)
// creatPriTo.innerHTML = 'Good work'
// creatPriTo.style.textAlign = 'center'

// createD.setAttribute('class','carde')

// console.log(createD)


console.log(objParse)




let Obj2 = objParse.map((ele) => {
    // let createD = document.createElement('div')
    // createD.style.display ='flex'
    // createD.style.backgroundColor = 'blue'
    // document.body.appendChild(createD)
    let creatDivpr = document.createElement('div')
    createD.appendChild(creatDivpr)
    let creatp2 = document.createElement('p')
    let createp3 = document.createElement('p')
     createD.setAttribute('class','carde')
    // createD.appendChild(creatp2)
    creatDivpr.appendChild(creatp2)
    creatDivpr.appendChild(createp3)
    creatDivpr.setAttribute('data', ele.sys.id)
    // creatDivpr.setAttribute('class', 'Cardsd')
    // creatp2.innerHTML = ele.fields.title
    createp3.innerHTML = ele.fields.price
    let creati = document.createElement('img')
    creati.style.width = '320px'
    creati.style.height = '320px'
    creatDivpr.appendChild(creati)
    createD.style.marginTop = '200px'
    creatDivpr.style.display = 'flex';
    creatDivpr.style.display = 'none'
    creatDivpr.style.flexDirection = 'column'
    creati.setAttribute('src',ele.fields.image.fields.file.url )
    let CreateBu = document.createElement('button')
    creatDivpr.appendChild(CreateBu)
    CreateBu.innerHTML = 'Supprimer'
    CreateBu.style.width = '100px'
    CreateBu.setAttribute('class', 'btn btn-danger' )

    console.log(createD)
     
    console.log(ele.fields.title)
    


    CreateBu.onclick = function () {
     
        
    let Card = objParse = objParse.filter((ele) => ele.sys.id != creatDivpr.getAttribute("data"))
     console.log(Card)
    creatDivpr.style.display = 'none'
    window.localStorage.setItem('Produits', JSON.stringify(Card))

      
    }



    


})



let getcards = document.getElementById('cards')
getcards.style.display = 'flex'
getcards.style.justifyContent = 'space around'
let creatP = document.createElement('p')
getcards.appendChild(creatP)

creatP.innerHTML = objParse.length
creatP.style.color = '#FFFF'
creatP.style.marginLeft = '1100px'
creatP.style.padding = '8px'
console.log(getcards)

console.log(Card)


let GetPrixTotal = Card.map((el) => {
      
      return el.fields.price

})

console.log(GetPrixTotal)

let getPrix = GetPrixTotal.reduce((acc , cu) => {

       return acc + cu

})
console.log(getPrix)

let gtD = document.getElementsByClassName('carde')[0]
let getbgim = document.getElementById('bgimg')



let getcardButn = document.getElementById('card')
getcardButn.onclick = function () {
   let get = document.getElementById('Test3')
   let getcard = document.getElementById('Card2')
  //  getcard.style.display = 'block'
   getcard.style.display = 'flex'
   getcard.style.flexWrap = 'wrap'
   getcard.style.marginLeft = '100px'  
  //  getcard.style.backgroundColor = '#F0F0F0'
   gtD.style.display = 'none'
   getbgim.style.display = 'none'

   let Getwhy = document.getElementById('why')
   Getwhy.style.display = 'none'
   geton.style.display = 'block'



   
  





   
   get.style.color = 'red'
   get.style.display = 'block'

    let getPrdiv = document.getElementsByClassName('Products')[0]
    getPrdiv.style.display = 'none'
    createD.style.display = 'block'
    createD.style.display = 'flex'
    createD.style.flexWrap = 'wrap'
    let createH = document.createElement('h1')
    document.body.appendChild(createH)
    let CreatP = document.createElement('p')
    document.body.appendChild(CreatP)
    CreatP.innerHTML = "Votre Prix Total est " + getPrix + ' Dh'
    CreatP.style.textAlign ='center'
    CreatP.style.fontSize = '30px'
    createH.innerHTML = "Voici votre carte d'achat"
    createH.style.marginTop = '00px'
    createH.style.textAlign = 'center'
    createH.style.fontSize = '150px'
    console.log(getcards)
    if(objParse.length === 0) {

            
        createH.innerHTML = 'Votre card est vide'
        

    }
     
   

}





console.log(objParse)
// console.log(Card)

// let getcr = document.getElementById('cards')
// console.log(getcr)







// let E = document.getElementsByClassName('Cardsd')[0]
// console.log(E)










// function TEst() {

//       let url = "Ecomerce.json";
//       fetch(url)
//       .then(response => response.json()
//       .then(data => {
//         console.log(data)
//       }))

// }

// TEst()


// let V = window.localStorage.getAttribute('Produits')
// let Ve = JSON.parse(V)
// console.log(Ve)

// const Arr = [{a:'u', prx:10} , {b:'Y', prx:15} , {d:'o', prx:30}, {K:'U', prx:40}]
// const initi = 0
// let Ty = Arr.map((el) => {

//      return el.prx

// })


// console.log(Ty)


// let ini = 0
// let NewArr = Ty.reduce((acc ,curr) => {
//     return  acc + curr
// })
// console.log(NewArr)
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// let f = "5"

// let c = parseInt(f)
// console.log(c)
// console.log(typeof f)
// console.log(typeof c)
// console.log(Card)




















// let CreateNewarr = Card.map((ele) => {

      
//     return ele.fields.title = [{titre:ele.fields.title} , {id:ele.sys.id}]
      

// })
// console.log(CreateNewarr)
// let filtring = CreateNewarr.filter((elem) => {
   


    
//       return elem[1].id 

          

// })


// let TestingObj = [{id: '1' , nom:'bouziane'}, {id:'2', nom:'youssef'}, {id:'3', nom:'rabiaa'} , {id:'4', nom:'abderahim'}, {id:'5', nom:'ferdaouss'}, {id:'6', nom:'taha'}, {id:'7', nom:'badin'},{id:'8', nom:'salim'} ]


// let Ca =  TestingObj.map((e) => {
           
//   return e.id

// })
// console.log(Ca)






// let Tu = filtring.map((el) => {

//        return el[1].id

// })
// console.log(Tu)



// function Looping() {
       
//     for(let k = 0 ; k < filtring.length ; k++) {

//             console.log(filtring[k])
          
//             for(let k2 = 0 ; k2 < TestingObj.length; k2++) {

                
//                 if(filtring[k][1].id === TestingObj[k2].id) {
                

//                   filtring[k].push(TestingObj[k2])



//                 }


//             }


//     }


// }

// Looping()

let arrtest = [{id:'1', name:'youssef'}, {id:'2', name:'taha'}]





let fil1 = objParse.filter((ele) => {

    return ele.sys.id === '1' 
     

})


// function A () {
     

//     for(let K = 0 ; K < fil1.length ; K++) {
//       console.log(fil1[K].sys.id)
//           for(let K2 = 0 ; K2< arrtest.length ; K2++) {

           
                
//                 // if(fil1[K].sys.id === arrtest[K2].id) {
                

//                 //   fil1[K].push(arrtest[K2])
//                 console.log(arrtest[K2].id)


//           }



//     }



// }

// A()



console.log(fil1)
let fil2 = objParse.filter((ele) => {

  return ele.sys.id === '2'
   

})
console.log(fil2)
let fil3 = objParse.filter((ele) => {

  return ele.sys.id === '3'
   

})
console.log(fil3)
let fil4 = objParse.filter((ele) => {

  return ele.sys.id === '4'
   

})
console.log(fil4)


let fil5 = objParse.filter((ele) => {

  return ele.sys.id === '5'
   

})
console.log(fil5)

let fil6 = objParse.filter((ele) => {

  return ele.sys.id === '6'
   

})
console.log(fil6)
let fil7 = objParse.filter((ele) => {

  return ele.sys.id === '7'
   

})
console.log(fil7)

// let fil8 = objParse.filter((ele) => {

//   return ele.sys.id === '8'
   

// })
// console.log(fil8)




let Groupeofarr = [{id:'1', arr: fil1 } , { id:'2', arr: fil2} ,{id:'3', arr: fil3} , {id:'4', arr: fil4} , {id:'5',arr: fil5 }, {id:'6', arr: fil6} , {id:'7', arr: fil7}]
console.log(Groupeofarr)


let Test = Groupeofarr.map((ele) => {
        
     return   ele.arr.length

} )

console.log(Test)

// let test2 = Test.push({id:'3', arr:'abc'})
// console.log(Test)













let GetC = document.getElementById('Card2')
GetC.style.display = 'flex';
GetC.style.flexWrap = 'wrap';
GetC.style.display = 'none';




let SrcI;
console.log(GetC.children)
let creatBu = document.createElement('button')


let Mapping = Groupeofarr.map((el) => {
    let getPc = document.getElementsByClassName('Pr')[0]
    console.log(getPc)
   
    
  let crea = document.createElement('div')
  crea.setAttribute("class", "Items")
  crea.setAttribute('data-id', el.id )
  console.log(crea)

  let createBt = document.createElement('button')
  let creaB = document.createElement('button')
  creaB.style.border = 'none'
  creaB.innerHTML = '-'
  creaB.style.width = '125px';
  creaB.style.height = '30px';
  creaB.style.marginLeft = '130px';
  creaB.style.marginTop = '-30px'
  // creaB.style.backgroundColor = 'blue';
  creaB.style.color = 'black';
  creaB.setAttribute("data", el.id)
  crea.appendChild(createBt)
  crea.appendChild(creaB)
  createBt.setAttribute("data",el.id)
  createBt.innerHTML = '+'
  // createBt.style.backgroundColor = 'red'
  createBt.style.color = 'black'
  createBt.style.height = '30px';
//   let geti = document.getElementsByClassName('Items')[0]
createBt.style.width = '125px'
createBt.style.border = 'none'

  if(el.arr.length === 0) {
    createBt.style.display = 'none';
    creaB.style.display = 'none';
  }




// createBt.style.position = 'absolute'
// createBt.style.marginTop = '300px'

  

   
createBt.onclick = function (){
    // alert(this.parentElement.getAttribute('data-id'))


}

creaB.onclick = function () {


  console.log(this.parentElement)
  console.log(this.parentElement.children.item(3))
  let makeitp = parseInt(this.parentElement.children.item(3).innerHTML)
  console.log(makeitp)
  console.log(typeof makeitp)
 console.log(this.parentElement.children.item(4))
 let parsep = parseInt(this.parentElement.children.item(4).innerHTML)
 console.log(parsep)
 console.log(typeof parsep)
 this.parentElement.children.item(4).innerHTML = parsep - 1 + ' Produits';
 console.log(el.arr[0].fields.price)
 this.parentElement.children.item(3).innerHTML = makeitp - el.arr[0].fields.price + ' Dh'

//  alert('i am -')

let makep = parseInt(geton.innerHTML)
console.log(makep)
console.log(typeof makep)

geton.innerHTML = makep - el.arr[0].fields.price + ' Dh';





let FF2 = Card.filter((elem) => {
           
  return elem.sys.id === this.parentElement.getAttribute('data-id')

})
console.log(FF2)
console.log(FF2.length)
console.log(this.parentElement)


let Button1 = this.parentElement.children.item(0)

let Button2 =  this.parentElement.children.item(1)

let im = this.parentElement.children.item(2)

let pr = this.parentElement.children.item(3)

let pr2 = this.parentElement.children.item(4)


if(FF2.length === 0) {
  Button1.style.display = 'none';
  Button2.style.display = 'none';
  im.style.display = 'none';
  pr.style.display = 'none';
  pr2.style.display = 'none';
}
// console.log(Groupeofarr)

  
 

  // console.log(Card)



//   let FiltCrd1 = Card.filter((ele) => {
      
//        return ele.sys.id === '1'

//   })
//   console.log(FiltCrd1)


//   let FiltCrd2 = Card.filter((ele) => {
      
//     return ele.sys.id === '2'

// })
// console.log(FiltCrd2)

// let FiltCrd3 = Card.filter((ele) => {
      
//   return ele.sys.id === '3'

// })
// console.log(FiltCrd3)

// let FiltCrd4 = Card.filter((ele) => {
      
//   return ele.sys.id === '4'

// })
// console.log(FiltCrd4)

// let FiltCrd5 = Card.filter((ele) => {
      
//   return ele.sys.id === '5'

// })
// console.log(FiltCrd5)

// let FiltCrd6 = Card.filter((ele) => {
      
//   return ele.sys.id === '6'

// })
// console.log(FiltCrd6)

// console.log(Objects)
// let ArrF = [FiltCrd1 , FiltCrd2 , FiltCrd3 , FiltCrd4 , FiltCrd5 , FiltCrd6]


  


// let b = Card.filter((el) => {
    
//     if(el.sys.id === this.getAttribute('data')) {
//       return el
//     }
 

// })
// console.log(b)

// console.log(Card)



// let Y = b.filter((ele) => {
     
//   return b.indexOf(ele) != 0

// })

// console.log(Y)
// console.log(Card)




  // Card = objParse = objParse.filter((ele) => ele.sys.id != this.getAttribute("data"))

  // Card = objParse = objParse.filter((ele) => ele.sys.id !== this.getAttribute("data")).filter((el) => {
  //   return objParse.indexOf(el) != 0
  // })

  // console.log(Card)
  
 // if ele.sys.id === this.gettatribut('data')
 //{
    // return ele.in //

//  } //


  // Card = objParse = objParse.filter((ele) => ele.sys.id != this.getAttribute("data"))









  // Card = objParse = objParse.map((elem) => {

   
          
  //         return elem

        
      

  // } ).filter((ele) => {


  //      return ele.sys.id === this.getAttribute("data")
       

  // }).filter((ele) => {

  //      return objParse.indexOf(ele) != 0
 
  // })

  // console.log(Card)


  // let Caa = Card.filter((e) => {
  //   if (e.sys.id !== this.getAttribute('data')) {

  //     return Card.lastIndexOf(e)

  //   }

  // })
  // console.log(Caa)

  // let Caa2 = Card.filter((e) => {

  //       return e.sys.id === this.getAttribute("data")

  // }).map((e) => {
          
  //       return Card.lastIndexOf(e)
     
  // })
  // console.log(Caa2)



//   let getPrdee = window.localStorage.getItem("Produits")
// let objParseee = JSON.parse(getPrdee)
// console.log(objParseee)

  // Card = objParse = objParse.map((ele) => ele)
  // console.log(Card)

  // let filtc = Card.filter((ele) => {
        
  //      return ele.sys.id === this.getAttribute("data")

  // })

 
//    Card = objParse = objParse.filter((ele) => ele.sys.id != this.getAttribute("data"))
//  console.log(Card)

//  let D = Card.filter((el) => {
       
//      return el.sys.id === "1"

//  })
//  console.log(D)
// creatDivpr.style.display = 'none'
// console.log(Card)
// window.localStorage.setItem('Produits', JSON.stringify(Card))





let Found = Card.find(el => el.sys.id === this.getAttribute('data'))

console.log(Found)

console.log(Card.indexOf(Found))


console.log(Card)

let filtrCard = Card.filter((el) => {

          
    return el != Found


})

console.log(filtrCard)

Card = filtrCard


console.log(Card)



let filC = Card.filter((el) => {

    return el.sys.id === this.getAttribute('data')


})

console.log(filC)


window.localStorage.setItem('Produits', JSON.stringify(Card))






 
}
  

  


  createBt.onclick = function () {
    let getPc = document.getElementsByClassName('Pr')[0]
    console.log(getPc)

  
    // if(this.getAttribute('data') === getPc.getAttribute('data') ) {
    //     console.log(getPc)
    // }
    // else {
    //     alert('no')
    // }

    // 

    
    console.log(this.parentElement.children)
    console.log(this.parentElement.children.item(0))
    console.log(this.parentElement.children.item(2))
    console.log(this.parentElement.children.item(3))
    console.log(this.parentElement.children.item(4))
    // let makenum = this.parentElement.children.item(3).innerHTML
        let makenum = this.parentElement.children.item(4).innerHTML

    console.log(typeof makenum)
    let makeitn = parseInt(makenum)
    console.log(makeitn)
    this.parentElement.children.item(4).innerHTML = makeitn + 1 + ' Produits';
    console.log(Groupeofarr)
    console.log(Card)
    console.log(this.parentElement.children.item(3).innerHTML)
    let prs = parseInt(this.parentElement.children.item(3).innerHTML)
    console.log(prs)
    console.log(typeof prs)
    console.log(el.arr[0].fields.price)
    console.log(prs)
    // alert(this.getAttribute('data'))
    // this.parentElement.children.item(2).innerHTML = prs + el.arr[0].fields.price;
    this.parentElement.children.item(3).innerHTML = prs + el.arr[0].fields.price;
    console.log(typeof Prixtotal)
    console.log(typeof el.arr[0].fields.price)
    console.log(geton)
    let makegetPar = parseInt(geton.innerHTML)
    console.log(typeof makegetPar)

    geton.innerHTML = makegetPar + el.arr[0].fields.price

 
    // let Parse = parseInt(this.parentElement.children.in.item(2))
    // console.log(Parse)
    // console.log(typeof Parse)

    let FF = Card.filter((elem) => {
           
          return elem.sys.id === this.parentElement.getAttribute('data-id')

    })
    console.log(FF)
    console.log(FF.length)
    console.log(Groupeofarr)

    console.log(Card)

    console.log(Card.length)
    
    console.log(this.parentElement.getAttribute("data-id"))
    console.log(FF.length)

    // let C2 = Card.filter((elem) => {

    //      return this.parentElement.getAttribute('')

    // })

    // let FF2 = Card.filter((el) => {
    //     if(el.sys.id === this.getAttribute('data'))
    //     return el
    // })

    // console.log(FF2)

    // let FF3 = FF2.map((e) => {
    //     return e.fields.title
    // })

    // console.log(FF3)

    
    // console.log(Card)


    
    // let FF2 = Card.filter((elem) => {

    //        elem.sys.id === this.getAttribute('data')

    // })

    // for(let i = 0 ; i < Groupeofarr.length ; i++) {
    //     // console.log(Groupeofarr[i].arr)

    //     for(let H = 0 ; H < Groupeofarr[i].arr.length ; H++) {
                
    //         // console.log(Groupeofarr[i].arr[H])
    //         if(this.getAttribute('data') === Groupeofarr[i].arr[H]) {
    //             Card.push(Groupeofarr[i].arr[H])
    //         }

    //     }

    //     // for(let j = 0 ; j < Groupeofarr[i].length ; j++) {

    //     //       console.log(Groupeofarr[i][j].arr)

    //     // }
    // }
         
    // let ts = Groupeofarr.map((e) => {

    //     return e
    // })
    // console.log(ts)

    // let ts2 = ts.filter((e) => {
    //     return e.arr
    // })
    // console.log(ts2)


    
    // console.log(Card)

    // let ñ = Card.filter((ele) => {
    //     // return ele.sys.id === this.getAttribute('data')
    //     if(ele.sys.id === this.getAttribute('data')) {
    //         Card.push(ele)
    //     }
    // })
    // console.log(ñ)
    console.log(Card)
    console.log(Objects.items)
     
    let obje = Objects.items.map((e) => {
        return e
    })

    console.log(obje)

    let obj2 = obje.filter((el) => {
        
        if(this.getAttribute("data") === el.sys.id) {
            Card.push(el)
        }

    })

    console.log(obj2)
    console.log(Card)

    let obje3 = Card.filter((e) => {
        return e.sys.id === this.getAttribute('data')
    })
    console.log(obje3)

    
   
    window.localStorage.setItem('Produits', JSON.stringify(Card))





    // let D = Groupeofarr.map((e) => {
       
    //      e.map((e) => {
    //         if(e.sys.id === this.getAttribute('data')) {
    //             return e.sys.title
    //         }
    //      })

    // })

    // console.log(D)







    // console.log(FF2)
    // let FF3 = FF2.map((e) => {
    //     return Card.push(e)
    // })




    



    



    // let DD = parseInt(makenum) 
    // console.log(typeof DD)
    // console.log(parseInt(makenum))
    // let C = Groupeofarr.map((el) => {
        
    //      if(el.id === this.getAttribute('data') ) {
    //         return el
    //      }
    //      else {
    //         return ' '
    //      }

    // })

    // let Cc = Groupeofarr.filter((ele) => {

    //        if(ele.id === this.getAttribute('data')) {
    //         return ele.arr.push({name:'youssef', secondn:'bouziane'})
    //        }

    // })
    
    // console.log(Cc)

    // Cc2 = Cc.map((el) => {
    //    return  el.arr.push({name:'youssef', secondn:'Bouziane'})

    // })

    // console.log(Cc2)
 
     
    
     
      
  }

  GetC.appendChild(crea)
 console.log(el.arr)
let tyu = el.arr.map((e) => {


    return e.fields.price

  


})
console.log(tyu)





const initialValue = 0;
const sumWithInitial = tyu.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
console.log(typeof sumWithInitial)








 if(el.id === '1') {
  SrcI = 'https://planetsport.ma/48037-home_default/chaussures-champion-rr-champ-elemen-1122.jpg'
 }

 if(el.id === '2') {
  SrcI = 'https://planetsport.ma/48012-home_default/chaussures-champion-rr-champ-mix-1122.jpg'
 }
 if(el.id === '3') {
  SrcI =  "https://i.ebayimg.com/thumbs/images/g/T9QAAOSwtwBjI~xi/s-l300.jpg"
 }
 if(el.id === '4') {
  SrcI =  "https://contents.mediadecathlon.com/p1985520/k$eb8ed3a45ad9172f8ddc862ea1c5fa48/chaussures-de-running-homme-kalenji-run-100-gris.jpg?format=auto&quality=40&f=452x452"
 }

 if(el.id === '5') {
  SrcI =  "https://planetsport.ma/35024-home_default/chaussures-champion-cl-0322.jpg"
 }
 if(el.id === '6') {
  SrcI = "https://photos6.spartoo.com/photos/202/20297323/20297323_500_A.jpg"
 }
 if(el.id === '7') {
  SrcI = "https://photos6.spartoo.com/photos/215/21544293/21544293_350_A.jpg"
 }

  console.log(el.id)

  if (el.arr.length > 0) {

        let creatI = document.createElement('img')
        crea.appendChild(creatI)
        creatI.setAttribute("src", SrcI)
       
        let CreateP = document.createElement('p')
        crea.appendChild(CreateP)
        let creatP2 = document.createElement('p')
        crea.appendChild(creatP2)
        creatP2.innerHTML = el.arr.length + ' Produits'
        creatP2.setAttribute("class", "Pr")
        creatP2.setAttribute("data", el.id )
        creatP2.style.color = 'red'
        CreateP.innerHTML =  sumWithInitial
        crea.style.display = 'flex'
        crea.style.flexDirection = 'column'
        crea.style.width = '50%'
        creatI.style.height = '200px'
        creatI.style.width = '200px'
        // crea.style.flexDirection = 'row'
        // let createName = document.createElement('p')
        // crea.appendChild(createName)
        // createName.innerHTML = 'Chaussures'

        // let createDivis = document.createElement('div')
        // createDivis.appendChild(crea)
        // let creatD = document.createElement('div')
        // document.appendChild(creatD)
        // creatD.appendChild(crea)

        // let cred = document.createElement('div')
        // let crep = document.createElement('p')
        // cred.appendChild(crep)
        // crep.innerHTML = 'chaussures'
        // crd.appendChild(cred)

        let creaDi = document.createElement('div')
        crd.appendChild(creaDi)
        creaDi.appendChild(crea)
        creaDi.setAttribute('class', 'newDiv')
        console.log(creaDi)
        let creatD2 = document.createElement('div')
        creaDi.appendChild(creatD2)
        creatD2.setAttribute('class', 'secondD')
        console.log(creatD2)
        creaDi.style.display = 'flex'
        let creatPar = document.createElement('p')
        creatD2.appendChild(creatPar)
        creatPar.innerHTML = 'Chaussures'
        creaDi.style.padding = '10px'
        creatPar.style.marginRight = '600px'
        crea.style.border= '0,5px black solid'
        crea.style.boxShadow = '0 5px 25px rgba(1 1 1 / 15%) '  
        

        // console.log(crd)

        // let creatD = document.createElement('div')
        //  creatD.appendChild(cred)
        //  creatD.appendChild(crea)
        

        



  }





})



let Strnm = "10 Youssef"
console.log(Strnm)
let Strnm2 = parseInt(Strnm)
console.log(Strnm2)
console.log(typeof Strnm2)


let Strnm3 = "144 de ce produits"
let Strmn4 = parseInt(Strnm3)
console.log(Strmn4)




console.log(Card)
console.log(Card[0])


let TTs = Card.filter((e) => {

      return e.sys.id !== '1' && Card.lastIndexOf(e) != 0

})
console.log(TTs)


//methode 1 //

//  for(let j = 0 ; j < Card.length ; j++) {

//      if(Card[j].sys.id === '1') {
//        break;
//      }

//      console.log(Card[j])
//      console.log(Card.lastIndexOf(Card[j]))

//      if(Card.lastIndexOf(Card[j]) === 0) {
//       break
//      }
// }

//Methode2 //


  // for(let i = 0 ; i < Card.length ; i++) {

  //     if (Card[i].sys.id === '1') {
          
  //        continue

  //     }
     
  //    console.log(Card[i])
  //    console.log(Card.lastIndexOf(Card[i]))

  // }





// let FilC = Card.filter((e) => {

//      return Card.lastIndexOf(e.sys.id === '1') 

// })
// console.log(FilC)




// let TTs = [{id:'1', n:'u'}, {id:'2', n:'u'} , {id:'3', n:'u'} , {id:'4', n:'u'} ]

// let Y = ["a", "a", "b"]

// console.log(TTs.first({id:'1', n:'u'}))

// let K = TTs.filter((e) => {

//      return e != TTs.lastIndexOf({id:'1', n:'u'})


// })
// console.log(K)


