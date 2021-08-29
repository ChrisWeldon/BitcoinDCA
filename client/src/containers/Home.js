import { connect } from 'react-redux';
import Home from '../components/Home';
import { logout } from '../actions/authentication'
import { start_editing } from '../actions/tasking'

const mapStateToProps = (state) => ({
    logged_in : state.authentication.logged_in,
    username: state.authentication.user.username
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout : () => {dispatch(logout())},
    startEditingNew: () => {dispatch(start_editing())} // Prolly Gonna change
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
