import React from 'react';

export default function PieDePagina() {
    
    return (
        <footer style={{backgroundColor: "lightgray", borderTop: "1px solid grey", display: "flex", flexDirection: "column"}} target="_blank">
            <div style={{ display: "flex", justifyContent: "center", paddingLeft: "20px", paddingTop: "15px", paddingBottom: "15px"}}>
                <div>
                    <small class="rights">
                        © 2020 E-Ric
                    </small>
                </div>
                <div>
                    <small style={{paddingLeft: "10px", paddingRight: "10px"}}>
                        •
                    </small>
                </div>
                <div>
                    <small class="rights">
                        <a href="#">Privacy Policy and Cookies Policy</a> 
                    </small>
                </div>
                <div>
                    <small style={{paddingLeft: "10px", paddingRight: "10px"}}>
                        •
                    </small>
                </div>
                <div>
                    <small>
                        GitHub
                        <a href='https://github.com/EricGomez29' target="_blank">: EricGomez29</a>
                    </small>
                </div>
                <div>
                    <small style={{paddingLeft: "10px", paddingRight: "10px"}}>
                        •
                    </small>
                </div>
                <div>
                    <small>
                        Email
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgDRxZGfkBqFLzdPnjlccXRQbkxJmrdnBbJcSlKsJLmFmBFvqKQcHHQLlpSgkWbBxfSvB' target="_blank">: eric.gomez.unq@gmail.com</a>
                    </small>
                </div>
            </div>
        </footer>
    )
}