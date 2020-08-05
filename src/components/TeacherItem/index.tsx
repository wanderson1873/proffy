import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/65118827?s=460&u=7c508a738d926eb0f20fdef0502bd2aab874f51c&v=4" alt="Wanderson O" />
                <div>
                    <strong>Wanderson Oliveira</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada
                       <br /><br />
                       Apaixonado por explodir coisas em labotatório e por mudar a vida de pessoas com suas explosôes.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                                Entrar em contato
                            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;