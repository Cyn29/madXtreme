import { Form, Button } from "react-bootstrap";
import './Contact.css';
import { useForm } from "react-hook-form";


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <section className="contact-container" aria-label="Contact">
            <h2 className="title">¡Contáctanos!</h2>
            <div className="form-map-container">
            <div className="col-lg-5">
                <iframe
                    src="
                        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12071.819062371245!2d-3.9602709472726425!3d40.85091692295125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4169008eeba5c3%3A0x8c4271d57cb751d4!2sSierra%20de%20Guadarrama!5e0!3m2!1ses-419!2ses!4v1697045198163!5m2!1ses-419!2ses
"
                    className="map"
                    style={{ border: "0" }}
                    loading="lazy"></iframe>
            </div>
            <Form id="form" onSubmit={handleSubmit(() => {})}>
                <Form.Group className='formGroup'>
                    <Form.Label id="fullName">Nombre y apellidos</Form.Label>
                    <Form.Control type="text" name="fullname" {...register('fullName', {
                        required: true,
                        minLength: 3,
                    })}>
                    </Form.Control>
                    {errors.fullName?.type === 'required' && <p>El nombre es obligatorio</p>}
                    {errors.fullName?.type === 'minLength' && <p>El nombre debe tener más de 3 caracteres</p>}
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label id="email">Email</Form.Label>
                    <Form.Control type="text" name="email" {...register('email', {
                        required: true,
                    })}></Form.Control>
                    {errors.email?.type === 'required' && <p>El email es obligatorio</p>}
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label id="subject">Asunto</Form.Label>
                    <Form.Control type="text" name="subject" {...register('subject', {
                        required: true,
                    })}></Form.Control>
                    {errors.subject?.type === 'required' && <p>El asunto es obligatorio</p>}
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label id="comments">¡Déjanos tu comentario!</Form.Label>
                    <Form.Control type="text" name="comment" {...register('comments', {
                        required: true,
                        minLength: 3,
                    })}>
                    </Form.Control>
                    {errors.comments?.type === 'required' && <p>El comentario es obligatorio</p>}
                    {errors.comments?.type === 'minLength' && <p>El comentario debe tener más de 3 caracteres</p>}
                </Form.Group>
                <Button type="submit" id="sendBtn">Enviar</Button>
            </Form>
            </div>
        </section>
    );
}

export default Contact;