import React from 'react';
import Points from '../../components/Points'
import TextGame from '../../components/TextGame'
import Image from '../../components/Image';
import Button from '../../components/Button';
import './game.css'


import CenterDefault from '../../assets/image/center-default.svg';
import CenterCorrect from '../../assets/image/center-correct.svg';
import CenterWrong from '../../assets/image/center-wrong.svg';
import EndDefault from '../../assets/image/end-default.svg';
import EndCorrect from '../../assets/image/end-correct.svg';
import EndWrong from '../../assets/image/end-wrong.svg';
import SpaceBDefault from '../../assets/image/space-b-default.svg';
import SpaceBCorrect from '../../assets/image/space-b-correct.svg';
import SpaceBWrong from '../../assets/image/space-b-wrong.svg';
import StartDefault from '../../assets/image/start-default.svg';
import StartCorrect from '../../assets/image/start-correct.svg';
import StartWrong from '../../assets/image/start-wrong.svg';


class Game extends React.Component {
    constructor() {
        super()

        this.state = {
            counter: 0,
            page: 0,
            left: '',
            right: ''

        }
    }

    componentDidMount = () => {
        this.setState({ left: CenterDefault, right: SpaceBDefault })

    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 })
        console.log(this.state.page)

        switch (this.state.page) {
            case 0:
                break;
            case 1:
                
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;

            default:
                break;
        }
    }

    correct = e => {
        let alt = e.target.alt

        switch (alt) {
            case 'CenterDefault':
                alert('oi')
                break;
            case 'EndDefault':
                alert('ok')
                break;
            case 'SpaceBDefault':
                alert('ok')
                break;
            case 'StartDefault':
                alert('ok')
                break;
            case 'EndDefault':
                alert('ok')
                break;
            default:
                alert('errado')
                break;
        }
    }

    wrong = e => {
        let alt = e.target.alt

        switch (alt) {
            case 'SpaceBDefault':
                alert('errado')
                break;
            case 'StartDefault':
                alert('errado')
                break;
            case 'CenterDefault':
                alert('errado')
                break;
            case 'SpaceBDefault':
                alert('errado')
                break;
            case 'CenterDefault':
                alert('oi')
                break;
            default:
                alert('errado')
                break;
        }
    }




    render() {

        const { left, right } = this.state;

        return (
            <main>
                <Points
                    counter={this.state.counter}
                />

                <section>
                    {this.state.page === 0 && (

                        <>
                            <TextGame
                                className=""
                                span="justify-content: center"
                            />
                            <div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.correct}
                                        src={this.state.left}
                                        alt='CenterDefault'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.wrong}
                                        src={this.state.right}
                                        alt='SpaceBDefault'
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={this.nextPage}
                                    title='próximo desafio'
                                />
                            </div>
                        </>
                    )}

                    {this.state.page === 1 && (
                        <>
                            <TextGame
                                className=""
                                span="justify-content: end"
                            />
                            <div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.wrong}
                                        src={this.state.left}
                                        alt='StartDefault'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.correct}
                                        src={this.state.right}
                                        alt='EndDefault'
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={this.nextPage}
                                    title='próximo desafio'
                                />
                            </div>
                        </>
                    )}

                    {this.state.page === 2 && (
                        <>
                            <TextGame
                                className=""
                                span="justify-content: Space Between"
                            />

                            <div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.correct}
                                        src={SpaceBDefault}
                                        alt='SpaceBDefault'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.wrong}
                                        src={CenterDefault}
                                        alt='CenterDefault'
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={this.nextPage}
                                    title='próximo desafio'
                                />
                            </div>
                        </>
                    )}

                    {this.state.page === 3 && (
                        <>
                            <TextGame
                                className=""
                                span="justify-content: start"
                            />
                            <div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.correct}
                                        src={StartDefault}
                                        alt='StartDefault'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.wrong}
                                        src={SpaceBDefault}
                                        alt='SpaceBDefault'
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={this.nextPage}
                                    title='próximo desafio'
                                />
                            </div>
                        </>
                    )}


                    {this.state.page === 4 && (

                        <>
                        <TextGame
                                className=""
                                span="justify-content: end"
                            />
                            <div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.correct}
                                        src={EndDefault}
                                        alt='EndDefault'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='image__container--car'
                                        onClick={this.wrong}
                                        src={CenterDefault}
                                        alt='CenterDefault'
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={this.nextPage}
                                    title='Jogar novamente'
                                />
                            </div>
                        </>
                    )}

                    {this.state.page === 5 && (
                        <>
                            <Button
                                onClick={this.nextPage}
                                title='Jogar novamente'
                            />

                            <Button
                                onClick={this.nextPage}
                                title='Voltar para a tela principal'
                            />

                            <Button
                                onClick={this.nextPage}
                                title='Conhecer outros desafios'
                            />
                        </>
                    )}

                </section>
            </main>

        )
    }
}

export default Game;