import React, {Component} from 'react';
import {Button} from '@project/ui';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import './App.css';

const themes = {
	mzt: {
		name: 'mzt',
		colors: {
			primary: '#ff951b'
		},
		backgrounds: {
			siteBackground: '#eee'
		},
		logo:
			'https://cdn.mouzenidis-travel.ru/content/react/media/logo.6e3520a4.svg'
	},
	bomo: {
		name: 'bomo',
		colors: {
			primary: '#b79170'
		},
		backgrounds: {
			siteBackground: '#ddd'
		},
		logo: 'https://www.bomohotels.com/Images/BomoHotels/logo-icon.svg'
	}
};

class App extends Component {
	state = {
		theme: themes.mzt
	};

	componentDidMount() {
		if (window.location.href.indexOf('bomo') > -1) {
			this.setState({
				theme: themes.bomo
			});
		}
	}

	switchTheme = () => {
		const currentTheme = this.state.theme;
		this.setState({
			theme: currentTheme === themes.mzt ? themes.bomo : themes.mzt
		});
	};

	render() {
		const {theme} = this.state;

		return (
			<ThemeProvider theme={theme}>
				<AppContainer>
					<header className="App-header">
						<div className="switch" onClick={this.switchTheme}>
							Switch to{' '}
							{theme.name === 'mzt' ? 'Bomo' : 'Mouzenidis'} theme
						</div>
						<LogoContainer className="logo">
							<Logo src={theme.logo} alt="" />
						</LogoContainer>
						<div className="components">
							<Button>Hey, Click me!</Button>
						</div>
					</header>
				</AppContainer>
			</ThemeProvider>
		);
	}
}

const AppContainer = styled.div`
	background-color: ${props => props.theme.backgrounds.siteBackground};
`;

const LogoContainer = styled.div`
	padding: 4rem;
	text-align: center;
	font-size: 2rem;
`;

const Logo = styled.img`
	height: 10rem;
	width: 150px;
`;

export default App;
