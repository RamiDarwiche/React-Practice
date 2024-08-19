const Colorbox = ({ colorText }) => {
    return (
        <section className='displayBox' style={{backgroundColor: colorText}}>
            <p>{colorText ? colorText : 'Empty Value'}</p>
        </section>
    )
}

export default Colorbox