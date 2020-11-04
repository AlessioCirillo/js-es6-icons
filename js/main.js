
$(document).ready(function(){

    // Icon set
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
    ];
    console.log(icons);
    
    //ARRAY COLORI 
    const color = ['blue', 'orange', 'purple'];

    //ICONS CONTAINER
    const container = $('.icons');

    //PRINT ON SCREEN
    // printToScreen(icons, container);

    //PRINT COLOR ICONS
    const coloredIcons = colorIcons(icons, color);
    console.log(coloredIcons);
    printToScreen(coloredIcons, container);

});//----end ready


//FUNCTION PRINT ON SCREEN
function printToScreen(icons, container){

    icons.forEach((icon) => {
        
        const {family, prefix, name, color} = icon;

        const html = 
        `<div class="icon">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`;

        container.append(html);
    });
}

//FUNCTION COLOREDICONS
function colorIcons(icons, color){

    const types = getTypes(icons);
    console.log(types);

    const coloredIcons = icons.map((icon)=>{

        const indexType = types.indexOf(icon.type);

        return{
            ...icon,
            color: color[indexType]
        }
    })
    return coloredIcons;
}

//FUNCTION TYPE
function getTypes(icons){

    const types= [];

    icons.forEach((icon) =>{
        if(! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    return types;
}

