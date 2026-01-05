import { Link } from "react-router-dom";
import header from "/dog-header.png";
import hamster from "/3.jpg";
import cat from "/2.jpg";
import dog from "/5.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="hero-card background-color-components">
        <div className="hero-card-item">
          <h2 className="hero-item-title">A new home, a new life. Adopt?</h2>
          <p className="hero-item-p">
            Adopting a pet is more than just bringing a furry friend home; it is
            a compassionate act that benefits both you and the animal. By
            adopting, you are saving lives, gaining a loving companion, making a
            positive environmental impact, experiencing personal growth, and
            forming a unique connection. I is a win-win situation for both you
            and the animal.
          </p>
          <button className="about-btn">
            <Link to="/">Meet the pets</Link>
          </button>
        </div>
        <img className="pet-cards" src={header} alt="header-imgages" />
      </div>
      <div className="details-card ">
        <div className="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md ">
          {/* page 1 */}
          <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
            <img
              className="h-4/6 w-full object-cover"
              src={hamster}
              alt="hamster"
            />
            <h1 className="mt-4 px-4 text-center  text-2xl font-bold ">
              Small but Mighty
            </h1>
            <p className="mt-1 px-4 text-center text-gray-600">
              Hamsters are tiny bundles of energy that pack a big personality
              into a small package.
            </p>
          </div>
          {/* page 2 */}
          <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
            <h1 className="mb-2 px-8 text-center text-2xl font-bold">
              Low-Maintenance
            </h1>
            <p className="px-8 text-center">
              While hamsters require daily care, they are generally
              low-maintenance pets.
            </p>
          </div>
        </div>

        <div className="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
          {/* page 1 */}
          <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
            <img className="h-4/6 w-full object-cover" src={cat} alt="cat" />
            <h1 className="mt-4 px-4 text-center text-2xl font-bold">
              The Purrfect Companions
            </h1>
            <p className="mt-1 px-4 text-center text-gray-600">
              Cats are beloved pets around the world for their independent
              nature, grace, and playful personalities.
            </p>
          </div>
          {/* page 2 */}
          <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
            <h1 className="mb-2 px-8 text-center text-2xl font-bold">
              Independent and Graceful
            </h1>
            <p className="px-8 text-center">
              Cats make wonderful companions, but they require care and
              attention.
            </p>
          </div>
        </div>
        <div className="group relative m-10 h-[392px] w-[392px] overflow-hidden rounded-lg shadow-md">
          {/* page 1 */}
          <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
            <img className="h-4/6 w-full object-cover" src={dog} alt="dog" />
            <h1 className="mt-4 px-2 text-center text-2xl font-bold">
              Man&apos;s Best Friend
            </h1>
            <p className="mt-1 px-2 text-center text-gray-600">
              Dogs are known for their loyalty to their human companions.
            </p>
          </div>
          {/* page 2 */}
          <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
            <h1 className="mb-2 px-8 text-center text-2xl font-bold">
              Intelligent and Playful
            </h1>
            <p className="px-8 text-center">
              Dogs can provide unconditional love and companionship. They
              require care and attention.
            </p>
          </div>
        </div>
      </div>
      <div className="details-card background-color-components">
        <div className="details-card-item">
          <h2 className="card-item-title">Compassion</h2>
          <p>
            We believe in treating all animals with kindness, respect, and
            empathy. We strive to create a safe and nurturing environment for
            animals in our care, and we work tirelessly to find them loving
            homes.
          </p>
        </div>
        <div className="details-card-item">
          <h2 className="card-item-title">Hope</h2>
          <p>
            We believe in the power of hope. We offer hope to animals in need by
            providing them with a second chance at life, and we offer hope to
            people seeking a loving companion.
          </p>
        </div>
        <div className="details-card-item">
          <h2 className="card-item-title">Ownership</h2>
          <p>
            We are committed to responsible pet ownership. We provide education
            and resources to help adopters understand the responsibilities of
            caring for a pet, and we encourage responsible breeding practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
