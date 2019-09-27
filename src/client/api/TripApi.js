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
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'DELETE',
            headers: {
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
        let url = `${AppConfig.API_URL_REL}`;

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            },
            body: JSON.stringify({
                isLoggedIn: isLoggedIn,
                userId: userId,
                token: token,
                trip: trip
              })
          }
          
          return fetch(url, options).catch(err => {
            console.error('Request failed', err)
          })
    }


    handleChange(e, locationState, trip){
        const isChecked = e.target.checked;
        var check;
        debugger;
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