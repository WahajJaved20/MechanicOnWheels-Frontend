const interiorExteriorFields = {
    header: "INTERIOR/EXTERIOR", 
    fields: [
    {text: "Lights (Head, Brakes, Turn, Parking)"},
    {text: "Windsheild / Glass"},
    {text: "Wipers"},
    {text: "Horn / Interior Lights"}
]}

const batteryFields = {
    header: "BATTERY", 
    fields: [
    {text: "SEE ATTACHED PRINTOUT"},
]}

const underHoodFields = {
    header: "UNDER HOOD", 
    fields: [
    {text: "Oil Condition"},
    {text: "Transmission Fluid"},
    {text: "Power Steering / Brake Fluid"},
    {text: "Radiator / Coolant"},
    {text: "Air Filter"},
    {text: "Cabin Filter"},
    {text: "Belts"},
    {text: "Catalytic Converter"},
    {text: "Spark Plugs"},
    {text: "Spark Coils"},
    {text: "Oxygen Sensor"},
    {text: "Engine Foundation"},
    {text: "Alternator"},
]}

const underVehicleFields = {
    header: "UNDER VEHICLE", 
    fields: [
    {text: "Brake Lines / Brake Hoses / Brake Cables / Fuel Lines"},
    {text: "Suspension & Steering"},
    {text: "Drive Line (Axles / CV Shafts)"},
    {text: "Wheel Bearing"},
    {text: "Exhaust System / Shocks & Structs"},
    
]}

const brakeFields = {
    fields: [
        {text: "LF"},
        {text: "RF"},
        {text: "LR"},
        {text: "RR"},
    ]
}

const optionValues = {
    interiorExteriorFields: {
        1:"",
        2:"",
        3:"",
        4:""
    },
    batteryFields: {
        1:""
    },
    underHoodFields: {
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:"",
        11:"",
        12:"",
        13:""
    },
    underVehicleFields: {
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
    },
    brakeFields: {
        1:"",
        2:"",
        3:"",
        4:""
    }
}
export {interiorExteriorFields, batteryFields, underHoodFields, underVehicleFields, brakeFields, optionValues}