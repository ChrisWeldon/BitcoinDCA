import { connect } from 'react-redux';
import App from '../components/App'
import { flip_switch } from '../actions/theme'

const mapStateToProps = (state) => (
    {
        night_mode: state.nightmode.on,
        logged_in: state.authentication.logged_in,
        user: state.authentication.user
    }
)

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
