import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import { stop_editing } from '../actions/tasking'

const mapStateToProps = (state) => ({
    open: state.tasking.editing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    quitEditing : () => dispatch(stop_editing()),
    saveEditing: () => dispatch(stop_editing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
