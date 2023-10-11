import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextArea,
    MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <section className="text-center m-5">
            <h2 className="mb-5">¡Contáctanos!</h2>
            <div className="row">
                <div className="col-lg-5">
                    <iframe
                        src="
                        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12071.819062371245!2d-3.9602709472726425!3d40.85091692295125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4169008eeba5c3%3A0x8c4271d57cb751d4!2sSierra%20de%20Guadarrama!5e0!3m2!1ses-419!2ses!4v1697045198163!5m2!1ses-419!2ses
"
                        className="h-100 w-100"
                        style={{ border: "0" }}
                        loading="lazy"></iframe>
                </div>
                <div className="col-lg-7">
                    <form>
                        <div className="row">
                            <div className="col-md-9">
                                <MDBRow className="mb-5">
                                    <MDBCol>
                                        <MDBInput
                                            style={{
                                                background:
                                                    "rgba(255, 232.69, 232.69, 0.70)",
                                                borderBottom:
                                                    "2px #D10505 solid",
                                                borderRadius: 10,
                                            }}
                                            label="Nombre y Apellidos"
                                            id="form3FirstName"
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            style={{
                                                background:
                                                    "rgba(255, 232.69, 232.69, 0.70)",
                                                borderBottom:
                                                    "2px #D10505 solid",
                                                borderRadius: 10,
                                            }}
                                            label="Correo electrónico"
                                            id="form3Email"
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput
                                    style={{
                                        background:
                                            "rgba(255, 232.69, 232.69, 0.70)",
                                        borderBottom: "2px #D10505 solid",
                                        borderRadius: 10,
                                    }}
                                    type="text"
                                    label="Asunto"
                                    id="form3Subject"
                                    v-model="form3Subject"
                                    wrapperClass="mb-4"
                                />
                                <MDBTextArea
                                    style={{
                                        background:
                                            "rgba(255, 232.69, 232.69, 0.70)",
                                        borderBottom: "2px #D10505 solid",
                                        borderRadius: 10,
                                    }}
                                    label="Déjanos tu comentario"
                                    id="form3Textarea"
                                    wrapperClass="mb-4"
                                />
                                <button
                                    style={{
                                        backgroundColor: "#D10505",
                                        color: "white",
                                        border: "none",
                                        width: "20%",
                                        height: "10%",
                                    }}
                                    className="mb-4 rounded-pill">
                                    {" "}
                                    Enviar{" "}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
