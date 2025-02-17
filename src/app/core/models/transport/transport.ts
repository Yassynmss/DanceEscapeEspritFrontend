import { Equipment } from "../equipment/equipment";
import { Staff } from "../staff/staff";

export class Transport {
    id_transport !: number;
    route!: string;
    description!: string;
    startLocation_longitude!: string;
    startLocation_latitude!: string;
    endLocation_longitude!: string;
    endLocation_latitude!: string;
    id_logistic!: number;
    id_staff!: number; 
    driver?: Staff;
    equipments!: Equipment[];
}