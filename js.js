// Cách 1:
// const modal = document.querySelector(".modal");
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add('is-show')
//   }, 3000);
// }
// html ở bên trong file html

// Cách 2:
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
  <div class="modal-desc">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
    iste magnam? Hic voluptate placeat reprehenderit delectus quia rerum,
    nobis quaerat dolores, dolorum quisquam ipsam voluptas iste in, unde
    voluptatibus pariatur.
  </div>
  <div class="modal-action">
    <button class="modal-submit">Confirm</button>
    <button class="modal-cancel">Cancel</button>
  </div>
</div>
</div>`;

const body = document.body;
body.insertAdjacentHTML("afterbegin", template);
const modal = document.querySelector(".modal");
if (modal) {
  setTimeout(function () {
    modal.classList.add('is-show')
  }, 3000);
}

