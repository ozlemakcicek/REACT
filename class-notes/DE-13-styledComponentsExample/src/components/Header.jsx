import React from "react";
import ButtonSSS, { DetayButton } from "./styles/ButonSSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import DisplaySSS from "./styles/DisplaySSS";

// asagida once html kodu olarak div h1 p yazacagiz ama sonra bunlarin isimlerini saylalarin isimleri olarak veriyoruz
const Header = () => {
  return (
    //en dista kapsayici div var.icinde de iki tane div var.birinin icinde img ve iki tane button un oldugu bir div var.
    // img ler import edilmez.direkt yolu yazilir.public de acikta yani
    // ikinci div de ise h1,p ve buttonlar in oldugu div  var ve birde img var
    <div>
      <DisplaySSS>
        {/* <img src="../../public/images/logo.png" alt="" /> ya da public de oldugu icin dogrudan ./ ile yazablrsn */}
        <LogoSSS src="./images/logo.png" alt="" />
        <div>
          {/* butonlari da kendi icinde degistirmek icin props gonderecegiz.ister hemen burda rengi de degistir ister ButtonsSSS sayfasina giderek yaparsin */}
          <ButtonSSS fatih="#A62440">Apply Courses</ButtonSSS>
          <ButtonSSS halit>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>
<hr />
      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButtonSSS halit>Start your new Carrier</ButtonSSS>
          {/* bu sonuncu buttonu ButtonsSSS sayfasinda yandas  button olarak actik */}
          <DetayButton>Details</DetayButton>
        </div>

        <ImageSSS src="./images/hero.jpg" alt="" />
      </DisplaySSS>
    </div>
  );
};

export default Header;


