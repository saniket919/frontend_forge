import React from 'react';

const SmartSummary = () => {
  const stats = [
    { title: 'Closed Won', value: '£3,200.00' },
    { title: 'Pipeline Created', value: '£13,780.00' },
    { title: 'Demos Completed', value: '7' },
  ];

  const discussions = [
    {
      title: 'Book flights for team gathering',
      status: 'New',
      dueDate: 'May 25, 2023',
      priority: 'Low',
    },
    {
      title: '3 leads not contacted',
      status: 'New',
      dueDate: 'Jul 20, 2023',
      priority: 'Medium',
    },
    {
      title: 'Follow up from ITB how it going?',
      status: 'Ongoing',
      dueDate: 'Jul 15, 2023',
      priority: 'High',
    },
  ];

  const keyDates = [
    { date: 'Jul 2nd', title: 'Holiday' },
    { date: 'Jul 10th', title: 'Bank Holiday' },
    { date: 'Jul 15th', title: 'Marketing Conference' },
    { date: 'Jul 19th', title: 'ABC Deal Deadline' },
    { date: 'Jul 21st', title: 'Quarterly Review Day' },
  ];

  const getBadgeClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'badge-danger';
      case 'medium':
        return 'badge-warning';
      default:
        return 'badge-primary';
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="page-title">Smart Summary</h1>
        <button className="btn btn-primary">Add insights</button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <h2 className="text-lg font-semibold mb-4">Pipeline Created</h2>
        {/* Chart component would go here */}
        <div className="h-64 flex items-center justify-center text-gray-500">
          Chart Placeholder
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="discussion-list">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Discussion Topics</h2>
            <button className="btn btn-secondary">Add new</button>
          </div>
          
          {discussions.map((item, index) => (
            <div key={index} className="discussion-item">
              <div className="discussion-content">
                <div className="discussion-title">{item.title}</div>
                <div className="discussion-meta">
                  Due {item.dueDate} •{' '}
                  <span className={`badge ${getBadgeClass(item.priority)}`}>
                    {item.priority}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="key-dates">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Key Dates</h2>
          </div>
          
          {keyDates.map((item, index) => (
            <div key={index} className="date-item">
              <div className="date">{item.date}</div>
              <div className="date-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartSummary; 