
import Image from 'next/image'
import '../styles/components/jae.scss'
import { marker } from '../utils/Fonts'

export default function Jae() {
    return (
        <>
            <div className="row mt-5 mb-4">
                <h3 className={`text-center text-danger ${marker.className}`}>Grão Mestre JI HAN JAE</h3>
                <div className="col-12 col-sm-12 col-lg-3 p-3 text-center">
                    <div className=" w-100 d-flex justify-content-center" >
                        <Image
                            src="/assets/img/jae1.webp"
                            alt="Foto Mestre Ji Han Jae"
                            width={312}
                            height={487}
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-9 p-3">
                    <div className="accordion" id="accordionMestreJae">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingUno">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUno" aria-expanded="true" aria-controls="collapseUno">
                                    História JI HAN JAE
                                </button>
                            </h2>
                            <div id="collapseUno" className="accordion-collapse collapse show" aria-labelledby="headingUno" data-bs-parent="#accordionMestreJae">
                                <div className="accordion-body">
                                    <p>O Professor JI, aluno direto do mestre “Young Sool Choi”, foi o primeiro a  perceber que o Hapkido não tinha professores que ensina – se somente o Hapkido, Então ele decidiu sair de “Degu” e foi a todas as cidades da Coréia, com a finalidade de formar professores que ensina – se somente o Hapkido. Em 1951, o professor Ji abre um dojang em Seoul e funda a “Associação Sung moo Kwan Hapkido”.</p>
                                    <p>O professor Ji,também ajudou a fundar a “Dehan Hapkido”, mais conhecida na época como: “Korea Hapkido Association”, que foi a primeira federação que cuidava somente do Hapkido, tendo como seu primeiro presidente o Grão mestre JI Han Jae.</p>
                                    <p>O mestre Ji Han Jae, ficou famoso ao contracenar com o lendário Bruce Lee no filme “O jogo da morte”.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



