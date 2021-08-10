import { connect } from 'react-redux';
import App from '../components/App'
import { flip_switch } from '../actions'

const mapStateToProps = (state) => (
    {
        night_mode: state.nightmode.on
    }
)

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
