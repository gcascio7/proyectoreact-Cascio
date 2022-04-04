import carro from "./carro.png"

const CartWidget = () => {
return (
  <>
    <button type="button" class="btn btn-primary position-relative">
      <img class="carro" src={carro} ></img>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        7
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
    </>
)
}

export default CartWidget;