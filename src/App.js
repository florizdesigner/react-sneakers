import CardItem from './components/CardItem';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    return (
        <div className='wrapper clear'>
            <Drawer/>
            <Header/>

            <div className='slider'>
                <img src='/img/slider.png' alt='slider'/>
            </div>
            <div className='content p-40'>
                <div className='mb-40 d-flex justify-between align-center'>
                    <h1 className=''>Все кроссовки</h1>

                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='search'/>
                        <input type='text' name='search' placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='d-flex justify-between'>
                    <CardItem like={true} add={true} name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 990'
                              image='/img/sneakers/1.jpg'/>
                    <CardItem like={true} add={true} name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 990'
                              image='/img/sneakers/2.jpg'/>
                    <CardItem like={true} add={true} name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 990'
                              image='/img/sneakers/3.jpg'/>
                    <CardItem like={true} add={true} name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 990'
                              image='/img/sneakers/4.jpg'/>
                </div>

            </div>
        </div>
    );
}

export default App;
