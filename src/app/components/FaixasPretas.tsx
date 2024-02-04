
import '../styles/components/faixasPretas.scss'
import { IlDan, IDan, SamDan } from '../utils/Utils'

export default function FaixasPretas() {
    return (
        <>
            <div className="row mt-5 mb-4">
                <div className="col-12 col-lg-12 p-3">
                    <div className="accordion" id="accordionFaixasPretas">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_01">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_01" aria-expanded="true" aria-controls="collapse_01">
                                    Kiosanin – faixas pretas 3º DAN – |||
                                </button>
                            </h2>
                            <div id="collapse_01" className="accordion-collapse collapse show" aria-labelledby="heading_01" data-bs-parent="#accordionFaixasPretas">
                                <div className="accordion-body mb-5">
                                    {SamDan.map((item, index) => (
                                        <p key={index}> {item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_02">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_02" aria-expanded="false" aria-controls="collapse_02">
                                    Kiosanin – faixas pretas 2º DAN – ||
                                </button>
                            </h2>
                            <div id="collapse_02" className="accordion-collapse collapse" aria-labelledby="heading_02" data-bs-parent="#accordionFaixasPretas">
                                <div className="accordion-body">
                                    {IDan.map((item, index) => (
                                        <p key={index}> {item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_03">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_03" aria-expanded="false" aria-controls="collapse_03">
                                    Tchuionin – faixas pretas 1º DAN – |
                                </button>
                            </h2>
                            <div id="collapse_03" className="accordion-collapse collapse" aria-labelledby="heading_03" data-bs-parent="#accordionFaixasPretas">
                                <div className="accordion-body">
                                    {IlDan.map((item, index) => (
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



