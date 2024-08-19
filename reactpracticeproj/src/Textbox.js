const Textbox = ({ colorText, setColorText }) => {
    return ( 
        <form className="textForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="textInput"></label>
            <input 
            autoFocus
            type="text"
            id="textInput" 
            required
            placeholder="Add color name"
            value={colorText}
            onChange={(e) => setColorText(e.target.value)}
            />
        </form>
    )
}

export default Textbox