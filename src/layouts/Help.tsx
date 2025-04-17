const Help = () => {
  return (
    <>
      <div className="main__home">
        <div className="main__home__title">
          Help Guide for Daily Planner Application
        </div>
        <div className="main__home__subtitle">
          Welcome to the Daily Planner Application! This guide will help you
          understand how to navigate and use the various features of the app to
          effectively manage your tasks and schedule.
        </div>
        <div className="main__home__home">
          <div className="main__home__home__header">Home Page</div>

          <div className="main__home__home__content">
            The Home Page is your central hub for viewing all your planned
            activities. Here, you'll see a weekly overview with tasks organized
            by day:
            <ul>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            Each day will display the tasks you have scheduled, making it easy
            to see your commitments at a glance.
          </div>
        </div>
        <div className="main__home__home">
          <div className="main__home__home__header">Adding a New Task</div>
          <div className="main__home__home__content">
            To add a new task, follow these steps:
            <ol>
              <li>
                Navigate to the 'Add Event' Field: This can be found on the Home
                Page.
              </li>
              <li>Enter the Title: Provide a concise title for your task.</li>
              <li>Choose the Duration: Specify how long the task will take.</li>
              <li>
                Select the Priority: Choose the priority level (e.g., High,
                Medium, Low).
              </li>
              <li>
                Pick the Date: Select the date for your task. Once added, the
                new task will automatically appear on the Home Page under the
                selected date.
              </li>
            </ol>
          </div>
        </div>

        <div className="main__home__home">
          <div className="main__home__home__header">Dashboard</div>
          <div className="main__home__home__content">
            The Dashboard provides insights into your activity on the platform
            through various graphical representations: Activity Level Graph:
            This shows how active you have been in the application, helping you
            track your task management over time. Priority-Based Graphs: These
            graphs illustrate the distribution of your tasks based on their
            priority levels, offering a clear view of how you prioritize your
            activities. Summary View your tasks by day on the Home Page. Add new
            tasks easily with the 'Add Event' feature. Monitor your activity and
            task priorities with the Dashboard. This application is designed to
            streamline your daily planning and help you stay organized. If you
            have any questions or need further assistance, please refer to our
            FAQ section or contact support.
          </div>
        </div>
      </div>
    </>
  );
};
export default Help;
