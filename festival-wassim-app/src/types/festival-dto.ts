import { EtatFestival } from "./etat-festival"

export interface FestivalDto {
    name: string
    location: string
    year: number
    etat: EtatFestival
    hidden: boolean
}
