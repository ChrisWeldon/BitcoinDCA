import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import { stop_editing, saveTask } from '../actions/tasking'

const mapStateToProps = (state) => ({
    open: state.tasking.editing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    quitEditing : () => dispatch(stop_editing()),
    saveTask: (args) => {
        dispatch(saveTask(args))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
