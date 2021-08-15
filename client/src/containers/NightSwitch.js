import { connect } from 'react-redux';
import NightSwitch from '../components/NightSwitch'
import { flip_theme } from '../actions'

const mapStateToProps = (state) => (
    {
        night_mode: state.nightmode.on
    }
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    flipTheme: () => {dispatch(flip_theme())}
})

export default connect(mapStateToProps, mapDispatchToProps)(NightSwitch)
