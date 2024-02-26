import React, { useEffect } from 'react'
import "./BasicFormComponent.css"

const BasicFormComponent = () => {
  
  useEffect( ()=> {
    // List of countries
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire*",
    "Azerbaijan",
    "Baden*",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Bavaria*",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin (Dahomey)",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Brunswick and Lüneburg*",
    "Bulgaria",
    "Burkina Faso (Upper Volta)",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Central American Federation*",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo Free State, The*",
    "Costa Rica",
    "Cote d’Ivoire (Ivory Coast)",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Czechoslovakia*",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Duchy of Parma, The*",
    "East Germany (German Democratic Republic)*",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Federal Government of Germany (1848-49)*",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Grand Duchy of Tuscany, The*",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hanover*",
    "Hanseatic Republics*",
    "Hawaii*",
    "Hesse*",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kingdom of Serbia/Yugoslavia*",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Lew Chew (Loochoo)*",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mecklenburg-Schwerin*",
    "Mecklenburg-Strelitz*",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nassau*",
    "Nauru",
    "Nepal",
    "Netherlands, The",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North German Confederation*",
    "North German Union*",
    "North Macedonia",
    "Norway",
    "Oldenburg*",
    "Oman",
    "Orange Free State*",
    "Pakistan",
    "Palau",
    "Panama",
    "Papal States*",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Piedmont-Sardinia*",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Genoa*",
    "Republic of Korea (South Korea)",
    "Republic of the Congo",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Schaumburg-Lippe*",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands, The",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Texas*",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Two Sicilies*",
    "Uganda",
    "Ukraine",
    "Union of Soviet Socialist Republics*",
    "United Arab Emirates, The",
    "United Kingdom, The",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Württemberg*",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Get the select element
  const countrySelect = document.getElementById("country");

  // Populate the dropdown with countries
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.add(option);
  });
}, [])

  return (
    <>
     <div className="form-container">
        <h2 id='heading'>Basic Form</h2>
        <form className="form-detail" action="#" method="get" id="myform">
            <input
            type="text"
            name="first_name"
            id="first_name"
            className="input-text"
            placeholder="First Name"
            required=""
            />
            <input
            type="text"
            name="last_name"
            id="last_name"
            className="input-text"
            placeholder="Last Name"
            />
            <input
            type="text"
            name="your_email"
            id="your_email"
            className="input-text"
            required=""
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            placeholder="Your Email"
            />
            <input
            type="text"
            name="street"
            className="street"
            id="street"
            placeholder="Street + Nr"
            required=""
            />
            <input
            type="text"
            name="additional"
            className="additional"
            id="additional"
            placeholder="Additional Information"
            />
            <input
            type="text"
            name="zip"
            className="zip"
            id="zip"
            placeholder="Zip Code"
            required=""
            />
            <select name="country" className="country" id="country">
            <option value="country">Country</option>
            </select>
            <input
            type="text"
            name="phone"
            className="phone"
            id="phone"
            placeholder="Phone Number"
            required=""
            />
            <div className="agreement">
            <input type="checkbox" name="checkbox" required="" />
            <p>
                I do accept the
                <a href="#" className="text">
                Terms and Conditions
                </a>{" "}
                of your site.
            </p>
            </div>
            <input className="btn" type="submit" name="submit" defaultValue="Submit" />
        </form>
    </div> 
    </>
  )
}

export default BasicFormComponent
