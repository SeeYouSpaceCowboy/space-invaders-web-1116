class Spaceship {

  constructor (name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked, phasersCharge = 'uncharged'){
    this.name = name
    this.crew = crewShip(crew, this)
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = (this.crew.length === 0) || false
    this.phasersCharge = phasersCharge

    function crewShip(crew, spaceShip) {
      crew.forEach((member, idx, crew) => {
        member.currentShip = spaceShip
      })
      return crew
    }

  }
}
