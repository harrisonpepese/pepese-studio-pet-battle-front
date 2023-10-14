import { Box } from "@mui/material"
import {IPet} from "pepese-core/src/pets/interface/pet.interface"
export interface PetDetailProps {
    pet: IPet
}
export function PetDetail({pet}:PetDetailProps){
    
    return (
        <div>
            <Box display="flex" justifyContent="space-between" alignItems="center">

        <h3>Pet name</h3>
        <p>type: eletric</p>
        <p>level: 1</p>
        </Box>
        <img src="https://play.pokemonshowdown.com/sprites/bw/pikachu.png" alt="pica" width={96} height={96} />
        <p>hash: {pet.id}</p>
        <p>type: tipo</p>
        <p>level: 1</p>
        <p>total battles: 0</p>
        <p>wins: 0</p>
        </div>
    )
}