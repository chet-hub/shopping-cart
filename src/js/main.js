class Cart {
  constructor() {
    this.courses = []; // [id,id,....]
  }
  getLength(){
    return this.courses.length
  }
  addCourse(id){
    this.courses.push(id);
  }
  //the id is the index of the course in the cart
  removeCourse(index){
    this.courses.splice(index,1);
  }

  subtotal(){
    let total = 0;
    this.courses.forEach(function(id){
      const course = courses.find(v=>v.id === id);
      total += course.price
    })
    return total;
  }
  total(){
    return this.subtotal() * (1+ 0.13);
  }
  //todo 
  render(){
    // console.table(this.courses);

    // document.querySelector(".cart-inner").insertAdjacentHTML('afterbegin',
    //  `<div id="items-in-cart">You have ${this.length} items in your cart.</div>`);
    const cartList = document.querySelector(".cart-inner ul")
    cartList.innerHTML = ""
     this.courses.forEach(function(id) {
      const course = courses.find(v=>v.id === id);
      cartList.insertAdjacentHTML('afterbegin', `
        <li data-course-id="${course.id}">
        <img src="images/${course.image}">
            <div class="cart-title">${course.title}</div>
            <div class="cart-price">$${course.price}</div>
            <div class="delete">
              <i class="far fa-times-circle"></i>
            </div>
          </li>`);
    });
    // cartInner.insertAdjacentHTML("beforeend",`<div class="subtotal">
    //     <span>Subtotal:</span>
    //     <span id="subtotal-amount">$${this.subtotal()}</span>
    //   </div>`)
    // cartInner.insertAdjacentHTML("beforeend",`<div class="total">
    //     <span>Total:</span>
    //     <span id="total-amount">$${this.total()}</span>
    //   </div>`)
  }
}

window.addEventListener('DOMContentLoaded',function () {

  const cart = new Cart();

  coursesEle.addEventListener('click',function(event){
    if(event.target.matches("button")){
      const li = event.target.closest('li')
      if(li){
        const id = li.dataset['courseId']
        cart.addCourse(id);
        cart.render()
        console.table(cart.courses)
      }
    }
  })

  document.querySelector(".cart-inner").addEventListener('click',function(event){
    if(event.target.matches("i")){
      const li = event.target.closest('li')
      if(li){
        const lis = event.target.closest('ul').children
        for(let i=0;i<lis.length;i++){
          if(lis[i] === li){
            cart.removeCourse(i);
            console.log("enven->"+i)
            cart.render()
            console.table(cart.courses)
          }
        }
      }
    }
  })


})

/** 
cart = new Cart();
cart.addCourse("SD100")
cart.addCourse("SD100")
console.table(cart.courses);
cart.removeCourse("SD100")
console.table(cart.courses);
*/