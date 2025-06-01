import React from "react";
import { motion } from "framer-motion";
import "./EYDeliveryModels.css";

const deliveryModels = [
  {
    label: "Outsourced Delivery Model",
    desc: "Hosted, Owned & Delivered by EY"
  },
  {
    label: "Stack As A Service based Delivery Model",
    desc: "EY's Stack As A Service, Owned, Operated and delivered as an Outcome-based delivery Model"
  },
  {
    label: "Output and Elements-based Costing model",
    desc: "Element based pricing driven by an Output based model driven by SLA's & KPIs"
  },
  {
    label: "Managed Security Services",
    desc: "Client's Infrastructure, Owned, Operated and Managed completely by EY either remotely or from client's premises"
  },
  {
    label: "Build & Operate",
    desc: "Designed, implemented, operationalized and run by EY at client's premises"
  },
  {
    label: "Staff Augmentation",
    desc: "Loan staff engagement where EY personnel work under client's oversight"
  },
  {
    label: "Advisory & Consulting Services",
    desc: "Provides expert guidance, strategic planning, and specialized consulting."
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
};

const EYDeliveryModels = () => (
  <section className="ey-delivery-section">
    <h2 className="ey-delivery-title">
      EY Supported Delivery Models
    </h2>
    <motion.ul
      className="ey-delivery-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {deliveryModels.map((model, idx) => (
        <motion.li
          className="ey-delivery-item"
          key={model.label}
          variants={itemVariants}
        >
          <span className="ey-delivery-left">
            <span className="ey-arrow">➔</span>
            <span className="ey-label">{model.label}</span>
          </span>
          {model.desc && <span className="ey-desc">– {model.desc}</span>}
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default EYDeliveryModels;
