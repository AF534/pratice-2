//console.log('welcome to Notes app');
shownotes();

let addBtn = document.getElementById('addBtn');
 addBtn.addEventListener('click',function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    /*if (notes == null) {
         notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
   }*/
   
   notesobj.push(addTxt.value);
   localStorage.setItem('notes',JSON.stringify(notesobj ));
   addTxt.value = '';
  //console.log(notesobj);
  shownotes();
 })
 function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
   }
   else{
       notesobj = JSON.parse(notes);
  }
  let html = '';
  notesobj.forEach(function(element, index) {
    html += ` <div class=" noteCard mx-2 my-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Notes ${index + 1 }</h5>
      <p class="card-text">${element}</p>
      <button id='${index}' onclick ='deletenote(this.id)' class="btn btn-primary">Deletes Note</button>
    </div>
    </div>`;
  });  
  let noteselm = document.getElementById('notes');
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  }
  else{
    noteselm.innerHTML = 'Nothing! Add your notes'
  }
 }
 function deletenote(index){
    //console.log('I am deleting', index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
   }
   else{
       notesobj = JSON.parse(notes);

 }
 
 notesobj.splice(index,1);
 localStorage.setItem('notes',JSON.stringify(notesobj ));
  shownotes();
 }
 let search = document.getElementById('searchtxt')
 search.addEventListener('click',function (e) {
  let inputVal = search.value.toLowerCase();
  
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputVal)){
          element.style.display = "block";
      }
      else{
          element.style.display = "none";
      }
      
  })
})
