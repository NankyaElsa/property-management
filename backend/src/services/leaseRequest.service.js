import { LeaseRequest } from "../models/index.js";

class LeaseRequestService {
  async createLeaseRequest(
    propertyId,
    tenantId,
    landlordId,
    created,
    modified,
    status
  ) {
    try {
      const leaseRequest = await LeaseRequest.create({
        propertyId,
        tenantId,
        landlordId,
        created,
        modified,
        status,
      });
      return leaseRequest;
    } catch (error) {
      throw new Error("Failed to create lease request.");
    }
  }

  async getLeaseRequestById(requestId) {
    try {
      const leaseRequest = await LeaseRequest.findByPk(requestId);
      return leaseRequest;
    } catch (error) {
      throw new Error("Failed to retrieve lease request.");
    }
  }

  // Add more methods as needed
}

const leaseRequestService = new LeaseRequestService();
export default leaseRequestService;
