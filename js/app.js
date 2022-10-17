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
  toggleSpinner(true)
    // console.log('get details of id', single);
    const url = `https://openapi.programming-hero.com/api/news/category/0${single}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleDetails(data.data));
}
const displaySingleDetails = single =>{
  console.log(single.length);
    toggleSpinner(false)
    const detailContainer = document.getElementById('single-category');
    const numberDiv=document.getElementById('numberOfnews')
    numberDiv.innerHTML=''
    const h1=document.createElement('h1')
    h1.innerText=`Number of News is:${single.length?single.length:"Not Found"}`
    detailContainer.innerHTML = ``;
   if(single.length==0){
    detailContainer.innerHTML=`
    <h1 class="text-danger">No News Found</h1>
    
    
  `

    

   }
    for(const singleNews of single){

    
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('m-2');
    singleDiv.classList.add('card');
    singleDiv.classList.add('rounded');

    singleDiv.innerHTML = `
<div class="d-flex w-75 container justify-content-center">
<div class="w-50">
<img  class="img-fluid"  src=" ${singleNews.image_url ?singleNews.image_url :"No images found"}" >
</div>
  <div class="card-body w-50 m-3 p-2">
  <h5>${singleNews.title? singleNews.title :'No Tittle Found'}</h5>
      <small class="card-title"> ${singleNews.details ?singleNews.details.slice(0,200).concat('...') :'No Details Found'}</small>
      <p class="card-text text-info">Total View:${singleNews.total_view?singleNews.total_view:"No Name Found"}</p>
      
      <img  class="img-fluid rounded-5 w-25"  src=${singleNews.author.img ?singleNews.author.img:"No images found"} >
      <p class="card-text text-danger">${singleNews.author.name ?singleNews.author.name:"No Name Found"}</p>
    
    
      <button onclick="loadModalDetails('${singleNews._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Details
    </button>

  </div>


</div>
    `;
    detailContainer.appendChild(singleDiv);
    numberDiv.appendChild(h1)


    }


}

// modal function:
const loadModalDetails=(news_id)=>{
    const url=`https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayModal(data.data))

}
const displayModal=(data)=>{

    const modalContainer=document.getElementById('modal-container')
    modalContainer.textContent=''
for(const details of data){
    console.log(details);
    const modalDiv=document.createElement('div')
    modalDiv.innerHTML=`
    <div class="modal-header d-block" >
    
    <h3>${details.title}</h3>
    <h5 class="modal-title" id="exampleModalLabel">Author:${details.author.name ? details.author.name :"no Data found"}</h5>
    <h4>Rating:${details.rating.badge}</h4>

    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <P>Details${details.details}</P>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Okay</button>
  </div>  
    
    `
    modalContainer.appendChild(modalDiv)
}
}




// spinner
const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }else{
    loaderSection.classList.add('d-none')
  }


}



// loadModalDetails()

loadAllNewsCategory()