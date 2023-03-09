import './ItemCount.css'

const ItemCount = ({
    contador,
    actualizaValor,
    stock,
    getNumRandom,
}) => {
    const NumRandom = 10
    const onAdd = () => {
        if(stock === contador){
            alert('has llegado al limite del stock')
            return
        }
        actualizaValor (contador + 1);
        getNumRandom(NumRandom);
    };
    const restar = () => {
        if(contador === 0) {
            return
        }
        actualizaValor(contador -1)
    };
    
    return (
    <div className="counter">
        <div className="controllers">
            <button onClick={restar}>-</button>
            <div>
                <span>{contador}</span>
            </div>
            <button onClick={onAdd}>+</button>
        </div>
        </div>)
};

export default ItemCount