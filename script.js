function plus(e){
     
    switch(e.key){
             
    case " ":
        let clickCount = Number(document.getElementById('clicksCountSpan').textContent);
        clickCount++;
        document.getElementById('clicksCountSpan').textContent = clickCount
        break;
    }
}
     
addEventListener("keydown", plus); 