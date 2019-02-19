const V1Api = require('../src/api').V1Api;
jest.mock('request');

describe('api', () => {
  describe('access-roles api', () => {
    it('Get all access-roles', () => {
      var client = new V1Api();
      var response = client.getAccessRoles();
    });
  });
});
