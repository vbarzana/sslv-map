import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  name: string;
  parentCategory: string;
  type: string;
}

export enum RealEstateType {
  flat,
  summerResidence,
  farm,
  office,
  land,
  wood,
  broker,
  hangar,
  garret,
  parking,
  garden,
  garage,
}

export const REAL_ESTATE_CONFIG = {
  flat: {
    url: "flats",
    label: "Dzīvokļi",
  },
  summerResidence: {
    url: "homes-summer-residences",
    label: "Mājas, vasarnīcas",
  },
  farm: {
    url: "farms-estates",
    label: "Lauku viensētas",
  },
  office: {
    url: "offices",
    label: "Biroji",
  },
  land: {
    url: "plots-and-lands",
    label: "Zeme",
  },
  wood: {
    url: "wood",
    label: "Mežs",
  },
  broker: {
    url: "brokers-services",
    label: "Rieltora pakalpojumi",
  },
  hangar: {
    url: "premises/hangars",
    label: "Angāri",
  },
  garret: {
    url: "premises/garrets",
    label: "Bēniņi",
  },
  parking: {
    url: "other/parkings",
    label: "Autostāvvietas",
  },
  garden: {
    url: "other/vegetable-gardens",
    label: "Dārzi",
  },
  garage: {
    url: "premises/garages",
    label: "Garāžas",
  },
};


export enum TransportType {
  passengerCar = "Vieglie auto",
  truck = "Kravas automašīnas",
  motorcycle = "Moto transports",
  bicycle = "Velosipēdi, skūteri",
  exchangePassengerCar = "Vieglo auto maiņa",
  sparePart = "Remonts un rezerves daļas",
  cargo = "Kravu un pasažieru pārvadājumi",
  transportRent = "Transporta noma",
  offroad = "Apvidus automašīnas un amfībijas",
  buggy = "Bagiji",
  helicopter = "Helikopteri",
  karting = "Kartingi",
  plane = "Lidmašīnas",
  hangGlider = "Moto deltaplāni",
  paragliding = "Paraplāni",
  glider = "Planieri",
  waterTransport = "Ūdens transports",
  other = "Citi pārvietošanas līdzekļi",
  chemistry = "Ķīmija, eļļas, pārstrāde",
  trailer = "Piekabes un treileri",
  defectOrAccident = "Transports ar defektiem vai pēc avārijas",
  forDisabledPeople = "Transports invalīdiem",
  tank = "Tvertnes, cisternas",
  carExchange = "Vieglo auto maiņa",
  miscellaneous = "Dažādi",
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  parentCategory: { type: String, enum: ["REAL_ESTATE", "TRANSPORT"] },
  type: {
    type: String,
    enum: Array.from(
      new Set(
        Object.keys(RealEstateType).concat(Object.keys(TransportType))
      ).keys()
    ),
    required: true,
  },
});

export default mongoose.models.Item ||
  mongoose.model<IItem>("Item", ItemSchema);
