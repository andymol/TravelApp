/* Configuration for fields displayed in application*/
export const fieldConfig = {
  "photo": {component: "ATPhoto", componentType: "ATPhoto", name: "photo", label: "Photo"},
  "firstname": {component: "ATField", componentType: "TextField", name: "firstname", label: "First Name", required:"true"},
  "lastname": {component: "ATField", componentType: "TextField", name: "lastname", label: "Last Name", required:"true"},
  "country": {component: "ATField", componentType: "TextField", name: "country", label: "Country"},
  "address": {component: "ATField", componentType: "TextField", name: "address", label: "Address", multiline:"true"},
  "city": {component: "ATField", componentType: "TextField", name: "city", label: "City"},
  "state": {component: "ATField", componentType: "TextField", name: "state", label: "State"},
  "zip": {component: "ATField", componentType: "TextField", name: "zip", label: "Zip Code"},
  "phone": {component: "ATField", componentType: "TextField", name: "phone", label: "Phone"},
  "website": {component: "ATField", componentType: "TextField", name: "website", label: "Website"},
  "facebook": {component: "ATField", componentType: "TextField", name: "facebook", label: "Facebook"},
  "instagram": {component: "ATField", componentType: "TextField", name: "instagram", label: "Instagram"},
  "bio": {component: "ATField", componentType: "TextField", name: "bio", label: "Short Bio", multiline:"true"},
  "portfolio": {component: "ATField", componentType: "TextField", name: "portfolio", label: "Portfolio"},
  //"tnc": {component: "ATField", componentType: "TextField", name: "tnc", label: TNC_STATEMENT},
  "submit": {component: "ATButton", componentType: "Button", name: "submit", label: "Submit"},
  "email": {component: "ATField", componentType: "TextField", name: "email", label: "Email", required:"true"},
  "password": {component: "ATField", componentType: "TextField", name: "password", label: "Password", required:"true"},
  "tourtitle": {component: "ATField", componentType: "TextField", name: "title", label: "Tour title", required:"false"},
  "tourlocation": {component: "ATField", componentType: "TextField", name: "location", label: "Tour location", required:"false"},
  "tourtype": {component: "ATField", componentType: "TextField", name: "type", label: "Tour type", required:"false"},
  "daysnumber": {component: "ATField", componentType: "TextField", name: "days", label: "Number of days", required:"false"},
  "startdate": {component: "ATField", componentType: "TextField", name: "startdate", label: "Start date", required:"false"}, 
  "maxpeople": {component: "ATField", componentType: "TextField", name: "maxpeople", label: "Maximum people", required:"false"},
  "price": {component: "ATField", componentType: "TextField", name: "price", label: "Price", required:"false"},
  "currency": {component: "ATField", componentType: "TextField", name: "currency", label: "Currency", required:"false"},
  "dayText": {component: "ATField", componentType: "TextField", name: "dayText", label: "Day", required:"false"},
  "addDay": {component: "ATLink", componentType: "Link", name: "addDays", label: "Add another day"},
  "gallery-horizontal": {component: "ATField", componentType: "TextField", name: "dayText", label: "Choose Files", required:"false"},
  "daySelector": {component: "ATField", componentType: "TextField", name: "dayText", label: "Itinerary", required:"false"}
}
