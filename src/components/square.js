import './square.css'

const Square = ( {value, onSquareClick} ) => {
    return (
        <button className='square' onClick={onSquareClick}>
            <span className='square-text'>{value}</span>
        </button>
    );
};

export default Square;