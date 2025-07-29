import MenuCards from "../MenuCards/MenuCards";

export default function Menu() {
  return (
    <section id="menu" className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="menu-coffees"
            data-bs-toggle="tab"
            data-bs-target="#menu-coffees-pane"
            type="button"
            role="tab"
            aria-controls="menu-coffees-pane"
            aria-selected="true"
          >
            Cafés
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="menu-backery"
            data-bs-toggle="tab"
            data-bs-target="#menu-backery-pane"
            type="button"
            role="tab"
            aria-controls="menu-backery-pane"
            aria-selected="false"
          >
            Bolos
          </button>
        </li>
      </ul>

      <div className="tab-content" id="menuTabContent">
        <div
          className="tab-pane fade show active"
          id="menu-coffees-pane"
          role="tabpanel"
          aria-labelledby="menu-coffees"
          tabIndex={0}
        >
          <MenuCards type="coffee"/>
        </div>
        <div
          className="tab-pane fade"
          id="menu-backery-pane"
          role="tabpanel"
          aria-labelledby="menu-backery"
          tabIndex={0}
        >
          <MenuCards />
        </div>
      </div>
    </section>
  );
}
