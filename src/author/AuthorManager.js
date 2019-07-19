import React from 'react';
import AuthorPage from "./AuthorPage";

class AuthorManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <AuthorPage />
            </div>
        )
    }
}

export default AuthorManager;