

import Image from 'next/image'
import '../styles/components/mestreshkd.scss'
import Link from "next/link"
import MenuItens from './MenuItens'
import { marker } from '../utils/Fonts'
import MestresItens from './MestresItens'
import { ODan, SaDan } from '../utils/Utils'

export default function MestresHkd() {
    return (
        <>
            <div className="row mt-5 mb-4">
                {/* <h3 className={`text-center text-danger ${marker.className}`}>Grão Mestre Yun Sik Kim</h3> */}

                <div className="col-12 col-lg-12 p-3">

                    <div className="accordion" id="accordionMestreHkd">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                    Sabonin – faixas petas 6º DAN – ||||||
                                </button>
                            </h2>
                            <div id="collapse_1" className="accordion-collapse collapse show" aria-labelledby="heading_1" data-bs-parent="#accordionMestreHkd">
                                <div className="accordion-body mb-5">
                                    <MestresItens />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                    Sabonin – faixas pretas 5º DAN – |||||
                                </button>
                            </h2>
                            <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="heading_2" data-bs-parent="#accordionMestreHkd">
                                <div className="accordion-body">
                                    {ODan.map((item, index) => (
                                        <p key={index}> {item}</p>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                    Sabonin – faixas pretas 4º DAN – ||||
                                </button>
                            </h2>
                            <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="heading_3" data-bs-parent="#accordionMestreHkd">
                                <div className="accordion-body">
                                    {SaDan.map((item, index) => (
                                        <p key={index}> {item}</p>
                                    ))}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}



