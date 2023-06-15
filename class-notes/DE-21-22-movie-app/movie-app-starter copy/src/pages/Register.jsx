import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContex } from "../context/AuthContext";

// AuthContext den gonderilen email ve passwordu yakalamak icin bir useState e ihtycmz var
//asagida inputlarda onChange ile yakalayalim bu girilen degerleri.ve bu yakalan degerleri olusturdugumuz createUser methodunun icine gonderecegiz.bu createContext edileni burda useContext ile kullanabilelim.icine de neyi kullanacaksak onu yaziyoruz.Authcpntex i kullanacagiz tabiki.createUser i nasil cagiracagiz?form yapisi oldugu icin onSubmit ile cagiriizhandleSubmite esitleriz.ve olusturdugumuz methodu cagirip icine email ve passwordu gonderecegiz.kullanici giris yapip register butonuna basinca method calisacak ve firebase istek atacak ve bana basarili mesaji dondurecek
const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // profileUpdate icin firstName ve lastName i de state halinde tutmaliyiz.ve inputlardan girilen degeri yakalayalim.ve handleSubmit de createUsera gonderelim.ve elimizdeki firstName ve lastName ile bu displayName i kendimiz olusturabiliriz backtick ${} ile.
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { createUser, signUpProvider } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;

    createUser(email, password, displayName);
  };
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>

          {/* birden fazla kez ayni stili kullanacaksak @layer ile tanimliyorz.burda bikactane imput ve label var.burdaki style kodlarini alip index.css de tanimlayip burda sadece adini yazariz.peer haric digerlerini al ve css dosyasina tasi.orginali asagidaki gibiydi. sondaki peer haric tasidik.bazi renkleri kendi tanimladigimiz red-main ile degistirdik ve artik butun inputlar ve butun labellar ayni oldu*/}

          {/* <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div> */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="FirstName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_email">First Name</label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="LastName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_email">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="password"
              id="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* flowbite dan bir buton sekli aldik.yine css de className ismi ile @layer yapacagiz ve alttaki butondaki iconu duzenlemek icin flex justf-between items-center veriyrz*/}
          <button className="btn-danger" type="submit">
            Register
          </button>
          {/* signUpProvider degiskeni icinde3 tanimlanan google ile cagirma methodlarini isleyelim.icine birsey yazmiyoruz cunku google dan aliyor bilgileri.yukarida contex icinden cekelim yaliniz */}
          <button
            className="btn-danger-bordered flex justify-between items-center"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

//eger sadece form ya da input yapisi gibi statik kodlari  flowbite,tailwind element,tailwindcomponents,daisyUI gibi sitelerden hazir alacaksak projeye eklemeye gerek yok sadece kodu alacagiz cunku.Ama navbardaki acilip kapanan butonlar gibi hareketli durumlari kullanacaksak o zaman npm install flowbite deyip dokumentationundaki adimlari izleyerek kurulumu tamamlamaliyiz

// dark mode icin 2 sey yapiyoruz.1-config dosyamizda en asagiya kapanis parantezinden hemen once darkMode:"className" yaziyoruz 2-index.html dosyamizin html ine className="dark" yaziyoruz.sonra bunu dark ve white olarak degistirecegiz simdilik sadece dark olacak
//  bg-gray-100 dark:bg-[#28292d] bu kod su demek.dark da bg [#28...] olsun,white da gray-100 olsun

//register olmus bir kullanicinin birde login olmasi var.navigate ile registerdan home a yonlendirmeyi yaptiktan sonra register sayfasinin aynisni alip logine kopyalayalim ve ihtiyacimiz olan kisimlari duzenleyelim
