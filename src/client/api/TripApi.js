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
<<<<<<< HEAD
=======
        console.log('locationstate', locationState);
>>>>>>> 2170ade52d0d82bd6dd6de78ef2a361c638aafd0
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'DELETE',
<<<<<<< HEAD
            headers: {
=======
            // mode: "no-cors",
            headers: {
                // Accept: 'application/json',
>>>>>>> 2170ade52d0d82bd6dd6de78ef2a361c638aafd0
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
<<<<<<< HEAD


    repTripData(locationState, trip) {
        const { isLoggedIn, token, userId } = locationState;
        let url = `${AppConfig.API_URL_REL}`;

        const options = {
            method: 'post',
            headers: {
=======
    repTripData(locationState, trip) {
        const { isLoggedIn, token, userId } = locationState;
        let url = `${AppConfig.API_URL_REL}/${trip.id}`;

        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
>>>>>>> 2170ade52d0d82bd6dd6de78ef2a361c638aafd0
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + locationState.token
            },
            body: JSON.stringify({
                isLoggedIn: isLoggedIn,
                userId: userId,
                token: token,
                trip: trip
              })
<<<<<<< HEAD
          }
          
          return fetch(url, options).catch(err => {
            console.error('Request failed', err)
          })
    }


    handleChange(e, locationState, trip){
        const isChecked = e.target.checked;
        var check;
        debugger;
=======
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
>>>>>>> 2170ade52d0d82bd6dd6de78ef2a361c638aafd0
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
<<<<<<< HEAD
=======
                Accept: 'application/json',
>>>>>>> 2170ade52d0d82bd6dd6de78ef2a361c638aafd0
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