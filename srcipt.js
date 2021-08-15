window.onload=function(){
    var xturn = document.getElementById("x")
    var oturn = document.getElementById("o")
    var cell1=document.getElementById("cel1")
    var cell2=document.getElementById("cel2")
    var cell3=document.getElementById("cel3")
    var cell4=document.getElementById("cel4")
    var cell5=document.getElementById("cel5")
    var cell6=document.getElementById("cel6")
    var cell7=document.getElementById("cel7")
    var cell8=document.getElementById("cel8")
    var cell9=document.getElementById("cel9")
    var i = 1
    var box = document.getElementById("box1")
    //cell 1
    

   var c1 = 1
   var c2 = 2
   var c3 = 3
   var c4 = 4
   var c5 = 5
   var c6 = 6
   var c7 = 7
   var c8 = 8
   var c9 = 9


    var iyo1 = false
    var iyo2 = false
    var iyo3 = false
    var iyo4 = false
    var iyo5 = false
    var iyo6 = false
    var iyo7 = false
    var iyo8 = false
    var iyo9 = false


    var x = "X"
    var o = "O"
  
 
    cell1.addEventListener('click', function (){
        if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
        
    }
       setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
    
     
        if (iyo1 == false){
            iyo1= true
            i++
            if(i % 2 == 0){
                cell1.textContent = "X"
                xturn.textContent = "O-ის ჯერია"
                oturn.textContent = ""
                
                
            }
            else{
                cell1.textContent = "O"
                oturn.textContent = "X-ის ჯერია"
                xturn.textContent = ""
    
            
        }
        }   
    })

    
        
    //cell1
    //cell2
    
    cell2.addEventListener('click', function(){
        if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
        if(iyo2 == false){
          iyo2 = true
          i++
          if (i % 2 == 0){
              cell2.textContent = "X"
              xturn.textContent = "O-ის ჯერია"
              oturn.textContent = ""
              
          }
          else{
              cell2.textContent = "O"
              oturn.textContent = "X-ის ჯერია"
              xturn.textContent = ""
          }
        }
      
    })

    //cell2

    //cell3
    
    cell3.addEventListener('click', function(){
        if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
        if(iyo3 == false){
            iyo3 = true
            i++
            if (i % 2 == 0){
                cell3.textContent = "X"
                xturn.textContent = "O-ის ჯერია"
                oturn.textContent = ""
                
            }
            else{
                cell3.textContent = "O"
                oturn.textContent = "X-ის ჯერია"
                xturn.textContent = ""
            }
        }
       
    })

    //cell3
    //cell4
    
    cell4.addEventListener('click', function(){
        if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
        if(iyo4 == false){
            iyo4 = true
            i++
        if (i % 2 == 0){
            cell4.textContent = "X"
            xturn.textContent = "O-ის ჯერია"
            oturn.textContent = ""
            var c4 = "X"
        }
        else{
            cell4.textContent = "O"
            oturn.textContent = "X-ის ჯერია"
            xturn.textContent = ""
            var c4 = "O"
        }

        }
        
    })

    //cell4
   //cell5
    
   cell5.addEventListener('click', function(){
    if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
       if (iyo5 == false){
           iyo5 = true
           i++
           if (i % 2 == 0){
               cell5.textContent = "X"
               xturn.textContent = "O-ის ჯერია"
               oturn.textContent = ""
               var c5 = "X"
           }
           else{
               cell5.textContent = "O"
               oturn.textContent = "X-ის ჯერია"
               xturn.textContent = ""
               var c5 = "O"
           }
       }
   
})

//cell5

//cell2
    
cell6.addEventListener('click', function(){
    if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
    if (iyo6 == false){
        iyo6 = true
        i++
        if (i % 2 == 0){
            cell6.textContent = "X"
            xturn.textContent = "O-ის ჯერია"
            oturn.textContent = ""
            var c6 = "X"
        }
        else{
            cell6.textContent = "O"
            oturn.textContent = "X-ის ჯერია"
            xturn.textContent = ""
            var c6 = "O"
        }
    }
 
})

//cell6
//cell7
    
cell7.addEventListener('click', function(){
    if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
    if (iyo7 == false){
        i++
        if (i % 2 == 0){
            cell7.textContent = "X"
            xturn.textContent = "O-ის ჯერია"
            oturn.textContent = ""
            var c7 = "X"
        }
        else{
            cell7.textContent = "O"
            oturn.textContent = "X-ის ჯერია"
            xturn.textContent = ""
            var c7 = "O"
        }
        iyo7 = true
    }
 
})

//cell7
//cell8
    
cell8.addEventListener('click', function(){
    if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell8.style.pointerEvents = "none", 500})

    
    if(iyo8 == false){
        iyo8 = true
        i++
        if (i % 2 == 0){
            cell8.textContent = "X"
            xturn.textContent = "O-ის ჯერია"
            oturn.textContent = ""
            var c8 = "X"
        }
        else{
            
            cell8.textContent = "O"
            oturn.textContent = "X-ის ჯერია"
            xturn.textContent = ""
            var c8 = "X"
        }

    }

   
})

//cell8
//cell9
    
cell9.addEventListener('click', function(){
    if(cell1.style.color == "red" || cell2.style.color == "red" || cell3.style.color == "red" ||
    cell4.style.color == "red" || cell5.style.color == "red" || cell6.style.color == "red" ||
    cell7.style.color == "red" || cell8.style.color == "red" || cell9.style.color == "red" ){
        return
    }
    setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
    if(iyo9 == false){
        iyo9 = true
        i++
        if (i % 2 == 0){
            cell9.textContent = "X"
            xturn.textContent = "O-ის ჯერია"
            oturn.textContent = ""
            var c9 = "X"
        }
        else{
            cell9.textContent = "O"
            oturn.textContent = "X-ის ჯერია"
            xturn.textContent = ""
            var c9 = "O"
        }

    }
   
})

//cell9



var h = 0
box1.addEventListener('click', function(){
    

    var g = 1
    
    
    h++
    
        if(cell1.textContent == cell2.textContent && cell1.textContent == cell3.textContent && cell1.textContent != "" && cell2.textContent != "" && cell3.textContent != ""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})

            cell1.style.color = "red" 
            cell2.style.color = "red"
            cell3.style.color = "red"
            xturn.textContent = cell1.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
        }
       
        if(cell1.textContent == cell4.textContent && cell1.textContent == cell7.textContent && cell1.textContent != "" && cell4.textContent !="" && cell7.textContent != ""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell1.style.color = "red"
            cell4.style.color = "red"
            cell7.style.color = "red"
            xturn.textContent = cell1.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
        }
    
        if(cell2.textContent == cell5.textContent && cell2.textContent == cell8.textContent && cell2.textContent != "" && cell5.textContent != "" && cell8.textContent !=""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell2.style.color = "red"
            cell5.style.color = "red"
            cell8.style.color = "red"
            xturn.textContent = cell8.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
        }
       
        if(cell3.textContent == cell6.textContent && cell3.textContent == cell9.textContent && cell3.textContent != "" && cell6.textContent != "" && cell9.textContent !=""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell3.style.color = "red"
            cell6.style.color = 'red'
            cell9.style.color = "red"
            xturn.textContent = cell3.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
            
        }
        
        if(cell4.textContent == cell5.textContent && cell4.textContent == cell6.textContent && cell4.textContent != "" && cell5.textContent !="" && cell6.textContent !=""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell4.style.color = "red"
            cell5.style.color = "red"
            cell6.style.color = "red"
            xturn.textContent = cell4.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
            
        }
        
        if(cell7.textContent == cell8.textContent && cell7.textContent == cell9.textContent && cell7.textContent != "" && cell8.textContent !="" && cell9.textContent !=""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell7.style.color = "red"
            cell8.style.color = "red"
            cell9.style.color = "red"
            xturn.textContent = cell7.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
            
        }
        if(cell1.textContent == cell5.textContent && cell1.textContent == cell9.textContent && cell1.textContent != "" && cell5.textContent !="" && cell9.textContent !=""){
            setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell1.style.color = "red"
            cell5.style.color = 'red'
            cell9.style.color = "red"
            xturn.textContent = cell1.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
            
        }
        if(cell7.textContent == cell5.textContent && cell7.textContent == cell3.textContent && cell7.textContent != "" && cell5.textContent !="" && cell3.textContent !=""){
           setTimeout(function(){ cell1.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell2.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell3.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell4.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell5.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell6.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell7.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell8.style.pointerEvents = "none", 500})
            setTimeout(function(){ cell9.style.pointerEvents = "none", 500})
            cell7.style.color = "red"
            cell3.style.color = "red"
            cell5.style.color = "red"
            xturn.textContent = cell7.textContent + "-მა მოიგო"
            oturn.textContent = ""
            
            
        }
        if (cell1.textContent != "" && cell2.textContent != "" && cell3.textContent != "" &&
        cell4.textContent != "" && cell5.textContent != "" && cell6.textContent != "" && 
        cell7.textContent != "" && cell8.textContent != "" && cell9.textContent != "" && cell1.style.color != "red" && cell9.style.color != "red" && cell2.style.color != "red" &&
        cell3.style.color != "red" && cell4.style.color != "red" && cell5.style.color != "red" &&
        cell6.style.color != "red" && cell7.style.color != "red" && cell8.style.color != "red" ){
          
           xturn.textContent = ""
           oturn.textContent = "ფრეა"
        }
    
 
  
})
}
