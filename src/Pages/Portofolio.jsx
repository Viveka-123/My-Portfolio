import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

export default function Portofolio() {
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      if (typeof window !== "undefined" && window.location.hostname === "localhost") {
        try {
          localStorage.removeItem("projects");
        } catch (e) {}
      }
      const projectCollection = collection(db, "projects");
      const projectSnapshot = await getDocs(projectCollection);
      const projectData = projectSnapshot.docs.map((doc) => {
        const data = doc.data();
        if (doc.id === "ERP24k") {
          return {
            id: doc.id,
            Link: "https://www.erp24k.com/",
            Img: "https://www.erp24k.com/assets/media/landing_icons/erp24k_logo2.svg",
            Description: "ERP24K is an advanced cloud-based Jewellery ERP software designed to streamline inventory, GST billing, estimation, sales, gold schemes, and business operations for retail jewellery stores.",
            Features: [
              "Inventory Management (with Barcode & Label printing)",
              "Integrated Invoicing, Estimation & GST Billing",
              "Gold Saving Schemes & Membership Management",
              "Order Tracking & Repair Status Updates",
              "Old Jewellery Purchases & melting refining tracking",
              "Real-time Dashboards & Financial Analytics",
              "Multi-store Cloud Management & Secure User Controls"
            ],
            TechStack: data.TechStack || ["Jira", "Playwright", "Cucumber"]
          };
        }
        if (doc.id === "My Jeweller") {
          return {
            id: doc.id,
            Link: "https://play.google.com/store/apps/details?id=com.myjeweller.retail&hl=en_IN",
            Img: data.Img,
            Description: "My Jeweller is a secure customer-facing mobile application developed by Cixcent Technologies. It acts as a digital bridge between jewellers and customers, providing direct real-time updates and notifications on gold schemes, repair statuses, invoices, and custom order stages powered by the integrated ERP24K system.",
            Features: [
              "Real-time Custom Order Tracking (Design to Delivery)",
              "Gold Saving Schemes & Monthly Installment Payments",
              "Direct UPI, Card, and Net Banking Payment Integration",
              "Repair & Service Request Status Tracking",
              "Live Metal Rate Updates (Gold, Silver, Platinum)",
              "Digital Invoices, Outstanding Balances & Payment History",
              "Secure ERP24K Cloud Database Synchronization"
            ],
            TechStack: data.TechStack || ["Android", "iOS", "Firebase", "API Testing"]
          };
        }
        if (doc.id === "Gold Loan") {
          return {
            id: doc.id,
            Link: "https://www.loans24k.com/auth/login",
            Img: "https://www.cabkgoyal.com/wp-content/uploads/2024/05/SBI-Gold-Loan-1024x576.jpg",
            Description: "ERP Gold Loan is an end-to-end cloud-based financial management software designed specifically for banks, private lenders, and financiers to streamline the lifecycle of gold loans. It automates gold purity calculations, interest accruals, payment tracking, and ledger reconciliation, replacing manual processes with absolute accuracy and security.",
            Features: [
              "Purity & Value Calculator (Instantly evaluate gold weight, karat purity, and max loan amounts based on live market rates)",
              "Flexible Interest Schemes (Configure compound, simple, flat, or penal interest structures with grace periods)",
              "Automated Ledger & Interest Accruals (Automatically calculate and record periodic interest dues and payment history)",
              "Customer KYC & Document Vault (Securely store customer identities, pledge details, and contact profiles)",
              "Automated Payment Alerts (Deliver timely SMS and email reminders for interest payments and pending installments)",
              "Auction & Default Management (Workflow-guided management for loan defaults, notifications, and gold auctioning)",
              "Comprehensive Financial Auditing (Access detailed transaction logs, branch-wise tallies, and profit reports)"
            ],
            TechStack: data.TechStack && data.TechStack.length > 0 ? data.TechStack : ["Web ERP", "React", "Node.js", "Financial Math", "Security"]
          };
        }
        if (doc.id === "Schemes") {
          return {
            id: doc.id,
            Link: "https://schemes.erp24k.com/",
            Img: "https://schemes.erp24k.com/assets/image/laptop_img.svg",
            Description: "ERP24K Gold Schemes is a smart savings scheme management software designed to launch, manage, and track jewellery savings plans with complete digital automation, transparency, and mobile integration.",
            Features: [
              "Easy Scheme Creation (Configure customized rules, duration, and settlement rules)",
              "Membership Management (Track active, settled, or pending memberships)",
              "Automated Payments & Transactions (Cash, UPI, Card, or Net Banking collections)",
              "Automated Billing Integration (Scheme benefits automatically applied to sales)",
              "Comprehensive Bonus & Discount Management (11+1 plans, VA/Making charge, and Diamond discounts)",
              "Instant Digital Alerts (SMS, WhatsApp, and Email reminder notifications)",
              "Real-time Reports, Analytics & Transaction Audit Trails"
            ],
            TechStack: data.TechStack && data.TechStack.length > 0 ? data.TechStack : ["React", "Bootstrap", "Web & Mobile Sync", "Automation"]
          };
        }
        if (doc.id === "Store24k") {
          return {
            id: doc.id,
            Link: "https://play.google.com/store/apps/details?id=com.store24k.retail&hl=en_ZA",
            Img: data.Img,
            Description: "Store24K is a powerful and user-friendly mobile and web ERP solution developed by Cixcent Technologies Pvt Ltd, crafted exclusively for jewellery retailers to manage operations, enhance customer service, and coordinate store branches from a single unified platform.",
            Features: [
              "Instant Estimation Creation (Create and print customer estimates on-the-go)",
              "Order & Repair Tracking (Assign, manage, and share real-time repair progress with customers)",
              "Multi-Branch Price Management (Monitor and update live metal rates across store locations)",
              "Order Traceability & Media (Attach photographs and video references directly to orders)",
              "Customer Profiles & History (Access complete purchase history and personalized profiles)",
              "Gold Saving Schemes Administration (Track monthly installments and digital payments)",
              "Seamless Printing Support (Supports Bluetooth, Wi-Fi, and Cloud-enabled printers)"
            ],
            TechStack: data.TechStack && data.TechStack.length > 0 ? data.TechStack : ["Android", "iOS", "API Integration", "Mobile Printing"]
          };
        }
        return {
          id: doc.id,
          ...data,
          TechStack: data.TechStack || [],
        };
      });

      // Sort projects in the desired order: ERP24k, Gold Loan, Schemes, Store24k, My Jeweller
      const desiredOrder = ["ERP24k", "Gold Loan", "Schemes", "Store24k", "My Jeweller"];
      projectData.sort((a, b) => {
        const indexA = desiredOrder.indexOf(a.id);
        const indexB = desiredOrder.indexOf(b.id);
        return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
      });

      setProjects(projectData);
      localStorage.setItem("projects", JSON.stringify(projectData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full py-20 sm:py-28 bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Centered Heading designed same like skills section */}
      <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
          Portfolio
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          Explore my journey through projects. Each project represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="h-full"
              data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
            >
              <CardProject
                Img={project.Img}
                Title={project.Title}
                Description={project.Description}
                Link={project.Link}
                id={project.id}
              />
            </div>
          ))}
        </div>
        {projects.length > initialItems && (
          <div className="mt-8 w-full flex justify-start">
            <ToggleButton
              onClick={toggleShowMore}
              isShowingMore={showAllProjects}
            />
          </div>
        )}
      </div>
    </div>
  );
}