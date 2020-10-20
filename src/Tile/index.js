import React, { useState } from 'react';
import './style.css';

const Tile = ( { title } ) => {
	const [ completed, setCompleted ] = useState( false );
	const classes = ! completed ? 'item' : 'item --completed';
	return (
		<button className={ classes } onClick={ () => {
			setCompleted( ! completed );
		} }><span className='tile-name'>{ title }</span></button>
	);
};

export default Tile;

