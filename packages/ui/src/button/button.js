import React from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	color: white;
	font-size: 1rem;
	padding: 0.75rem 2rem;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	border: none;
	border-radius: 4px;
	outline: none;
	&:hover {
		background-color: ${props => darken(0.08, props.theme.colors.primary)};
	}
`;

export default props => (
	<Button onClick={props.onClick}>{props.children}</Button>
);
