import imagen from '../../public/img/nosotros.jpg'
import styles  from '~/styles/nosotros.css'

export function meta() {
    return {
        title: 'GuitarLA - Sobre nosotros',
        description: 'Venta de guitarras, blog de música'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>

            <div className='contenido'>
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>Nam vel porttitor turpis. Nulla facilisi. Proin diam velit, malesuada eget
                        tellus vitae, auctor luctus nunc. Nunc at nisl ligula. Etiam in ligula sed ex
                        venenatis bibendum vitae eu nulla. Etiam sit amet ultrices enim, nec volutpat
                        lectus. Duis mollis velit non lacus tempor, non eleifend ligula porta. Nullam
                        imperdiet augue magna, faucibus eleifend dolor porttitor non.</p>

                    <p>Nam vel porttitor turpis. Nulla facilisi. Proin diam velit, malesuada eget
                        tellus vitae, auctor luctus nunc. Nunc at nisl ligula. Etiam in ligula sed ex
                        venenatis bibendum vitae eu nulla. Etiam sit amet ultrices enim, nec volutpat
                        lectus. Duis mollis velit non lacus tempor, non eleifend ligula porta. Nullam
                        imperdiet augue magna, faucibus eleifend dolor porttitor non.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros