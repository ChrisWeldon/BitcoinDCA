import { connect } from 'react-redux';
import Portal from '../components/Portal';
import { logout } from '../actions'

const mapStateToProps = (state) => ({
    logged_in : state.authentication.logged_in
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout : () => {dispatch(logout())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Portal)
