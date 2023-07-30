//!ilk yapacagimiz islem Register islemi.App doc dan create register deyip url i ve body yi alip postmane gidelim.istek post o.sekilde body raw Json yap ve body icin istenenleri doldur ve send yap.burdan donen Token bilgisini her sayfa icin kullanaacagiz

//! 3 sekilde Registr sayfasi olusturulur.1-Bu sayfada yapildigi gibi Formik icinde  yapilir hersey. 2- en guzeli olan ayri bir component olusturup(RegisterForm) schema ve form yapisini orda olusturmak ve register sayfasinda bunlari kullanmak ve Formik in ana yapisinin kalmasi  3-useFormik diye hook olusturarak yapmak


import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";


import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useAuthCall from "../hooks/useAuthCall";

//*rafce ile sayfayi kur.return alanini sil
//*Formik yaz ve acmali kapamali etiketi koy.ve sitesinden import unu getir.icine initialValues yaz ve kendi apikeyin ile acilan API den account dan register create yapisini sol taraftan al getir 
//* Schemayi da getir importu ile beraber



const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(150, "Too Long!")
    .required("username required"),
  first_name: Yup.string().max(100, "Too Long!").required("Required"),
  last_name: Yup.string().max(100, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(8, "En az 8 karakter uzunluğunda olması lazım")
    .max(50, "Too Long!")
    .matches(/\d+/, "Password bir sayı içermelidir")//regex.\d(decimal)+ ile sayi icermesini belrtyrz.- ile istemediklerimizi belirtirz
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir") 
    .required("Required"),
  password2: Yup.string() //! password ile uyusmais lazm
    .oneOf([Yup.ref("password")], "Password aynı olmak zorundadır!")
    .required("Required"),
});


//custom hook umuzu(useAuthCall) olustrdktan sonra burda kullanacgz.asagiya yazdiktan sonra artik onSubmit de formdan gelen values u register fonksiyonuna gonderecgz
const Register = () => {
  const register=useAuthCall()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          {/* //!1- formik in icindeki initialValues degerlerin kalibini Api sitemize gore yapiyoruz.Api dokumantasyonunda create register i bul ve soldaki yapiyi getir buraya yapistir.buna gore yapi kuracagiz
          //*2-validate lazim.ya formik in kendi validatini ya da validation icindeki validationSchema kismini yine formik in sitesinden getiriyoruz ve en yukariya icerisindeki tanimlama bolumunu de,yup importunu da getiriyoruz,ayarlamalari yap(Apinin adresinden yine create_register alaninda bunlari da soyluyor.username 1....150 characket ).initialValues daki key ler ile burdaki keyler tamamen ayni olmali.Password icin yup sitesindeki matches i eklemeliyiz.if else sarti yapar.icermesini istediklerimizi +/ ile belirtiriz,icermesini istemediklerimizi -/ ile belrtrz.sayi icin \d kullaniriz.
          //* password2 nin password ile ayni olmasi lazim.bunu .oneOf([Yup.ref("password","mesaj")]) ile saglariz.ref("neyi referans alacaksa o")
          //!Formik kisminin onSubmitini de yazdiktan sonra  Formik in Formunu  siteden getirip ayarlamalari yapiyoruz. Önce bir CallBack function aciyoruz {({})=> buraya Form u yapistryrz} .
          //*ve CallBacfk in icine yine sitesindeki CallBack degerlerini yaziyoruz values,  errors,touched,handleChange, handleBlur, handleSubmit, ihtiyacin olmayanlari sileblrsin(mesela handleSubmit e gerek yok cunku formik in form unu kullnyrz ama ornek olsn diye biraktk)
          //! icine ise mui den bir TextField secip, getirdigimiz input(TextField) i mui de oldugu gibi Form icinde <Box></Box> icnde kopyaliyorz.herbir input alani icin cogaltip duzenlyrz
      */}
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              //! onSubmit i de siteden getir.values demek ustteki inintialValues lari yakala demek submit yapinca.birde action ekliyorz o da yapacgmz islemleri temsl eder.

              //!submit işlemi gerçekleştiğinde yapmasını istediğimiz işlemleri buraya yazıyoruz.ve sonra formu resetlemek icin actions.resetForm() yaziyorz

              console.log(values);
              register(values); // customer hook islemleri sonrasi yazdik.Artik kullaniciyi ana sayfaya yonlendirelim navigate ile
              actions.resetForm();
            }}
          >
          {/* 1.yol kapsayici arasina CallBack funktion acip formigin bize verdigi methodlari icerde kullaniyoruz. //! 2.yol ise yine formik icinde initialValues,validationSchema ve onSubmit yapip, Callback yerine componentmantiginda propslari alip bir RegisterForm componenti olusturup oraya gonderiyorz.boylece bir alt componente gondereblyrz.daha clean.bunu 2-login logout folder blumunde 2.bolumde yapiyoruz
          //?3- useFormik hooku ile kullanimk var birde. ikinci yontem tercih ediliyor daha cok*/}
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              {/* <Form yazip importunu formikden yapip arasina mui den  yapina uygun text field lerden birini al. */}
              <Form> 
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    id="username"
                    label="User Name"
                    type="text"
                    variant="outlined"
                    name="username"
                    //!Formu bosaltmak icin value degeri verilir.values daki username den gelecek bu value
                    value={values.username}
                    //! kendim onChange(veri yakalmak icin) vermyrm formikin verdigi handleChange methodunu yaziyorum
                    onChange={handleChange}
                    //! kullanicinin inputtan ayrildigini yakalamk icin de formik in verdigi methodu kullanyrz
                    onBlur={handleBlur}
                    //!mui deki helpertext attributu var ve  ilgili mesajları gösterir.username alanina gelindiyse ve dokunduysa(touched) ve username alaninda error varsa(formikin verdigi errorsu yakala).ikisi de true ise  de ikinci true yu doner.o nedenle dondurmesini istedigimizi  operatorunun sonuna yaziyoruz
                    helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa 
                    //!kirmizi olmasini saglayan da error attr.var.username alanina dokunulup ve error varsa formikin errorunu yakala diyoruz
                    error={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için

                    //* input alanina yukaridaki SignupShema da tanimladigimiz sartlara aykiri bir durum varsa alandan ayrilinca(onBlur) hata mesaji ile beraber kirmizi bir input alani ve hata mesaji veriyor.
                  />
                  {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}

                  <TextField
                    id="first_name"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="last_name"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password2"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                 />

                  <Button type="submit" variant="contained" size="large">
                    SUBMIT
                  </Button>
                </Box>
              </Form> 
              
           )}
          </Formik>
 <Grid>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
       

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
        </Grid>
    </Container>
    </>
 ); 
};
 
export default Register;

 //!! once formikten initialValues degerleri alip getir.sonra formikin validati yerine yuptan validationSchema yi getir ve initial degerler icin olan sartlari yaz.sonra onsubmit yapinca(formu gonderince) olmasi gereknler(action).sonra formigin fonksiyonlarini,degerleri,methodlari yakalayablmek icin kapsayici formik alaninin icine(<Formik>buraya</Formik>) olmazsa olmaz olan callback degerlerini getir.sonra bu callback function bir form elementi return ediyor.bunu kendimiz de yazablrz, formikin form elementini getir boylece onSubmitlerle ugrasmadik otomatik geliyor form yapisi ile..ve mui den textfield yapisini getirdik,degrleri tanimlkadik ,value degeri verdik onchange,onBlur u yazdik ve eklemeleri yaptik(helper text ve error mesajini dinamik sekilde ayarladik).bu sistemi butun input alanlari icin uyguladik.boylece form yapisini kurariz */}
{/* variant=contained ile ici dolu bir button elde ederiz */}