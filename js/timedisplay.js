window.addEventListener('load', ()=>{
    let elements = document.getElementsByClassName("timedisplay");
    for (let element of elements) {
        let display = element.getAttribute("display");
        let timeSource = element.innerHTML;
        let date = new Date(timeSource);
        if (date instanceof Date && !isNaN(date)){
          switch(display){
            case "date":
              element.innerHTML = date.toLocaleDateString();
              break;
            case "time":
              element.innerHTML = date.toLocaleTimeString();
              break;
            default:
              element.innerHTML = date.toLocaleString();
              break;
          }
        }
    }
}) 