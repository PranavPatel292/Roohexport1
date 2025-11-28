import { BentoCard, BentoGrid } from "../ui/bento-grid";

const features = [
  {
    // We removed the text data since it's no longer rendered
    name: "The Royal Silk",
    background: (
      <img
        src="https://images.unsplash.com/photo-1648329008114-bce0ec0b5950?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="background"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Bohemian Luxe",
    background: (
      <img
        src="https://images.unsplash.com/photo-1629200468328-87bf3adfb78b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="background"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Summer Linen",
    background: (
      <img
        src="https://images.unsplash.com/photo-1753192105151-afa3e56d8b12?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="background"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Evening Velvet",
    background: (
      <img
        src="https://images.unsplash.com/photo-1626413146829-a50922386df3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="background"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Moroccan Prints",
    background: (
      <img
        src="https://images.unsplash.com/photo-1753192104212-14f586962222?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="background"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <div className="p-10">
      {" "}
      {/* Adjusted padding */}
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
