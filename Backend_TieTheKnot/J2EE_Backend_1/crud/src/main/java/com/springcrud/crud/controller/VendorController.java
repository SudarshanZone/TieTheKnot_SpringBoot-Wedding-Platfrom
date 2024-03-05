package com.springcrud.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrud.crud.model.Vendor;
import com.springcrud.crud.services.VendorService;

@RestController
@CrossOrigin
public class VendorController {
	
	@Autowired
	private VendorService vendorService;

	@PostMapping("/vendor")
	public Vendor addVendor(@RequestBody Vendor vendor) {
		return this.vendorService.addVendor(vendor);
	}
	
	@GetMapping("/vendors")
	public List<Vendor> getVendors() {
		return this.vendorService.getVendors();
	}
	
	@GetMapping("/vendors/{vendorId}")
	public Vendor getVendor(@PathVariable String vendorId) {
		return this.vendorService.getVendor(Long.parseLong(vendorId));
	}
	
	@PutMapping("/vendor")
	public Vendor updateVendor(@RequestBody Vendor vendor) {
		return this.vendorService.updateVendor(vendor);
	}
	
	@DeleteMapping("/vendor/{vendorId}")
	public Vendor deleteVendor(@PathVariable String vendorId){
		return this.vendorService.deleteVendor(Long.parseLong(vendorId));
	}
	
}
