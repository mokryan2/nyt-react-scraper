import React from "react";

const Query = props => (
    <form>
        <div className="form-group">
            <label htmlFor="topic">
                <strong>Topic</strong>
            </label>
            <input
                className="form-control"
                id="topic"
                type="text"
                value={props.q}
                placeholder="Bitcoin"
                name="q"
                onChange={props.handleInputChange}
                required
            />
            <label htmlFor="start-year">
                <strong>Starting Year</strong>
            </label>
            <input
                className="form-control"
                id="start-year"
                type="number"
                value={props.start_year}
                placeholder="2010"
                name="start_year"
                onChange={props.handleInputChange}
                required
            />
            <label htmlFor="end-year">
                <strong>Ending Year</strong>
            </label>
            <input
                className="form-control"
                id="end-year"
                type="number"
                value={props.end_year}
                placeholder="2018"
                name="end_year"
                onChange={props.handleInputChange}
                required
            />
        </div>
        <div className="pull-right">
            <button
                onClick={props.handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger"
            >
                Search
      </button>
        </div>
    </form>
);

export default Query;
