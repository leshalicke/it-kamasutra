import React from 'react';
import {useParams} from "react-router-dom";

const WithURLParams = (Component) => {
	const WithURLParamsWrapper = (props) => {
		const params = useParams();
		return <Component {...props} params={params}/>
	}
	return WithURLParamsWrapper;
};

export default WithURLParams;