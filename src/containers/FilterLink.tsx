import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/actions'
import Link from '../components/common/Link'

export interface IDispatchFromProps {
    onClick: any;

}

export interface IStateFromProps {
    active: any;
}

const mapStateToProps = (state:  any, ownProps: any) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect<IStateFromProps, IDispatchFromProps, {filter: any}>(
    mapStateToProps,
    mapDispatchToProps
)(Link)