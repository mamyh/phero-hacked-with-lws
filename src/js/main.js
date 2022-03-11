const milestonesData = JSON.parse(data).data;


//load milestonesData

function loadMilestonData(){
    const milestones = document.querySelector('.milestones');
    console.log(milestonesData);
    milestones.innerHTML=milestonesData.map(milestone=>{
        return `<div class="milestone border-b">
        <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone._id})" /></div>
        <div onclick="openMilestone(this,${milestone._id})">
            <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
            </p>
        </div>
        </div>
        <div class="hidden_panel">
         ${milestone.modules.map(function(module){
             return `<div class="module border-b">
                        <p>${module.name}</p>
                    </div>`;
         }).join("")}
        </div>
    </div>`
    }).join("");
}

function openMilestone(milestoneElement,id){
    // console.log(milestoneElement)
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const activePanel = document.querySelector('.active');
    
    //first remove previous active class if any [ other than the clicked one]
    if(activePanel && !milestoneElement.classList.contains('active')){
        activePanel.classList.remove('active')
    }
    milestoneElement.classList.toggle('active');


    //first remove the previous show class if any [other than the clicked one]
    if(!currentPanel.classList.contains('show') && shownPanel){
        shownPanel.classList.remove('show');

    }
    currentPanel.classList.toggle('show');

    showMilestone(id);
}

function showMilestone(id){
   const milestoneImage = document.querySelector(".milestoneImage");
   const title = document.querySelector(".title");
   const details = document.querySelector(".details");
   

   milestoneImage.style.opacity="0";

   milestoneImage.src =milestonesData[id].image;
   title.innerText =milestonesData[id].name;
   details.innerText =milestonesData[id].description;
}

//listen for hero image load 
const milestoneImage= document.querySelector(".milestoneImage");

milestoneImage.onload= function(){
    //has been loaded 
    this.style.opacity ="1";
}

function markMilestone(checkElement,id){
    const doneList= document.querySelector(".donelist");
    const milestoneList = document.querySelector('.milestone')
}
loadMilestonData();