// IPO -Input Process Output

// Constants and Variables
let skills;
// Cached Element References
const $button = $('button');
const $ul = $('ul');
const $input = $('input');
// Event listners
$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);

// Functions

init();

 function init() {
    skills = [];
    render();
 }

 function  handleAddSkill () {
    //store the value from the input tag inside a local variable
    const skill = $input.val();
    //check to make sure we have skill dataa
    if(skill) {
    // //create the UI for a skill
    const $skill = $(`<li><span> X </span>${skill}</li>`)
    // Push the skill UI nto the skills list
    skills.push($skill);    
    // clear the input tag's value
    $input.val('');
    //call render
    render()
    } else return; 
 }
 function handleDelete() {
    alert ('Element inside of ul tag clicked');
 }

 function render() {
    //Take the list of skills in the skils array and add them to the Ul
    if(!skills.length) $ul.css('margin-bottom','30px');
    else $ul.cdd('margin-bottom', '0px')
$ul.html(skills);
 }
 