import {CoreV1Api} from '../src/api';
jest.mock('request');

describe('api', () => {
  describe('access-roles api', () => {
    it('Get all access-roles', () => {
      var client = new CoreV1Api();
      var response = client.getAccessRoles();
    });
  });
});
