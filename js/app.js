// fetch data
const loadAllNewsCategory=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategoriesName(data.data))
}

// 


// display all categories
const displayCategoriesName=(categories)=>{
    // console.log(categories.news_category)
    const data=categories.news_category
    const categoriesDiv=document.getElementById('categories')

 data.forEach(category=>{
    // console.log(category);
    const categoryDiv=document.createElement('div')

            // const id=`${category.category_id} `
    categoryDiv.innerHTML=`
    <btn   onclick="singleCategory(${category.category_id})" class="btn btn-primary" >${category.category_name} </btn>
    `
   
    
    
// categoryDiv.innerText=`${category.category_name}`
    categoriesDiv.appendChild(categoryDiv)
    
    
 })
 


}

// all news in a single category
const singleCategory = (single) =>{
    // console.log('get details of id', single);
    const url = `https://openapi.programming-hero.com/api/news/category/0${single}`;
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleDetails(data.data));
}
const displaySingleDetails = single =>{
    console.log(single)
    const detailContainer = document.getElementById('single-category');
    detailContainer.innerHTML = ``;
   if(single.length==0){
    detailContainer.innerHTML=`
    <h1 class="text-danger">No News Found</h1>
    `
    // console.log('not found');
   }
    for(const singleNews of single){
        
       console.log(singleNews.details.slice(0,200).concat('...'));
        console.log(singleNews.author.name)
        
    
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('card');
    singleDiv.innerHTML = `
<div class="d-flex w-75 container justify-content-center">
<div class="w-25">
<img  class="img-fluid"  src=" ${singleNews.image_url ?singleNews.image_url :"No images found"}" >
</div>
  <div class="card-body w-75 m-3 p-2">
  <h5>${singleNews.title? singleNews.title :'No Tittle Found'}</h5>
      <small class="card-title"> ${singleNews.details ?singleNews.details.slice(0,200).concat('...') :'No Details Found'}</small>
      <p class="card-text text-info">Total View:${singleNews.total_view?singleNews.total_view:"No Name Found"}</p>
      
      <img  class="img-fluid rounded-5 w-25 h-50"  src=${singleNews.author.img ?singleNews.author.img:"No images found"} >
      <p class="card-text text-danger">${singleNews.author.name ?singleNews.author.name:"No Name Found"}</p>
    
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div>
    `;
    detailContainer.appendChild(singleDiv);


    }


}



loadAllNewsCategory()