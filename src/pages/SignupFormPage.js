import React from 'react';

import PageHeader from '../components/PageHeader.js';
import SignupCard from '../components/SignupCard.js';

// todo: import FormUI

const SignupFormPage = () =>
{
    return (
        <div className="signup-page">
            <PageHeader />
            <SignupCard />
        </div>
    )
}

export default SignupFormPage;