
const Home = (props) => {
    return (
        <div className='Home'>
           
                <p id="home">Herzlich willkommen auf unsere Einbürgerungstest</p>

                <img className="image" src={props.src} alt="Bild" />

           


        </div>
    )
}

export default Home