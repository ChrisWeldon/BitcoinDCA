import { connect } from 'react-redux';
import Register from '../components/Register';
import { register, close_register_prompt } from '../actions/authentication'

const mapStateToProps = (state) => ({
    logged_in : state.authentication.logged_in,
    register_message: state.registeration.message,
    prompt_open: state.registeration.prompt_open

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    register : (username, password) => {dispatch(register(username, password))},
    closePrompt: () => {dispatch(close_register_prompt())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
