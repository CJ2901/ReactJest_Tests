import PropTypes from 'prop-types';

export const FirstApp = ( { title , subTitle, name } ) => {

    return (
        <>
            <h1 data-testid='test-title'> Hola, soy { title } </h1>
            {/* <code>{JSON.stringify(objetoMensaje)}</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }. Derechos reservados</p>
        </>
    )

}

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Alexander Magallanes',
    subTitle: 'No hay subtítulo en este episodio',
    title: 'el PoderMaximo',
}
