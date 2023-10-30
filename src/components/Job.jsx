const Job = (props) => {
  console.log(props);
  return (
    <div className="job">
      <h2>{title}</h2>
      <p>
        {props.contractType} {props.country} {props.city}
      </p>
    </div>
  );
};

export default Job;
