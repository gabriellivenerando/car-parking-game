import React from 'react';
import Image from '../../components/Image'
import './home.css'

import Logo from '../../assets/image/logo.svg'
import MainTitle from '../../components/MainTitle';
import Button from '../../components/Button';

class Home extends React.Component{
    render(){
        return(
            <main>
                <section>
                <Image
                    className="image__container"
                    src={Logo}
                />
                <MainTitle
                    className=""
                    title= "Car Parking"
                />
                <Button
                    className=""
                    title="Entrar"
                />
                </section>
            </main>
            

        )
    }
}

export default Home;