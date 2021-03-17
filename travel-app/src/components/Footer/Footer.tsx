  
import React from 'react';
import rss from '../../assets/images/rss.svg';
import translate from '../../translateData/translate'

import './Footer.css'

interface FooterProps {
  lang: string,
}

 const Footer: React.FC<FooterProps> = (props) => {
   const { lang } = props;

  return (
    <div className='footer'>
      {translate.footer.create[lang]}
      <a
        className='footer_link'
        href='https://github.com/DimaKukhta'
        rel='noreferrer'
        target='_blank'>
          Dima Kukhta
      </a>,
      <a
        className='footer_link'
        href='https://github.com/artemosadchuck'
        rel='noreferrer'
        target='_blank'>
          Artem Osadchuck
      </a>,
      <a
        className='footer_link'
        href='https://github.com/anhelinavr'
        rel='noreferrer'
        target='_blank'>
          Anhelina Vrubleuskaya
      </a>,
      <a
        className='footer_link'
        href='https://github.com/natgeo89'
        rel='noreferrer'
        target='_blank'>
          Viktar Sakharuk
      </a>
      {translate.footer.for[lang]}
      <a 
        className='footer_link'
        href='https://rs.school/js/'
        rel='noreferrer'
        target='_blank'>
          <img
            className='footer_image'
            src={rss}
            alt='Rolling Scope School'/>
      </a>
      <span>2021</span>
    </div>
  )
}

export default Footer;