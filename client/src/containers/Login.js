import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, close_login_prompt } from '../actions/authentication'

const mapStateToProps = (state) => ({
    logged_in : state.authentication.logged_in,
    login_message : state.authentication.message,
    prompt_open: state.authentication.prompt_open
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login : (username, password) => {dispatch(login(username, password))},
    closePrompt: () => {dispatch(close_login_prompt())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
