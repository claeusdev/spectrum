// @flow
import gql from 'graphql-tag';

export type CommunityInfoType = {
  id: string,
  createdAt: Date,
  name: string,
  slug: string,
  description: ?string,
  website: ?string,
  profilePhoto: string,
  coverPhoto: string,
  pinnedThreadId: ?string,
  watercoolerId: ?string,
  lastActive?: Date,
  isPrivate: boolean,
  communityPermissions: {
    isMember: boolean,
    isBlocked: boolean,
    isOwner: boolean,
    isPending: boolean,
    isModerator: boolean,
    reputation: number,
    lastSeen?: Date,
  },
  brandedLogin: {
    isEnabled: boolean,
    message: ?string,
  },
  watercoolerId: ?string,
};

export default gql`
  fragment communityInfo on Community {
    id
    createdAt
    name
    slug
    description
    website
    profilePhoto
    coverPhoto
    pinnedThreadId
    watercoolerId
    isPrivate
    watercoolerId
    lastActive
    communityPermissions {
      isMember
      isBlocked
      isOwner
      isPending
      isModerator
      reputation
      lastSeen
    }
    brandedLogin {
      isEnabled
      message
    }
  }
`;
