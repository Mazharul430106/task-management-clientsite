function AddTask() {
    const taskhandler =(event)=>{
        event.preventDefault();
        const taskValue = event.target.name.value
        console.log(taskValue);
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={taskhandler}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Task</span>
                                </label>
                                <div className="flex gap-2">
                                    <input type="text" name='name' placeholder="text" className="input input-bordered" />
                                    <button type="submit" className="btn btn-primary">Add Task</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask;