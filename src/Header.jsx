export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* Logo / Image */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://www.foodchow.com/LogoImages/3161_2024-05-21_22-25-2808b048ff6-b83f-4815-9176-fcc616a77ac8.jpg"
              alt="Logo"
              style={{
                width: "80px",
                height: "50px",
                objectFit: "contain",
              }}
            />

            {/* Text Section */}
            <div className="ms-5">
              <div className="fw-bold" style={{ fontSize: "22px" }}>
                FoodChow Demo India
              </div>
              <div className="text-muted" style={{ fontSize: "16px" }}>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Surat, Gujarat, India
              </div>
            </div>
          </a>

          <div
            style={{
              marginLeft: "15%",
              marginRight: "auto",
              maxWidth: "300px",
            }}
          >
            <div
              className="fw-bold"
              style={{ fontSize: "16px", textAlign: "center", color: "green" }}
            >
              Restaurant is Open
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              Timing - Open 24 Hours
              <span
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "1",
                }}
              >
                !
              </span>
            </div>
          </div>
          {/* Right side: Buttons */}
          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn btn-custom">
              Choose Service
            </button>

            <button type="button" className="btn btn-custom">
              Book Now
            </button>

            <a href="+919825794210" className="btn btn-custom d-flex align-items-center gap-2">
                <i className="bi bi-whatsapp" style={{ fontSize: "18px" }}></i>
                9825794210
            </a>

            <button
              type="button"
              className="btn btn-custom d-flex align-items-center gap-2"
            >
              <i className="bi bi-globe" style={{ fontSize: "18px" }}></i>
              en
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
