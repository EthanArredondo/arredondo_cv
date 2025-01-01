import '../styles/Button.css';

function Button({ texto }) {
    return (
        <div className='Button'>
            <button type="button">{texto}</button>
        </div>
    )
}

export default Button;