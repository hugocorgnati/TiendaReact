import "../style/Loader.css"

const Loader = ({ qty = 1 }) => {
    const array = Array.from({ length: qty }, (_, i) => i + 1);
    return array.map((e) => <div className="loader" key={e} />);
};

export default Loader