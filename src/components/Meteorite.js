import React from 'react';

const dateFormatter = (date) => {
  return new Date(date).getFullYear()
}
const Meteorite = (data) => {
	const meteorite = data.meteorite
	return (
		<tbody>
		<tr>
			<td>{meteorite.name}</td>
			<td>{meteorite.id}</td>
			<td>{meteorite.nametype}</td>
			<td>{meteorite.recclass}</td>
			<td>{meteorite.mass}</td>
			<td>{meteorite.fall}</td>
			<td>{meteorite.year ? dateFormatter(meteorite.year) : ''}</td>
			<td>{meteorite.reclat}</td>
			<td>{meteorite.reclong}</td>
		</tr>
	</tbody>
	) 
}

export default Meteorite;
