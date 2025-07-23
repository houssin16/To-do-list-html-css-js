const input = document.querySelector('input');
const submit = document.querySelector('.add');
const tasks = document.querySelector('.tasks');
const spanbutton = document.querySelector('.del')


  


let ArayyOfTaSks;
//////////Ckeck//////////////
if(window.localStorage.getItem('Tasks')){

  ArayyOfTaSks = JSON.parse(localStorage.getItem('Tasks'))
}else{

  ArayyOfTaSks =[];
}

submit.onclick = function(){

    if (input.value !==  "" ) {

        AddtesksToArayy(input.value);
        input.value = "";
    }
}

function AddtesksToArayy(TakstValue){
 
  const Task = {
    id:Date.now(),
    title:TakstValue,
    Completed:false,
};
 //////Push Task To Arayy/////////

 ArayyOfTaSks.push(Task);



 //////Add Tasks To Page
 AddElemetToPageFromArray(ArayyOfTaSks);
  ///////////Local Storitg/////////////
 
AddDataLocalStoRatgefrom(ArayyOfTaSks)
}




const body = document.querySelector('.r')
function AddElemetToPageFromArray(ArayyOfTaSks){
    tasks.innerHTML =" ";
  ArayyOfTaSks.forEach((e) => {
    let div = document.createElement('div');
    div.className = "task";
    ////Check ////
    if (e.Completed == true) {
      div.className = "task done";

    }
    div.setAttribute("data-id", e.id);
    div.appendChild(document.createTextNode(e.title));
     let span = document.createElement('span');
     span.classList.add("del");
     span.appendChild(document.createTextNode("delete"));
     div.appendChild(span);
       tasks.appendChild(div)
       body.appendChild(tasks)
   
  });
}

function AddDataLocalStoRatgefrom(AksourHoussin)

{

window.localStorage.setItem("Tasks" , JSON.stringify(AksourHoussin))

}


function GitDataFromStorig(){


  let data = window.localStorage.getItem("Tasks")
  if (data) {
    let taskss = JSON.parse(data)
    AddElemetToPageFromArray(taskss)
   
  }
}

GitDataFromStorig();



tasks.addEventListener('click' ,function(m){
if (m.target.classList.contains("del")) {
   m.target.parentElement.remove()
   deleteTesks(m.target.parentElement.getAttribute('data-id'))
 }
  if (m.target.classList.contains("task")) {
    m.target.classList.toggle('done')
    ToggleStatustasksasksWith(m.target.getAttribute('data-id'))
  }
})



function deleteTesks(taskiD){
  
//for (let i = 0; i < ArayyOfTaSks.length; i++) {
  //console.log(`${ArayyOfTaSks[i].id} === ${taskiD}`);
  //}
 
  ArayyOfTaSks = ArayyOfTaSks.filter((item) => (item.id) != taskiD);
  AddDataLocalStoRatgefrom(ArayyOfTaSks)

}

function ToggleStatustasksasksWith(taskiD) {

   for(let i = 0; i < ArayyOfTaSks.length; i++){
   if(ArayyOfTaSks[i].id == taskiD){

     ArayyOfTaSks[i].Completed == false ? (ArayyOfTaSks[i].Completed = true) :  (ArayyOfTaSks[i].Completed = false)
   }
   }
   AddDataLocalStoRatgefrom(ArayyOfTaSks)
}