import '../styles/Button.css';

function Button({ texto, onClick }) {
    return (
        <div className='Button'>
            <button type="button" onClick={onClick}>{texto}</button>
        </div>
    );
}

export default Button;