import data from './data.json';

export const Statistics = () => {
  return (
    <section>
      <ul className="stat-list" key={data}>
        <h2 className="title">UPLOAD STATS</h2>
        {data.map(item => (
          <li className="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
