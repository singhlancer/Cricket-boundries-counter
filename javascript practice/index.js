 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")

 console.log(saveEl)
 console.log(countEl)


 let count = 0

 function increment() {
     count  += 1
     countEl.innerText = count

 }
 function save() {
     console.log(count)

 }
 
 save()
  function save() {
     let  countStr = count + " - "
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     saveEl.textContent += countStr
     saveEl.textContent = 0
     count = 0
     // 3. Render the variable in the saveEl using innerText
     // NB: Make sure to not delete the existing content of the paragraph
     console.log(count)
}







