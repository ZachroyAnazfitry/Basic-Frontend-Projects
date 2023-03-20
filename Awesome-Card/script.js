// select panel class for all <div>
const panels = document.querySelectorAll('.panel')


/** 
 * check output of selecting panel before developed
 * will return array 
*/
console.log(panels);
console.log(panels[0]); //check using index

/**
 * for loop with function as argument
 * add event listener for each <div>
 * listen for a click
 * when click happened, run functions
 */
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log(123); - to check code
        // remove class of active for other panel when clicked
        removeActive()
        panel.classList.add('active')
    })
});

// new function to remove active on other panels
function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}