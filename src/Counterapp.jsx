import {useState} from 'react';
import PropTypes from 'prop-types';

export const Counterapp = ( { value } ) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
        
    }

    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>

            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button aria-label='btn-more' onClick={ handleAdd }> +1 </button>
            <button aria-label='btn-less' onClick={ handleSubstract }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>

        </>
    );

}

Counterapp.propTypes = {
    value: PropTypes.number.isRequired,
}

Counterapp.defaultProps = {
    value: 23,
}