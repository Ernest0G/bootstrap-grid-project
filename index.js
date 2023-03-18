const emailDetails = [
    {
        from: 'LinkedIn',
        subject: 'Meeting Reminder',
        message: 'Just a reminder that our meeting is scheduled for tomorrow at 2pm. Please make sure to bring any necessary materials and be on time',
        date: '3:26pm'
    },
    {
        from: 'Lisa Chen',
        subject: 'Important Update',
        message: `We wanted to provide you with an update regarding the status of your project. Please review the attached document for more information.`,
        date: '10:46am'
    },
    {
        from: 'Facebook',
        subject: 'Happy Birthday!',
        message: 'Wishing you a very happy birthday! We hope you have a great day filled with celebration and joy.',
        date: 'March 6, 2023'
    },
    {
        from: 'Sarah Johnson',
        subject: 'New Product Launch',
        message: `We are excited to announce the launch of our new product line. Please visit our website for more information and to place an order.`,
        date: 'March 6, 2023'
    },
    {
        from: 'Michael Lee',
        subject: 'Training Session',
        message: `There will be a training session next week on the new software. Please let us know if you have any questions or concerns.`,
        date: 'March 7, 2023'
    },
    {
        from: 'David Miller',
        subject: 'Job Opening',
        message: `We are currently hiring for a new position in our company. Please see the attached job description and apply if you are interested.`,
        date: 'March 1, 2023'
    },
    {
        from: 'Emily Wong',
        subject: 'Feedback Request',
        message: `We would appreciate your feedback on our recent customer service experience. Please take a moment to fill out the attached survey.`,
        date: 'February 27, 2023'
    },
    {
        from: 'Daniel Kim',
        subject: 'Thank You", Message',
        message: `Thank you for your recent purchase. We hope you are satisfied with your order and look forward to serving you again in the future.`,
        date: 'January 29, 2023'
    },
    {
        from: 'Alex Johnson',
        subject: 'Holiday Hours',
        message: `Please note our holiday hours for the upcoming season. We will be closed on Christmas Day and New Year's Day, but open regular hours on all other days.`,
        date: 'January 12, 2023'
    }
];
const MENU_BUTTON = document.getElementById('menu-icon');
const NAV_PANEL = document.getElementById('nav-container');
const CLOSE_ICON = document.getElementById('close-icon')
const EMAILS = document.getElementsByClassName("email");
const OPENED_EMAIL = document.getElementById('opened-email');
const OPENED_EMAIL_CLOSE_ICON = document.getElementById('close-opened-email')


MENU_BUTTON.addEventListener('click', () => {
    NAV_PANEL.classList.toggle('show');
    CLOSE_ICON.classList.toggle('show');
})

CLOSE_ICON.addEventListener('click', () => {
    NAV_PANEL.classList.toggle('show');
    CLOSE_ICON.classList.toggle('show');
})

OPENED_EMAIL_CLOSE_ICON.addEventListener('click', () => {
    OPENED_EMAIL.classList.toggle('show')
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
            <div class="col-lg-9 col-md-9 col-sm-9 col text-overflow email-content">
            <p class="email-subject ">${email.subject}</P> - <p class="email-message text-overflow">${email.message}</P>
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
    for (let i = 0; i < EMAILS.length; i++) {
        EMAILS[i].addEventListener('click', () => {
            let sender = EMAILS[i].querySelector('.email-title').innerHTML;
            let subject = EMAILS[i].querySelector('.email-subject').innerHTML;
            let message = EMAILS[i].querySelector('.email-message').innerHTML;
            let date = EMAILS[i].querySelector('.email-date').innerHTML;
            openEmail(sender, subject, message, date);
        })
    }
};

function openEmail(sender, subject, message, date) {
    OPENED_EMAIL.querySelector('#opened-sender').innerHTML = sender;
    OPENED_EMAIL.querySelector('#opened-subject').innerHTML = subject;
    OPENED_EMAIL.querySelector('#opened-message').innerHTML = message;
    OPENED_EMAIL.querySelector('#opened-date').innerHTML = date;
    OPENED_EMAIL.classList.toggle('show');
};