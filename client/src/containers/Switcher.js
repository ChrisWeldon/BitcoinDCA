import { connect } from 'react-redux';
import Switcher from '../components/Switcher'
import { flip_switch } from '../actions'

const mapStateToProps = (state) => (
    {
        on: state.switcher.on
    }
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    flip_switch: () => {dispatch(flip_switch())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Switcher)
