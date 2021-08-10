import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login : (username, password) => {dispatch(login(username, password))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
