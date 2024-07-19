function ServicesCard({ icon: Icon, heading, description }) {
  return (
    <div className="services-card">
      <Icon className="services-icon" />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServicesCard;
