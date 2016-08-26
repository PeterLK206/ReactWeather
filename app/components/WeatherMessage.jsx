var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
        return (
            <h3>Its {temp} Degrees in {location}</h3>
        )
}

module.exports = WeatherMessage;
