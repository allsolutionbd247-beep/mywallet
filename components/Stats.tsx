export default function Stats() {
  const stats = [
    {
      icon: "🌍",
      title: "Global Users",
      value: "100K+",
      description: "Trusted users worldwide",
    },
    {
      icon: "💳",
      title: "Transactions",
      value: "$50M+",
      description: "Secure payment processed",
    },
    {
      icon: "🔒",
      title: "Security",
      value: "99.9%",
      description: "Protected platform",
    },
    {
      icon: "⚡",
      title: "Fast Transfer",
      value: "Instant",
      description: "Quick money transfer",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12">
      <div
        className="
          grid
          gap-6
          md:grid-cols-4
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/20
              bg-white/10
              p-6
              text-white
              shadow-xl
              backdrop-blur-xl
              transition
              hover:-translate-y-1
            "
          >
            <div className="text-3xl">
              {item.icon}
            </div>

            <h3 className="mt-4 text-sm text-gray-300">
              {item.title}
            </h3>

            <h2 className="mt-2 text-3xl font-bold">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
