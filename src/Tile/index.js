import React, { useState } from 'react';
import './style.css';

const Tile = ( { title } ) => {
	const [ completed, setCompleted ] = useState( false );
	const classes = ! completed ? 'item' : 'item --completed';
	return (
		<button className={ classes } onClick={ () => {
			setCompleted( ! completed );
		} }>{ title }</button>
	);
};

export default Tile;

