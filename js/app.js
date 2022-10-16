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
    console.log(categories.news_category)
    const data=categories.news_category
    const categoriesDiv=document.getElementById('categories')

 data.forEach(category=>{
    // console.log(category);
    const categoryDiv=document.createElement('div')

            // const id=`${category.category_id} `
    categoryDiv.innerHTML=`
    <btn   onClick=single("${category.category_id}") class="btn btn-primary" >${category.category_name} </btn>
    `
    
    
// categoryDiv.innerText=`${category.category_name}`
    categoriesDiv.appendChild(categoryDiv)
    
    
 })
 


}

// all news in a single category

const single=(id)=>{
    console.log(id);
}




loadAllNewsCategory()