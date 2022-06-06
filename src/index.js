const homeContent=(()=>{
    const welcomeBox=document.createElement("div");
    welcomeBox.setAttribute('class','welcomeBox');
    welcomeBox.innerText="WELCOME";
    const saluteBox=document.createElement('div')
    saluteBox.setAttribute('class',"saluteBox");
    const salutation=document.createElement('p');
    salutation.innerText="Thank You For Giving A Chance To Serve You";
    
    
    
    const appendElements = (containerBox) =>{
        containerBox.appendChild(welcomeBox);
        containerBox.appendChild(saluteBox);
        saluteBox.appendChild(salutation);
        console.log(containerBox);
        
    }
    return {appendElements};
})();

const menuContent = (()=>{
    const menuHeadBox = document.createElement('div');
    menuHeadBox.setAttribute("class","menuHeadBox");
    menuHeadBox.innerText="Menu Card";

    const menuCardMaker = (dish,description,price)=>{
        box = document.createElement('div');
        box.setAttribute('class',"dishCard");
        dishTitle = document.createElement('h3');
        dishDescription = document.createElement('p');
        dishPrice = document.createElement('span');
        
        dishTitle.innerText=dish;
        dishDescription.innerText=description;
        dishPrice.innerText=`${price} ₹`;

        box.appendChild(dishTitle);
        box.appendChild(dishDescription);
        box.appendChild(dishPrice);
        
        return box;
    }

    const crispyKabuliChanaChaat = menuCardMaker('Crispy Kabuli Chana Chaat',"kdjflksdj jdkjf  jfkdjf dkfj riiture  eorjeiou fjkdfgdk roeuir efkdjfkd eiru f fvjdkg oer etjeriofjdk fikdi fikjfoer kjfkd", 80);
    const chapati = menuCardMaker("Chapati","Home made soft chapati 2 piece with fried potato. A nice choice for evening breakfast",30);
    const salad = menuCardMaker("Salad","Fresh Salad...\nnice combo of cool fruits and vegetables\nCan be taken with veg or nonveg plates and solo plates too are available",20);
    const tea = menuCardMaker("Tea","Made with pure milk and a nice refreshment for parties and meetings.Available in 40 different flavour.",10);

    const appendElements = (containerBox)=>{
        containerBox.appendChild(menuHeadBox);
        containerBox.appendChild(crispyKabuliChanaChaat);
        containerBox.appendChild(chapati);
        containerBox.appendChild(salad);
        containerBox.appendChild(tea);
    }
    
    return {appendElements};
    
})();

const contactContent=(()=>{
    const contactBox = document.createElement('div');
    contactBox.setAttribute("class","contactBox");
    const title = document.createElement('h3');
    const address = document.createElement('p');
    title.innerText="Roja Prasad";
    address.innerText="Barauda road , \nPaschim Champaran , \nBihar \n 263345\n8988984353";
    contactBox.appendChild(title);
    contactBox.appendChild(address);
    const appendElements = (containerBox)=>{
        containerBox.appendChild(contactBox);
    }
    return {appendElements};
})();

const elementCleaner = (element)=>{
    element.innerHTML="";
};

eventExecuter=(()=>{
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');
    const content = document.getElementById('content');

    homeBtn.addEventListener('click',()=>{
        elementCleaner(content);
        homeContent.appendElements(content);
    });
    menuBtn.addEventListener("click",()=>{
        elementCleaner(content);
        menuContent.appendElements(content);
    });
    contactBtn.addEventListener('click',()=>{
        elementCleaner(content);
        contactContent.appendElements(content);
    })

})();