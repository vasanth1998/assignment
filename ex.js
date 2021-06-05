

function fetchData(selectedValue){
   fetch('https://reqres.in/api/users')
   .then(Response => {
       
       if(!Response.ok){
           throw Error("Error");
       }
      return Response.json();
   })
   .then( data => {
    
      if(selectedValue==1){
        data.data.sort(function(a,b){ //ascending order sort by first name
          if(a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
          if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
        });
      }
      /* */
      if(selectedValue==2){
       data.data.sort(function(a,b){ //ascending order, sort by last name
        if(a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
        if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
      });
      }
      /* data.data.sort(function(a,b){ //sort number
         return a.score - b.score;
       });*/



       console.log(data.data);
       const html = data.data.map(users => {
           //return `
           //<div class="users">
              //  <p><img src=" ${users.avatar}" alt="${users.first_name}" </p>
              //  <p>First Name: ${users.first_name} </p>
              //  <p>Last Name: ${users.last_name} </p>
              //  <p>Email: ${users.email} </p>
           // </div>
          // `;
          // ` template literal symbol available before keyboard number 1
           //return ' <p>Name:'+  users.first_name + '</p>'; without template literal symbol
            
            return `  
            <div class="card column">
              <div class="img">
                <img src="${users.avatar}">
              </div>
              <div class="top-text">
                <div class="name">${users.first_name}  </div>
                <p>${users.last_name}</p>
              </div>
              <div class="bottom-text">
                <div class="text"><h4>Email:-${users.email}<h4> </div>
                
              </div>
            </div>
            
          
            
         `;
       
        

       } )
       .join(" ");
       console.log(html);
       
       document
       .querySelector('#app')
       .innerHTML=html;
   })
   .catch(error =>{
       console.log(error);
   });
   
}
fetchData();
function GetSelectedTextValue(ddlFruits) {
  
  var selectedValue = ddlFruits.value;
  
  fetchData(selectedValue);
}