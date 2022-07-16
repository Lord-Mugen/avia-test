import React from 'react'
import { Icon } from '@iconify/react';

const Networks = () => {
  return (
    <section className="c-social">
            <h1 className="c-social__title">Unase a nuestra comunidad</h1>
        <div className="c-social__icons">
          <Icon icon="entypo-social:facebook-with-circle" className="c-social__icon"/>
          <Icon icon="entypo-social:instagram-with-circle" className="c-social__icon"/>
          <Icon icon="ant-design:twitter-circle-filled" className="c-social__icon"/>
          <Icon icon="entypo-social:linkedin-with-circle" className="c-social__icon"/>
          <Icon icon="entypo-social:youtube-with-circle" className="c-social__icon"/>
        </div>
    </section>
  )
}

export default Networks