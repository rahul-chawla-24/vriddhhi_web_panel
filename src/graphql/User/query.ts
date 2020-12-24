import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      id
      email
      confirmed
      blocked
      role {
        id
        name
        permissions {
          id
          type
          controller
          action
          enabled
          policy
        }
      }
      user_profile {
        id
        name
        branchName
        cityName
        departmentName
        gender
        mobileNumber
        employeeId
        users_permissions_user {
          id
        }
        mobile_number_verified
        business_entity {
          id
          name
        }
      }
    }
  }
`;
