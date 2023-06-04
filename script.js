function hideLoader(){
    document.getElementById("loading").remove();
}

setTimeout(() => {
   hideLoader() 
}, 5000);