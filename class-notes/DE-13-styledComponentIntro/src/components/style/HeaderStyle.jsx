//* esc..ile ekran olusturulur.Div icin ise escd, button icin ise escb,image icin ise escim,basliklar icin esch1,h2.. seklinde.Boylelikle tesekkr linki otomatik geliyor.

// default olarak verdigi degisken ismini sen de istedigin sekilde vereblrsin.o zaman asagidaki export u da duzelt

import styled from "styled-components";

const HeaderS = styled.h1`

 color: red;
 font-size: 2.5rem;
 margin: 1rem 0;

`;
// verdigimiz bu stilleri kullanalim simdi hangi sayfada kullanacaksak.biz Home sayfasinda kullanacagiz.ve orda Headers ile cagiracagiz aslinda bu bir h1 baslik.icine ne baslik atacaksan yaz



//ayni sayfada ayni etiketten stillendirme yapacaksin ureeceksi diye bisey yok.a icin ayri bir sayfa acmaya geek yok.burda headers icinde olsun diyeblrz

// direkt a etiketinden  turetelim.Home da gozuksun diye oraya belirtiyoruz

export const LinkS=styled.a`
color: salmon;
font-size: 2rem;
text-decoration: none;

`



export default HeaderS;






