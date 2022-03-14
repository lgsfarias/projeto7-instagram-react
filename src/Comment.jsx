import React from 'react';

const Comment = (props) => {
    const { user, comment } = props;

    return (
        <div className="comments">
            <p>
                <b>{user}</b> {comment}{' '}
            </p>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
};

export default Comment;
