
import Image from 'next/image'
import '../styles/components/kim.scss'
import Link from "next/link"
import MenuItens from '../components/MenuItens'
import { marker } from '../utils/Fonts'

export default function Kim() {
    return (
        <>


            <div className="row mt-5 mb-4">
                <h3 className={`text-center text-danger ${marker.className}`}>Grão Mestre Yun Sik Kim</h3>
                <div className="col-12 col-sm-12 col-lg-3 p-3 text-center">
                    <div className=" w-100 d-flex justify-content-center" >
                        {/* <Image
                            src="/assets/img/b-3.webp"
                            alt="logo rafart"
                            width={220}
                            height={341}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        /> */}
                        <Image
                            src="/assets/img/b-3.webp"
                            alt="logo rafart"
                            width={312}
                            height={487}
                        />
                    </div>

                </div>

                <div className="col-12 col-lg-9 p-3">

                    <div className="accordion" id="accordionMestreKim">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    História Yun Sik Kim
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionMestreKim">
                                <div className="accordion-body">
                                    <p>O Grão Mestre  “YUN SIK KIM”, nasceu em Seoul, capital da Coréia do Sul, em 5 de Junho de 1943. Começou a treinar Taekwondo, com o mestre Hwang Ki e Hapkido com o mestre Young Sool Choi e o Mestre JI Han Jae, aos nove anos de idade.Após ter fundado o “Hapkido Bum Moo Kwan”, que mais tarde tornou – se a World Bum Moo Hap Ki Do Federation”. Na década de 60, juntamente com seu mestre, fundaram a “Korea Hapkido Association”, conhecida também como “DEHAN Hapkido Federation”, a atual (K.H.A). É importante ressaltar que o Grão Mestre Yun Sik Kim, ostenta os diplomas da “Korea Kido Associação”, de numero 7 (sete) e da (KHA), o diploma de numero 9 (nove).</p>
                                    <p>Na década de 70 pensando em expandir o mestre Kim, começa pessoalmente a divulgar a escola BUM MOO, em vários países como: E.U.A, Canadá, França, etc… – Chegando no Brasil em 1977, onde fixa a sua residência.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Resumo Histórico
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMestreKim">
                                <div className="accordion-body">
                                    <p>Grão Mestre YUN SIK KIM</p>
                                    <p>Faixa preta internacional</p>
                                    <p>Hapkido 10º dan</p>
                                    <p>Taekwondo 9º dan</p>
                                    <hr></hr>
                                    <strong>1943</strong><p>Nasceu a 5 de junho, em seoul, capital da Coréia do Sul.</p>
                                    <strong>1954</strong><p>Começa a treinar Taekwondo e Hapkido.</p>
                                    <strong>1957</strong>
                                    <p>                                       <ul>
                                            <li>Recebeu o diploma de faixa preta 1º dan de Hapkido do mestre “YOUNG SOOL CHOI”.</li>
                                            <li>Recebe o diploma de faixa preta 1“ dan de Taekwondo do mestre “HWANG KI”</li>
                                        </ul>
                                    </p>
                                    <strong>1968</strong>
                                    <p>                                       <ul>
                                            <li>Inalgura a 1 º academia na Coréia com o nome de ”TCHON YOUNG”, que ensinava Taekwndo e Hapkido junto.</li>
                                            <li>funda a “Bum moo kwan Hapkido”. E obtém a presidência.</li>
                                        </ul>
                                    </p>
                                    <strong>1972</strong><p>Recebeu o diploma como melhor técnica em demonstração, no 1º encontro das artes marciais, promovido pela rede de televisão “MBC – Seoul, Coréia”.</p>
                                    <strong>1974</strong><p>Recebeu o diploma como melhor técnica em demonstração, no 2º encontro das artes marciais, promovido pela rede de televisão “MBC – Seoul, Coréia”.</p>
                                    <strong>1977</strong><p>Chega no Brasil, sendo, faixa preta em Taekwondo 7º dan e Hapkido 8º dan.</p>
                                    <strong>1980</strong><p>Funda a “Associação Kim Taekwodo e Hapkido clube o KIM 1980”.</p>
                                    <strong>1982</strong><p>Recebeu da Federação Pró Taekwondo, na Coréia do Sul, o diploma em prata, o qual certifica que foi encarregado de organizar o Pró Taekwodo no Brasil.</p>
                                    <strong>1982</strong><p>Recebeu da Federação Pró Taekwondo, na Coréia do Sul, o diploma em prata, o qual certifica que foi encarregado de organizar o Pró Taekwodo no Brasil.</p>
                                    <strong>1985</strong><p>Ficou como vice – presidente da Associação Coreana de Taekwondo no Brasil.</p>
                                    <strong>1986</strong><p>Recebeu o diploma de melhor demonstração técnica no encontro das artes marciais, realizado em Manaus, Brasil.</p>
                                    <strong>1991</strong><p>Ficou como Vice – presidente da comissão organizadora do primeiro campeonato mundial de Hapkido, em Seoul, Coréia do Sul.</p>
                                    <strong>1993</strong>
                                    <p>                                       <ul>
                                            <li>Fundou a Federação de Hapkido do estado de São Paulo, Ocupando o cargo de presidente por votação unânime.</li>
                                            <li>Ficou como Vice – presidente da comissão organizadora do 2 º campeonato mundial de Hapkido, em Seoul, Coréia.</li>
                                            <li>Ganhou a eleição para a presidência, da Associação Coreana de Taekwondo no Brasil.</li>
                                            <li>Ganhou a eleição para a presidência da Associação dos mestres coreanos no Brasil.</li>
                                        </ul>
                                    </p>
                                    <strong>1994 - </strong><p>Recebeu o diploma de melhor demonstração técnica, no encontro das artes marciais, em Otawa, Canadá.</p>
                                    <strong>2001</strong><p>Fundou a Confederação Brasileira de Hapkido, ocupando a presidência por votação unânime.</p>
                                    <strong>2007</strong>
                                    <p>                                       <ul>
                                            <li>Ganhou a eleição para a presidência da Associação Coreana de Taekwondo no Brasil.</li>
                                            <li> Ganhou a eleição para a presidência da Associação dos mestres coreanos do Brasil.</li>

                                        </ul>
                                    </p>
                                    <hr></hr>
                                    <strong>1983 à 2007</strong><p>Realizou da 1º à 32º Copa Grão mestre YUN SIK KIM de Taekwondo.</p>
                                    <strong>1993 à 2007</strong><p>Realizou do” 1º ao 14º Campeonato Paulista de Hapkido”. E do “1º ao 14 º Campeonato Brasileiro de Hapkido.</p>
                                    <strong>1975 á 2007</strong><p>Ensinou em seminários de Taekwondo e Hapkido em mais de 40 países</p>
                                    <strong>1968 á 2007</strong><p>Formou mais de 30 mil faixas pretas de 1º dan ao 9º dan de Taekwondo e Hapkido em mais de 50 países.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}



