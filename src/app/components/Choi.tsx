
import Image from 'next/image'
import '../styles/components/choi.scss'
import Link from "next/link"
import MenuItens from './MenuItens'
import { marker } from '../utils/Fonts'

export default function Choi() {
    return (
        <>
            <div className="row mt-5 mb-4 d-flex flex-lg-row-reverse">
                <h3 className={`text-center text-danger ${marker.className}`}>Grão Mestre YOUNG SOOL CHOI</h3>
                <div className="col-12 col-sm-12 col-lg-3 p-3 text-center">
                    <div className=" w-100 d-flex justify-content-center" >
                        {/* <Image
                            src="/assets/img/b-3.webp"
                            alt="Foto mestre Choi"
                            width={220}
                            height={341}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        /> */}
                        <Image
                            src="/assets/img/Choi1.webp"
                            alt="Foto mestre Choi"
                            width={312}
                            height={487}
                        />
                    </div>

                </div>

                <div className="col-12 col-lg-9 p-3">

                    <div className="accordion" id="accordionMestreChoi">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    História YOUNG SOOL CHOI
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionMestreChoi">
                                <div className="accordion-body">
                                    <p>Nascido em 1904 em “DAE GU ’, Coréia, o grão mestre Young Sool Choi, ficou órfão aos 9 anos de idade, quando conheceu o seu tutor, (um senhor eremita, provavelmente de descendência nobre.), o qual levou o mestre Choi para as montanhas da Coréia, para que ele pudesse aprender o Hapkido. O mestre Choi viveu cerca de uns 33 anos junto com seu mentor, como uma espécie de monge eremita. È importante ressaltar que o mestre Choi foi praticamente criado, nos tempos de ocupação japonesa.</p>
                                    <p>Após a desocupação japonesa e morte de seu mentor o mestre Choi, decide sair das montanhas e se instalou em uma província em “Degu”, Coréia do Sul, onde começou a ensinar o Hapkido . O mestre Choi não teve muitos alunos, pois além de se instalar longe de “Seoul”, capital da Coréia do Sul, onde tudo acontecia, ele deu aulas por pouco tempo e a maioria de seus alunos já treinavam outras formas artes marciais diferentes.</p>
                                    <p>O mestre Choi faleceu em 1987.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}



