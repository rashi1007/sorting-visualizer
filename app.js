const container = document.querySelector(".data-container"); 
  

function generatebars(num = 38) { 
    

  for (let i = 0; i < num; i += 1) { 
  
    const value = Math.floor(Math.random() * (135 - 5) + 5);  
      
    const bar = document.createElement("div"); 
 
    bar.classList.add("bar"); 
  
    // Provide height to the bar 
    bar.style.height = `${value * 3}px`; 
  
    // Translate the bar towards positive X axis  
    bar.style.transform = `translateX(${i * 30}px)`; 
      
    // To create element "label" 
    const barLabel = document.createElement("label"); 
  
    // Assign value to "label" 
    barLabel.innerHTML = value; 
 
    bar.appendChild(barLabel); 

    container.appendChild(bar); 
  } 
} 

async function SelectionSort() { 
  let bars = document.querySelectorAll(".bar"); 
   let min_idx = 0; 
   for (let i = 0; i < bars.length; i += 1) { 
  
    min_idx = i; 
  
    // Provide aquablue color to the ith bar 
    bars[i].style.backgroundColor = "rgb(16, 124, 156)"; 
    for (let j = i + 1; j < bars.length; j += 1) { 
  
      // Provide red color to the jth bar 
      bars[j].style.backgroundColor = "rgb(150, 40, 40)"; 
      
      await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 100) 
      ); 
  
      // To store the integer value of jth bar to var1  
      let val1 = parseInt(bars[j].childNodes[0].innerHTML); 

      let val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 
        
      if (val1 < val2) { 
        if (min_idx !== i) { 
  
          // Provide gray color to the (min-idx)th bar 
          bars[min_idx].style.backgroundColor = "gray"; 
        } 
        min_idx = j; 
      } else { 
  
        // Provide gray color to the jth bar 
        bars[j].style.backgroundColor = "gray"; 
      } 
    } 
  
    let temp1 = bars[min_idx].style.height; 
    let temp2 = bars[min_idx].childNodes[0].innerText; 
    bars[min_idx].style.height = bars[i].style.height; 
    bars[i].style.height = temp1; 
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
    bars[i].childNodes[0].innerText = temp2; 
 
    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 10) 
    ); 
  
    // Provide gray color to the (min-idx)th bar 
    bars[min_idx].style.backgroundColor = "gray"; 
  
    // Provide aquamarine color to the ith bar 
    bars[i].style.backgroundColor = "aquamarine"; 
  } 
  
  document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "rgb(16, 124, 156)"; 
  
  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "rgb(16, 124, 156)";
} 

async function BubbleSort() {
    let bars = document.querySelectorAll(".bar"); 
    for (let i = 0; i < bars.length; i += 1) {

        for (let j = 0; j < bars.length-i-1; j += 1) {

          // Provide red color to the jth bar 
            bars[j].style.backgroundColor = "rgb(150, 40, 40)"; 

            // Provide red color to the (j + 1)th bar 
            bars[j + 1].style.backgroundColor = "rgb(150, 40, 40)";

            await new Promise((resolve) => 
                setTimeout(() => { 
                    resolve(); 
                }, 100) 
            );

            // To store the integer value of jth bar to value1
            let value1 = parseInt(bars[j].childNodes[0].innerHTML); 

            let value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

            if (value1 > value2) { 

              // swap
                let temp1 = bars[j].style.height;
                let temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp1;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].childNodes[0].innerText = temp2;

                } 

                // Provide aquablue color to the jth bar
                bars[j].style.backgroundColor = "rgb(16, 124, 156)"; 

                // Provide aquablue color to the (j + 1)th bar
                bars[j + 1].style.backgroundColor = "rgb(16, 124, 156)";
        }

        // Provide aquamarine color to the sorted bar
        bars[bars.length - i - 1].style.backgroundColor = "aquamarine";
    }

    document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "rgb(16, 124, 156)"; 
  
  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "rgb(16, 124, 156)";
}

async function InsertionSort() { 
    let bars = document.querySelectorAll(".bar"); 
    
    // Provide aquamarine colour to 0th bar 
    bars[0].style.backgroundColor = "aquamarine"; 
    let j=0;
    for (let i = 1; i < bars.length; i += 1) { 

      j = i - 1; 
    
      // To store the integer value of ith bar to key  
      let key = parseInt(bars[i].childNodes[0].innerHTML); 
    
      let height = bars[i].style.height; 
    
      //Provide aquablue color to the ith bar  
      bars[i].style.backgroundColor = " rgb(16, 124, 156)"; 
         
      await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 100) 
    ); 
    
      // For placing selected element at its correct position  
      while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) { 
          
        // Provide aquablue color to the jth bar 
        bars[j].style.backgroundColor = "rgb(16, 124, 156)"; 
          
        // For placing jth element over (j+1)th element 
        bars[j + 1].style.height = bars[j].style.height; 
        bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText; 
     
        j = j - 1; 
    
        await new Promise((resolve) => 
          setTimeout(() => { 
            resolve(); 
          }, 100) 
        ); 
          
        // Provide aquamarine color to the sorted part 
        for(let k = i ; k >= 0 ; k--){ 
          bars[k].style.backgroundColor = "aquamarine"; 
        } 
      } 
    
      // Placing the selected element to its correct position 
      bars[j + 1].style.height = height; 
      bars[j + 1].childNodes[0].innerHTML = key; 
         
      await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 100) 
      ); 
        
      // Provide light green color to the ith bar 
      bars[i].style.backgroundColor = "aquamarine"; 
    }
  document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "rgb(16, 124, 156)";

  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "rgb(16, 124, 156)";

}

async function Heapify(n, i) {
  let bars = document.querySelectorAll(".bar");
  let largest = i; 
  let l = 2 * i + 1; 
  let r = 2 * i + 2; 
  
  
  if (
    l < n &&
    Number(bars[l].childNodes[0].innerHTML) >
      Number(bars[largest].childNodes[0].innerHTML)
  )
    largest = l;
  
  
  if (
    r < n &&
    Number(bars[r].childNodes[0].innerHTML) >
      Number(bars[largest].childNodes[0].innerHTML)
  )
    largest = r;
  
  
  if (largest != i) {
    bars[largest].style.backgroundColor = "rgb(150, 40, 40)";
    let temp1 = bars[i].style.height;
    let temp2 = bars[i].childNodes[0].innerText;
    bars[i].style.height = bars[largest].style.height;
    bars[largest].style.height = temp1;
    bars[i].childNodes[0].innerText = bars[largest].childNodes[0].innerText;
    bars[largest].childNodes[0].innerText = temp2;
  
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );

    bars[largest].style.backgroundColor = "gray";
  
    
    await Heapify(n, largest);
  }
}

async function HeapSort(n=38) {
  let bars = document.querySelectorAll(".bar");
  
  // Build heap
  for (let i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }
  
  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
  
    // Move current root to end
    bars[0].style.backgroundColor = "rgb(150, 40, 40)";
    let temp1 = bars[i].style.height;
    let temp2 = bars[i].childNodes[0].innerText;
    bars[i].style.height = bars[0].style.height;
    bars[0].style.height = temp1;
    bars[i].childNodes[0].innerText = bars[0].childNodes[0].innerText;
    bars[0].childNodes[0].innerText = temp2;
    bars[i].style.backgroundColor = "aquamarine";
  
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );
  
    // Call max Heapify on the reduced heap
    await Heapify(i, 0);
  }
  bars[0].style.backgroundColor = "aquamarine";

  document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "rgb(16, 124, 156)"; 

  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "rgb(16, 124, 156)";

  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "rgb(16, 124, 156)";
}

async function MergeSort() {
  let bars = document.querySelectorAll(".bar");
  
}

generatebars(); 
  
function generate() 
{ 
  window.location.reload(); 
}
  
function disable() 
{ 
  document.getElementById("Button1").disabled = true; 
  document.getElementById("Button1").style.backgroundColor = "gray"; 

  document.getElementById("Button2").disabled = true; 
  document.getElementById("Button2").style.backgroundColor = "gray";
  
  document.getElementById("Button3").disabled = true; 
  document.getElementById("Button3").style.backgroundColor = "gray";

  document.getElementById("Button4").disabled = true; 
  document.getElementById("Button4").style.backgroundColor = "gray";

  document.getElementById("Button5").disabled = true; 
  document.getElementById("Button5").style.backgroundColor = "gray";
}