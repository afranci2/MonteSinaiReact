import React from "react";
import { TertiaryButton } from "../../../../components";

const BodySectionImageLeft = (props) => {
  return (
    <div className="h-full bg-red-400 absolute text-black w-full ">
      <div className="content w-11/12 grid grid-cols-2">
        <div className="image">
          <img src={props.image}></img>
        </div>
        <div className="text">
          <p>Celebrando 50 Años</p>
          <p>
            EDIT THIS Para más información sobre diezmos y donaciones, seguridad
            y privacidad, impuestos, etc., póngase en contacto con nosotros
          </p>
          <TertiaryButton
            buttonColor="bg-yellow-400"
            text="Historia"
          ></TertiaryButton>
        </div>
      </div>
    </div>
  );
};

export default BodySectionImageLeft;
