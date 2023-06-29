import "./🎨videos-page.css";
import LinkButton from "../custom-buttons/LinkButton";
import CardDisplay from "../card-display/card-display";

export default function ProjectsVidsPage() {
  return (
    <section id="videos-page-id" className="videos-page-root">
      <div className="videos-page-content">
        <div className="videos-page-copy">
          <h2>Proyectos de Animación </h2>
          <p>
            Además de ser ilustrador, también me aventuro en el mundo de la animación. Aquí te
            presento algunos de mis trabajos más sobresalientes. 👺
          </p>
        </div>
        <div className="videos-page-cards">
          <CardDisplay header="Su majestad Imperial">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/silverio%20Dances_2.mp4?alt=media&token=98007614-5a04-4bcd-ba24-481575ba4f07"
              className="videos-page-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h4 className="videos-page-card-title">
              "¡Estaría bien verga que le llegará a mi patrón Silverio 👀 Con mucho cariño 😍!"
            </h4>
            <i className="videos-page-card-date">- Junio 25, 2022</i>
            <div className="videos-page-card-CTA">
              <LinkButton to="https://www.instagram.com/reel/Ce119EuAg38/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="El Moustro del Pantano">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/moustropantano.mp4?alt=media&token=2ea3c1bc-1d3f-4a71-900c-677a7cd1f5be"
              className="videos-page-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h4 className="videos-page-card-title">
              "¡El Moustro del pantano les manda saludos especiales. Idea original de mi carnalito
              @victorlglz!"
            </h4>
            <i className="videos-page-card-date">- Febrero 4, 2022</i>
            <div className="videos-page-card-CTA">
              <LinkButton to="https://www.instagram.com/reel/CZkZlbKFcyk/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Leyendas legendarias">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/LL_2.mp4?alt=media&token=3e2bce49-6153-4b22-8f2f-96564ede052c"
              className="videos-page-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h4 className="videos-page-card-title">
              "¡Armé este pequeño homenaje para los carnales de @leyendaspodcast @elbadiablo
              @ninguneduardo @mariolopezcapi!"
            </h4>
            <i className="videos-page-card-date">- Octubre 30, 2020</i>
            <div className="videos-page-card-CTA">
              <LinkButton to="https://www.instagram.com/reel/CG-piSSnMbT/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Chino Moreno de los Deftones.">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/chino%20moreno%20grito-.mp4?alt=media&token=7754e300-6a11-4d27-9937-13f2f51e87a1"
              className="videos-page-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h4 className="videos-page-card-title">
              "¡Desde el mismísimo infierno para esa bandota tan rifada!"
            </h4>
            <i className="videos-page-card-date">- Junio 20, 2020</i>
            <div className="videos-page-card-CTA">
              <LinkButton to="https://www.instagram.com/reel/CBqzm3tnWED/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
