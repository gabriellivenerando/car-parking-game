import React from 'react';
import MainTitle from '../../components/MainTitle';
import Paragraph from  '../../components/Paragraph';
import Title from  '../../components/Title';
import Text from  '../../components/Text';
import Image from  '../../components/Image';
import Footer from  '../../GeneralTemplate/Footer';
import './introduction.css';

import Parking from '../../assets/image/teste.svg';
import Car from '../../assets/image/start-correct.svg';

class Introduction extends React.Component{
    render(){
        return(
            <>
                <main>
                    <MainTitle
                        className="mainTitle"
                        title="Car Parking"
                    />

                    <section>
                        <Paragraph
                            className=""
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </section>
                    <section>
                        <div className="parking__container">
                            <Title
                                className=""
                                text="Estacionamento:"
                            />
                            <Text
                                className=""
                                text="Representa a  <div>  mãe do nosso código."
                            />
                            <Image
                                src={Parking}
                            />
                        </div>

                        <div className="car__container">
                            <Title
                                className=""
                                text="Carro:"
                            />
                            <Text
                                className=""
                                text="Representa uma <div> filha do nosso código."
                            />
                            <Image
                                src={Car}
                            />
                        </div>
                    </section>
                </main>
                <Footer/>
            </>

        )
    }
}

export default Introduction;