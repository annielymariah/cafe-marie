import Card from "../Card";

export default function InfoCards() {
  return (
    <div className="container text-center my-5" id="about-us">
      <div className="row justify-content-center">
        <div className="col-auto">
          <Card
            imageSrc="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Equipe de qualidade aprovada."
            text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis aliquet nunc. Nam faucibus a nulla eget vehicula. Morbi mollis accumsan porta."
          />
        </div>
        <div className="col-auto">
          <Card
            imageSrc="https://images.unsplash.com/photo-1522012188892-24beb302783d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Feito com o amor da vovó!"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis aliquet nunc. Nam faucibus a nulla eget vehicula. Morbi mollis accumsan porta. Ut tellus lacus, tincidunt id ipsum fermentum, congue auctor enim. Vivamus quis tellus enim."
          />
        </div>
      </div>
    </div>
  );
}
