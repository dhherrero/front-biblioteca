import Navbar from "../NavBar/Navbar";
import './Ajustes.css';

export default function Ajustes (){
    return(
        <>
            <Navbar />
            <h2 className="tt2"> AJUSTES</h2>
            
            <div className="ajustesContent">
                <div className="infoUser">
                <h3 className="changePP">Información usuario</h3>
                    <p><b>Nombre:</b></p>
                    <p><b>Correo electrónico:</b></p>
                    <p><b>Teléfono:</b></p>
                    <p><b>Dirección:</b></p>
                </div>
                <div className="cambiarP">
                    <form>
                        <div className="formularioCambio">
                            <h3 className="changePP">Cambio de contraseña</h3>
                            <label  className="labelPassword" >Contraseña actual</label>
                            <input className="inputAjustes" type="password" name="oldPassword"/>
                            <label className="labelPassword" >Contraseña nueva</label>
                            <input className="inputAjustes" type="password" name="newPassword"/>
                            <label className="labelPassword" >Repite la contraseña nueva</label>
                            <input className="inputAjustes" type="password" name="repNewPassword"/>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )

}