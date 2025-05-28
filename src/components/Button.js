const Button = ({text, onClick, color="btn-blue-500"}) => {
    return (
        <button 
            onClick={onClick} 
            className={`px-4 py-2 rounded ${color} text-white hover:bg-blue-700 transition duration-300`}
        >
            {text}
        </button>
    );
}
export default Button;