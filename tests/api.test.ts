import api = require('../src/api');
jest.mock('request');

describe('api', () => {
  describe('access-roles api', () => {
    it('Get all access-roles', () => {
      var client = new api.AccessRolesApi();
      var response = client.getAccessRoles();
    });
  });
});
