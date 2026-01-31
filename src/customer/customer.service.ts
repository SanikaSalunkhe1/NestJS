import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create.customer.dto';

@Injectable()
export class CustomerService {
    private customers : Customer[] = [];

    //method
    getAllCustomers(): Customer[]{
        return this.customers;
    }

    addCustomer(createCustomerDto : CreateCustomerDto) : Customer {
        const newCustomer: Customer = {
            id : Date.now() , 
            // name : createCustomerDto.name , 
            // age : createCustomerDto.age , 
            // gender : createCustomerDto.gender
            ...createCustomerDto , //spread operator
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
