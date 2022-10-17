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
   
    for(const singleNews of single){
       console.log(singleNews.details.slice(0,200).concat('...'));
        console.log(singleNews.author.name)
        
    
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('card');
    singleDiv.innerHTML = `
<div class="d-flex w-75">
<div class="w-25">
<img  src=" ${singleNews.image_url}?{singleNews.image_url}:"No images found" class="img-fluid">
</div>
  <div class="card-body w-75">
  <h5>${singleNews.title? singleNews.title :'No Tittle Found'}</h5>
      <small class="card-title"> ${singleNews.details}?{singleNews.details}:'No Details Found'</small>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div>
    `;
    detailContainer.appendChild(singleDiv);


    }

//     detailContainer.innerHTML = ``;
//     const singleDiv = document.createElement('div');
//     singleDiv.classList.add('card');
//     singleDiv.innerHTML = `
// <div class="d-flex w-75">
// <div class="w-25">
// <img  src=" ${single[0].image_url}?{single[0].image_url}:"No images found" class="img-fluid">
// </div>
//   <div class="card-body w-75">
//   <h5>${single[0].title? single[0].title :'No Tittle Found'}</h5>
//       <small class="card-title"> ${single[0].details}?{single[0].details}:'No Details Found'</small>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>


// </div>
//     `;
//     detailContainer.appendChild(singleDiv);
}



loadAllNewsCategory()