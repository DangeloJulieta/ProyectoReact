
export const CartWidget = ({ cantCarrito }) => {
    return (
            <span className="badge badge-pill">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/shopping-471-153016.png?w=256&f=avif" alt="" width="35" height="35" class="d-inline-block align-text-top" />{cantCarrito}
            </span>
    );
}

