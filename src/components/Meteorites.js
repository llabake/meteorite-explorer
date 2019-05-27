import React from 'react';
import { connect } from 'react-redux';
import Meteorite from './Meteorite';
import MeteoriteHeader from './MeteoriteHeader';
import { HashLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
	text-align: center;
`;
export default connect(state => ({
  meteorites: state.meteorites.meteorites,
	searchResults: state.meteorites.searchResults,
	loading: state.meteorites.loading
	}))(({ meteorites, searchResults, loading }) => {
  const data = searchResults || meteorites;
  return (
		<div>
			<table id="meteorite-table">
				<MeteoriteHeader />
				<HashLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={'#4A4A4A'}
          loading={loading}
        />
				{
					data.map(meteorite => (<Meteorite key={meteorite.id} meteorite={meteorite} />))
				}
		</table>
	</div>
  );
});
