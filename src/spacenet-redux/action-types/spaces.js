import keyMirror from 'spacenet-redux/utils/key_mirror';

export default keyMirror({
  GET_SPACES_REQUEST: null,
  GET_SPACES_SUCCESS: null,
  GET_SPACES_FAILURE: null,

  MY_SPACES_REQUEST: null,
  MY_SPACES_SUCCESS: null,
  MY_SPACES_FAILURE: null,

  CREATE_SPACE_REQUEST: null,
  CREATE_SPACE_SUCCESS: null,
  CREATE_SPACE_FAILURE: null,

  GET_SPACE_MEMBERS_REQUEST: null,
  GET_SPACE_MEMBERS_SUCCESS: null,
  GET_SPACE_MEMBERS_FAILURE: null,

  RECEIVED_SPACE: null,
  RECEIVED_SPACES: null,
  RECEIVED_SPACE_DELETED: null,
  RECEIVED_SPACES_LIST: null,
  RECEIVED_MY_SPACE_MEMBERS: null,
  RECEIVED_MY_SPACE_MEMBER: null,
  RECEIVED_SPACE_MEMBERS: null,
  RECEIVED_MEMBERS_IN_SPACE: null,
  RECEIVED_MEMBER_IN_SPACE: null,
  REMOVE_MEMBER_FROM_SPACE: null,

  RECEIVED_TOTAL_SPACE_COUNT: null,
});