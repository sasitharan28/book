package com.sasitharan.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Roles {
	@Id
	private String id;
	
	private ERole name;
	
	public Roles() {
		
	}
	
	public Roles(ERole name) {
		this.name = name;
	}
	
	public Roles(String name) {
		this.name = Enum.valueOf(ERole.class, name);
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public ERole getName() {
	    return name;
	  }

	  public void setName(ERole name) {
	    this.name = name;
	  }

	  @Override
	  public String toString() {
		return "Role [id=" + id + ", name=" + name + "]";
	  } 
}
