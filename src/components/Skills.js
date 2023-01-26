import React from 'react'
import webStack from '../assets/img/web-stack.svg'
import '../assets/styles/Skills.css'

export default function Skills() {
    return (
        <div className='skills'>
            <p
                style={{
                    fontSize: '2.6rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                What I do?
            </p>
            <section>
                <div className='skill__img'>
                    <img src={webStack} alt='full stack web dev' />
                </div>
                <div className='skill__descriptions'>
                    <div className='skil__desc'>
                        <p>
                            ✨Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis dolorum nulla harum impedit hic
                            recusandae quaerat dicta blanditiis illum totam
                            fugit numquam in perferendis, tempore magnam.
                        </p>
                        <p>
                            ✨Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis dolorum nulla harum impedit hic
                            recusandae quaerat dicta blanditiis illum totam
                            fugit numquam in perferendis, tempore magnam.
                        </p>
                        <p>
                            ✨Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis dolorum nulla harum impedit hic
                            recusandae quaerat dicta blanditiis illum totam
                            fugit numquam in perferendis, tempore magnam.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
