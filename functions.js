function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // Note, need to use '' because of "" in HTML
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +'<input type="button" class="important" onclick="Important(this.parentNode)" value="!" />'+
      newTask;
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
      
      input.value="";
      
    }
  }
  
  
  
  // change styling used for given item
  function markDone (item) { 
      item.className = 'finished';
  }
  
  
  function remove (item) {
    // remove item completely from document
    if(item.className == 'finished') { 
    item.remove();}
    else{
      alert("Complete the Task First");
    }
  }
  
  
  function doAbout() {
    var name=document.getElementById("divabout");
    name.innerHTML="This is a simple TODO list created using HTML, CSS, Javascript.To know more visit :";
    // name.className="yellowbackground";
  }
  
  
  function clearAbout() {
    var input = document.getElementById("divabout");
    
      input.innerHTML="";
    
  }
  function Important(item){
    item.className="important";
  }
  