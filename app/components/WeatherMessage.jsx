var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
        return (
            <h3 className="text-center">It's {temp} &#8457; in {location}</h3>
        )
}

module.exports = WeatherMessage;
