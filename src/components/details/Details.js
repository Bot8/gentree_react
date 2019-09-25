import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
    renderContent = () => {
        const { person, loading, error } = this.props;
        
        if (error) {
            return <p>Error: {error}</p>;
        }
        
        if (loading) {
            return <p>Loading</p>;
        }
        
        return <p>
            {person &&
            <h2>
                person
            </h2>
            }
            {loading &&
            <h2>
                loading
            </h2>
            }
            {error &&
            <h2>
                loading
            </h2>
            }
        </p>;
    };
    
    render() {
        const content = this.renderContent();
        
        return (
            <div className="details">
                {content}
            </div>
        );
    };
}

Details.propTypes = {
    person: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};
