import { render, fireEvent, screen } from "@testing-library/react";
import { FavoritesComponent } from "../components/FavoritesComponent";

xdescribe("FavoritesComponent", () => {
	xit("renders without crashing", () => {
		const [favorites, toggleFavorite] = FavoritesComponent();
		expect(favorites).toBeDefined();
		expect(toggleFavorite).toBeDefined();
	});
});
