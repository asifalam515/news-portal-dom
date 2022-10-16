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
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('card');
    singleDiv.innerHTML = `
<div class="d-flex">
<div class="w-25">
<img  src="${single[0].image_url}" class="img-fluid" alt="...">
</div>
  <div class="card-body w-75">
      <h5 class="card-title">${single[0].details}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div>
    `;
    detailContainer.appendChild(singleDiv);
}



loadAllNewsCategory()