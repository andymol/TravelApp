import AppConfig from "../config/appConfig";

export default class TripApi {
    /**
     *
     * @param {ObjectMember} locationState
     */
    getAllTripsData(locationState) {
        let url = `${AppConfig.API_URL}/${locationState.userId}`;

        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            }
        }).then(res => {
            if (res.ok === true) {
                return res.json();
            } else {
                return Promise.resolve([]);
            }
        });
    }

    delTripData(locationState,trip) {
        console.log('locationstate', locationState);
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'DELETE',
            // mode: "no-cors",
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            }
        }).then(res => {
            if (res.ok === true) {
                return res.json();
            } else {
                return Promise.resolve([]);
            }
        });
    }
    repTripData(locationState, trip) {
        const { isLoggedIn, token, userId } = locationState;
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            },
            body: JSON.stringify({
                isLoggedIn: isLoggedIn,
                userId: userId,
                token: token,
                trip: trip
              })
        }).then(res => {
            if (res.ok === true) {
                return res.json();
            } else {
                return Promise.resolve([]);
            }
        });
    }
    handleChange(e, locationState, trip){
        const isChecked = e.target.checked;
        var check;
        if(isChecked){
            check = "true";
        } else{
            check ="false";
        }
        const { isLoggedIn, token, userId } = locationState;
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            },
            body: JSON.stringify({
                Active: check
              })
        }).then(res => {
            if (res.ok === true) {
                return res.json();
            } else {
                return Promise.resolve([]);
            }
        });
    }
}