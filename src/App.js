import React, { useState } from 'react';
import './App.css';
import Tile from './Tile';

const initalState = [
	{ id: 'one', title: 'Wake Up', completed: false },
	{ id: 'two', title: 'Two2', completed: false },
	{ id: 'three', title: 'Three', completed: false },
	{ id: 'four', title: 'Four', completed: false },
	{ id: 'five', title: 'Five', completed: false },
];
const App = () => {
	const [ tiles, setTiles ] = useState( initalState );
	return (
		<div id="container">
			{ tiles && tiles.map( ( item ) => <Tile key={ item.id } id={ item.id } title={ item.title } /> ) }
		</div>
	);
};

export default App;
