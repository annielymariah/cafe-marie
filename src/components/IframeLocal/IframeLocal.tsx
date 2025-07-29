import { FaWhatsapp } from "react-icons/fa";

export default function IframeLocal() {
  return (
    <div className="container text-left my-5" id="local">
      <div className="row justify-content-center align-items-center flex-column flex-md-row">
        <div className="col-md-5 mb-3 mb-md-0">
          <h3>Estamos te esperando!</h3>
          <p className="mb-4">Rua XXX, n. 000 - Bairro Lorem Ipsum | Cidade, Estado</p>
          <div className="d-flex justify-content-md-start justify-content-center">
            <button
              className="btn btn-primary d-flex align-items-center px-4 py-2"
              onClick={() => {
                window.open("https://wa.me/5599999999999", "_blank");
              }}
              style={{ gap: "8px" }}
            >
              <FaWhatsapp size={20} />
              Fazer pedido
            </button>
          </div>
        </div>

        <div className="col-md-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.9405614967104!2d-34.880162330725504!3d-7.120499646501214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7e171a937cf%3A0x5a1076421065d650!2sParque%20da%20Lagoa%20-%20Solon%20de%20Lucena!5e0!3m2!1spt-BR!2sbr!4v1753750781159!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "12px",
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}