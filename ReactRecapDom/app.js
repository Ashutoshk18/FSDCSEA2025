const root = ReactDOM.createRoot(document.querySelector("#root"));

const element = (
  <div>
    <h1>Hello World</h1>
    <h2>hello World</h2>
  </div>
);
const card = (
  <div className="card">
    <div className="image-container">
      <img
        src="https://img7.freepik.com/free-psd/iphone-15-mockup-perspective_1332-60616.jpg?semt=ais_hybrid&w=740&q=80"
        alt="mobile-image"
      />
    </div>
    <div className="description">
      <p>Model No: AFF-324X</p>
      <p>Price: 15,000</p>
      <p>
        <b>Description: </b>orem ipsum dolor sit amet, consectetur adipisicing
        elit. Qui amet numquam cupiditate debitis ex voluptatem ut facilis eum
        blanditiis, sint ipsum nemo sit sequi quae! Possimus aliquid sit tenetur
        in harum asperiores.
      </p>
    </div>
    <button>Add to Cart</button>
  </div>
);
root.render(card);
