var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li><Link to='/?location=Seattle'>Seattle, WA</Link></li>
                <li><Link to='/?location=Seattle'>Rio, Brazil</Link></li>
            </ol>
        </div>
    )
};

module.exports = Example;
