
//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================

//? rafce nin icerik bolumunu silelim.class acalim.bu artik kullanilmaz.this ve bind kelimeleri kullnlr.arrow function varsa bind kelimesine gerek yok.karisik.
import React, {Component} from 'react'


//* burasi farz.this.state{} farz.  constructor(props) farz.  super(props) farz.  class ..extends Component{} farz
class sayacer extends Component {
  constructor(props) {
    super(props);
    this.state = { sayac: props.count || 0 };
  }

  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });
  }
  //!arrow function kullandığımız zaman bind etmeye gerek yok
  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };
  //! Metodumuz default olarak class a bind değil, bu yüzden this keyword ünü kullanamıyoruz.
  //* React tarafından tanımlanan method lar default olarak class a bind edilir (bağlanır).
  //* Bu nedenle, metodlarımızı constructor daki class a bind etmeliyiz veya automatic binding için arrow function kullanabiliriz.
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>sayac:{this.state.sayac}</h1>
        <button className="btn btn-primary" onClick={this.arttir.bind(this)}>
          ARTTIR
        </button>

        <button className="btn btn-danger" onClick={this.azalt}>
          AZALT
        </button>
      </div>
    );
  }
}

export default sayacer;