export default function importanceColour(id, importance){

	switch (importance){
		case 1:
			return "#0AC92B";
		case 2:
			return "orange";
		case 3:
			return "#cc0c0c";
		default:
			return "#0AC92B"
	}
	
}