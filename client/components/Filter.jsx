import React from 'react'
import { Actions } from '../actions/Filter'
import { filterArray } from '../constants/FilterConstants'
import { connect } from 'react-redux'

const Filter = props => {
    const filterOptions = filterArray.map(filter => (<option key={filter}>{filter}</option>))
    return (
        <div>
            <select onChange={e => { props.onFilterChange(e.target.selectedIndex) }}>
                {filterOptions}
            </select>
        </div>
    )

}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    onFilterChange: filterIndex => { dispatch(Actions.changeFilter(filterIndex)) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)