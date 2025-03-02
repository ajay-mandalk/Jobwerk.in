// components/Form.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    businessType: '',
    region: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.company || !formData.businessType || !formData.region) {
      toast.error('Please fill all fields');
      return;
    }
    // Handle form submission
    toast.success('Form submitted successfully!');
    // You can add your API call here
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-2">Supplier Registration</h2>
      <p className="text-muted-foreground mb-6">
        Register your company as a supplier/manufacturer
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Contact Name</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company">Company Name</Label>
          <Input 
            id="company" 
            placeholder="Acme Corp" 
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

        <div className="space-y-1.5">
          <Label>Business Type</Label>
          <Select
            value={formData.businessType}
            onValueChange={(value) => setFormData({...formData, businessType: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent className='bg-blue-500 hover-grey-400'>
              <SelectItem value="supplier">Supplier</SelectItem>
              <SelectItem value="manufacturer">Manufacturer</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Operating Area</Label>
          <Select
            value={formData.region}
            onValueChange={(value) => setFormData({...formData, region: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent className='bg-blue-500 hover-grey-400'>
              <SelectItem value="north">North Region</SelectItem>
              <SelectItem value="south">South Region</SelectItem>
              <SelectItem value="east">East Region</SelectItem>
              <SelectItem value="west">West Region</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
}