package com.springcrud.crud.services;

import java.util.List;
import com.springcrud.crud.model.Vendor;

public interface VendorService {
	
	public List<Vendor> getVendors();
	
	public Vendor getVendor(long vendorId);
	
	public Vendor addVendor(Vendor vendor);
	
	public Vendor updateVendor(Vendor vendor);
	
	public Vendor deleteVendor(long vendorId);
}
