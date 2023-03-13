const emailDetails = [
    {
        from: 'LinkedIn',
        subject: 'New connection request',
        message: 'You have a new connection request by: Joe Jackson the f',
        date: '3:26pm'
    },
    {
        from: 'Lisa Chen',
        subject: 'New Product Launch Announcement',
        message: `Hello everyone, I'm excited to announce the launch`,
        date: '10:46am'
    },
    {
        from: 'Facebook',
        subject: 'You have a new friend request',
        message: 'Chuck S. has sent you a friend request. Accept to',
        date: 'March 6, 2023'
    },
    {
        from: 'Sarah Johnson',
        subject: 'Meeting Recap and Next Steps',
        message: `Hi everyone,I hope you had a good weekend. I wanted to send a quick`,
        date: 'March 6, 2023'
    },
    {
        from: 'Michael Lee',
        subject: 'Invitation to Industry Conference',
        message: `Dear colleagues, I would like to invite you to attend`,
        date: 'March 7, 2023'
    },
    {
        from: 'David Miller',
        subject: 'Reminder: Performance Review Tomorrow',
        message: `Hi team, Just a quick reminder that your`,
        date: 'March 1, 2023'
    },
    {
        from: 'Emily Wong',
        subject: 'Urgent: Server Maintenance Required',
        message: `Dear IT team, We've detected some issues with`,
        date: 'February 27, 2023'
    },
    {
        from: 'Daniel Kim',
        subject: 'Invitation to Charity Event',
        message: `Hello everyone, I would like to invite you to attend`,
        date: 'January 29, 2023'
    },
    {
        from: 'Daniel Kim',
        subject: 'Invitation to Charity Event',
        message: `Hello everyone, I would like to invite you to attend`,
        date: 'January 29, 2023'
    }
];
const menuButton = document.getElementById('menu-icon');
const navPanel = document.getElementById('nav-container');
const closeIcon = document.getElementById('close-icon')

menuButton.addEventListener('click', () => {
    navPanel.classList.toggle('show');
    closeIcon.classList.toggle('show');
})

closeIcon.addEventListener('click', () => {
    navPanel.classList.toggle('show');
    closeIcon.classList.toggle('show');
})

function displayEmails() {
    let emailDiv = document.getElementById('emails');

    for (email of emailDetails) {
        emailDiv.innerHTML +=
            `<div class="email">
        <div class="row">
            <div class="col-6 email-title text-overflow">
                ${email.from}
            </div>
            <div class="col-6 text-overflow email-date">
            ${email.date}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-9 col text-overflow email-subject">
            ${email.subject} - ${email.message}
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col email-icons">
                <span class="material-symbols-outlined">
                inventory_2
                </span>
                <span class="material-symbols-outlined">
                star
                </span>
                <span class="material-symbols-outlined">
                delete
                </span>
                <span class="material-symbols-outlined">
                more_vert
                </span>
            </div>
        </div>
    </div>`
    }
};

function openEmail() {

};