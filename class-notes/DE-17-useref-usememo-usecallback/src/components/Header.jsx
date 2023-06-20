import React from 'react';
import { memo } from 'react';
import clarusLogo from '../assets/cw_logo.png';

// memo sarmallayıcısı sayesinde header componentinde değişiklik olmadığı sürece yeni bir render gerçekleşmez, eğer bu comp.te bir değişiklik yaparsanız, o zaman tekrar render olur

//ikinci butona basilinca Header da resim gelsin dedik.ReactMemo sayfasinda resimi import edip Headera gonderdik.burda da karsilayip kullandik
const Header = ({resim}) => {
  console.log('HEADER COMPONENT RENDERED');
  return (
    <div className="header">
      <img
        src={resim}
        alt="cw_logo"
        style={{ margin: '1rem', maxHeight: '200px' }}
      />
    </div>
  );
};

//ReactMemo nun kullanilip ise yaramasi icin asagida memo sarmalina aliyoruz.boylece her renderda bos yere Header da calismasin

export default memo(Header);

