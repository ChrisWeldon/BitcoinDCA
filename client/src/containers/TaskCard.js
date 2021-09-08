import { connect } from 'react-redux';
import TaskCard from '../components/TaskCard';
import { deleteTask } from '../actions/tasking'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteTask : () => { dispatch(deleteTask(ownProps.id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard)
