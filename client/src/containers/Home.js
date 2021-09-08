import { connect } from 'react-redux';
import Home from '../components/Home';
import { logout } from '../actions/authentication'
import { start_editing, getTasks } from '../actions/tasking'

const mapStateToProps = (state) => ({
    logged_in : state.authentication.logged_in,
    username: state.authentication.user.username,
    tasks: state.tasking.tasks,
    tasks_loaded: state.tasking.tasks_loaded,
    tasks_loading: state.tasking.tasks_loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout : () => {dispatch(logout())},
    startEditingNew: () => {dispatch(start_editing())}, // Prolly Gonna change
    getTasks : () => {dispatch(getTasks())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
