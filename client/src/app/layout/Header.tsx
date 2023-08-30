import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
	darkMode: boolean;
	handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
	return (
		<AppBar position="static" sx={{ mb: 4 }}>
			<Toolbar>
				<Typography variant="h6">Re-Store</Typography>
				<Switch
					name="darkTheme"
					checked={darkMode}
					onChange={handleThemeChange}
					inputProps={{ "aria-label": "dark-theme-controller" }}
				/>
			</Toolbar>
		</AppBar>
	);
}
