package com.wedding.springJwt.service;

import java.util.List;

import com.wedding.springJwt.model.Vendor;

public interface VendorService {
	
	public List<Vendor> getVendors();
	
	public Vendor getVendor(long vendorId);
	
	public Vendor addVendor(Vendor vendor);
	
	public Vendor updateVendor(Vendor vendor);
	
	public Vendor deleteVendor(long vendorId);
}
