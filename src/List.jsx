import './Styles/Tasks.css'

function List ({ tasks }) {
    return(
        <div className="Task-list">
            {tasks.map((task) => (
                <div key={task.id} className="Task-item">
                    <h2>{task.title}</h2>
                    <h3>{task.description}</h3>
                </div>
            ))}
        </div>
    );
}

export default List