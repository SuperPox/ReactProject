export default function manageCity(state = {
  cities: []
}, action) {
  switch (action.type) {
    case 'ADD_CITY':
      const band = { id: Math.random(), name: action.name }
      return { ...state, cities: [...state.cities, band] }
    case 'DELETE_CITY':
      const cities = state.cities.filter(city => city.id !== action.id);
      return { cities };
    default:
      return state;
  }
};