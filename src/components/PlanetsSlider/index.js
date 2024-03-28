// Write your code here
import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
