/**
	PostItem component returns single item(post-text) that will show on the UI.
*/

import React from 'react'
import PropTypes from 'prop-types';

const PostItem = ({post}) => <li style={{ listStyleType: 'none' }}>{post}</li>;

PostItem.propTypes = {
	post: PropTypes.string.isRequired
}

export default PostItem;