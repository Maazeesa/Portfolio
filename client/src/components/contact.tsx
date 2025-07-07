import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-sgr-beige/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sgr-dark-brown mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-sgr-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Ready to discuss your data analytics and project management needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20">
                <h3 className="text-xl font-bold sgr-dark-brown mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium sgr-dark-brown">Phone</p>
                      <p className="text-gray-600">+966 573 218 709</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium sgr-dark-brown">Email</p>
                      <p className="text-gray-600">mo.maaz@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                      <i className="fab fa-linkedin text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium sgr-dark-brown">LinkedIn</p>
                      <p className="text-gray-600">linkedin.com/in/mo-maaz-975b33255</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium sgr-dark-brown">Location</p>
                      <p className="text-gray-600">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20">
                <h3 className="text-xl font-bold sgr-dark-brown mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-chart-line sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Data Analytics</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-project-diagram sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Project Management</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-robot sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Process Automation</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-chart-bar sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Business Intelligence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold sgr-dark-brown mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium sgr-dark-brown mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium sgr-dark-brown mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium sgr-dark-brown mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium sgr-dark-brown mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-sgr-gold hover:bg-sgr-light-gold text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
