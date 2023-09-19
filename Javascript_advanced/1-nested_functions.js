
function outer(){
    alert(globalVariable)
    course = "Holberton"
    
    function inner(){
        alert(globalVariable + " " + course)
        
       
        exclamation = "!"
        
        
        

       function inception(){
            alert(globalVariable + " " + course + exclamation)
        }
        inception();
    
    }
    inner();
}
outer();
inner();
inception();