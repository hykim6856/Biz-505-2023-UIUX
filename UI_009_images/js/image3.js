document.addEventListener("DOMContentLoaded",()=>{
    const img_list_box = document.querySelector("div.image_list");




    
    img_list_box.addEventListener("click", (e)=>{
        const target = e.target;
        if(target.tagName === "IMG"){
           //const img_view =document.querySelector("div.image_view img");
            const image_view_box=document.querySelector("div.image.view");
            //크게 보여질 이미지 태그 가져오기
            const image_view = image_view_box.querySelector("img");
            
        }

        const img_src = target.src;
        img_view.src = img_src;
    });


    const image_first = document.querySelector("div.image_list img");

    const view_image = document.createElement("IMG");
    view_image.src = image_first.src;
    document.querySelector("div.image_view").appendChild(view_image);
});