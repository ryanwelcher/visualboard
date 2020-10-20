import React, { useState, Fragment }from 'react';
import './App.css';
import Tile from './Tile';

const initalState = [
	{ id: 'one', title: 'Wake up', completed: false },
	{ id: 'two', title: 'Get dressed', completed: false },
	{ id: 'three', title: 'Eat breakfast', completed: false },
	{ id: 'four', title: 'Brush my teeth', completed: false },
	{ id: 'five', title: 'Go to school on the bus with my sister', completed: false },
];
const App = () => {
	const [ tiles, setTiles ] = useState( initalState );
	return (
		<Fragment>
			<h1 id="title">Routine Name</h1>
			<div id="container">
				{ tiles && tiles.map( ( item ) => <Tile key={ item.id } id={ item.id } title={ item.title } /> ) }
			</div>
		</Fragment>
	);
};

export default App;
