"use client";

import { createContext, useContext, ReactNode } from "react";

interface Service {
    id: number;  // Added ID field
    name: string;
    image: string;
    description: string;
    features: string[];
    startingPrice: number;
}

const services: Service[] = [
    {
        id: 1,  // Added ID
        name: "Residential Cleaning",
        image: "/image/loudry.jpg",
        description: "Our residential cleaning service is designed to provide a thorough cleaning for your home. We take care of every corner to ensure your living space is spotless, fresh, and hygienic, leaving you with a clean and welcoming environment to relax in. Whether it’s routine maintenance or a deep clean, we use eco-friendly products to guarantee a safe and healthy home for you and your family.",
        features: ["Dusting", "Vacuuming", "Mopping", "Sanitizing"],
        startingPrice: 80
    },
    {
        id: 2,  // Added ID
        name: "Commercial Cleaning",
        image: "/image/loudry2.jpg",
        description: "Our commercial cleaning service is tailored for offices, business spaces, and commercial buildings, ensuring a professional and spotless environment for your staff and customers. We understand the importance of maintaining a clean and presentable workplace, which is why we focus on key areas such as workstations, restrooms, and high-traffic zones, using specialized equipment and safe cleaning methods to maintain a sanitary and inviting space for your employees and clients.",
        features: ["Workstation Cleaning", "Carpet Cleaning", "Restroom Sanitation"],
        startingPrice: 80
    },
    {
        id: 3,  // Added ID
        name: "Deep Cleaning",
        image: "/image/loudry3.jpg",
        description: "Our deep cleaning service offers an intensive and detailed cleaning solution for those spaces that need extra attention. This service is perfect for homes or businesses that require a thorough, top-to-bottom clean, including areas often neglected during regular cleaning. We focus on tasks like tile scrubbing, grout cleaning, and appliance detailing to ensure that every nook and cranny is cleaned to perfection, promoting a healthier environment.",
        features: ["Tile Scrubbing", "Grout Cleaning", "Appliance Detailing"],
        startingPrice: 80
    },
    {
        id: 4,  // Added ID
        name: "Move In/Move Out",
        image: "/image/loudry5.jpg",
        description: "Moving into or out of a home can be stressful, and our move-in/move-out cleaning service helps ensure that your space is spotless for the next occupants or when you are settling into your new home. We focus on areas that are typically overlooked during the moving process, such as wall washing, floor waxing, and appliance cleaning, making sure that everything is ready for a fresh start.",
        features: ["Wall Washing", "Floor Waxing", "Appliance Cleaning"],
        startingPrice: 80
    },
    {
        id: 5,  // Added ID
        name: "Post-Construction",
        image: "/image/house1.jpg",
        description: "After a construction or renovation project, debris and dust are often left behind. Our post-construction cleaning service removes all traces of construction work, ensuring that your space is clean, safe, and ready for use. We specialize in debris removal, dusting, and floor polishing to make your newly renovated space shine and feel brand new, eliminating the mess left by construction workers.",
        features: ["Debris Removal", "Dusting", "Floor Polishing"],
        startingPrice: 80
    },
    {
        id: 6,  // Added ID
        name: "Window Cleaning",
        image: "/image/47768237_l.webp",
        description: "Our window cleaning service guarantees crystal-clear windows, enhancing your view and allowing natural light to brighten up your space. We use professional techniques and tools to clean both the glass and frames, leaving your windows streak-free and gleaming. Whether it’s a one-time clean or regular maintenance, our service ensures that your windows are sparkling and your home or office looks its best.",
        features: ["Glass Washing", "Frame Cleaning", "Streak-Free Finish"],
        startingPrice: 80
    },
    {
        id: 7,  // Added ID
        name: "Carpet & Upholstery",
        image: "/image/OIP (3).jpeg",
        description: "Our carpet and upholstery cleaning service is designed to restore the freshness and appearance of your soft furnishings. We use steam cleaning technology to remove stains, odors, and dirt from carpets, sofas, chairs, and other upholstered furniture. Our deep cleaning process ensures that your carpets and upholstery not only look clean but also feel fresh and smell great, helping to maintain a healthy living environment.",
        features: ["Steam Cleaning", "Stain Removal", "Deodorization"],
        startingPrice: 80
    },
    {
        id: 8,  // Added ID
        name: "Floor Cleaning",
        image: "/image/faq.png",
        description: "Our floor cleaning service is perfect for maintaining a clean and polished look for all types of flooring, whether it's hardwood, tile, or vinyl. We offer mopping, buffing, and waxing services to keep your floors looking pristine and protect them from dirt and wear. We use high-quality cleaning products and techniques to ensure a long-lasting shine and durability, making your floors easier to maintain and more visually appealing.",
        features: ["Mopping", "Buffing", "Waxing"],
        startingPrice: 80
    }
];

const ServiceContext = createContext<Service[]>(services);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
};

export const useServices = () => useContext(ServiceContext);
