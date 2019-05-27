import React from 'react';
import { connect } from 'react-redux';
import {  searchMeteorites } from '../actions/meteoriteAction';

export const SearchBar = ({ searchMeteorites: search }) => (
	<form>
		<div className='row'>
			<input 
				type='text' 
				id='search' 
				placeholder='Enter search terms'
				onChange={ event => search(event.target.value) }
			/>
			<input type="submit" value="SEARCH"/>
		</div>
	</form>
);

export default connect(null, { searchMeteorites })(SearchBar);
