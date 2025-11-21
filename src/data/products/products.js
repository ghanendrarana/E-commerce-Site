import opulentBaroqueArmchair from "../../assets/FurniturePicture/opulent-baroque-armchair.jpg";
import ArmChairFurniture from "../../assets/FurniturePicture/armchair-furniture.png";
import Chair from "../../assets/FurniturePicture/home-decor-furniture-item-wooden-chair-on-transparent_54043912.png";
import ChairWithWoodenLegs from "../../assets/FurniturePicture/black-modern-chair-with-wooden-legs.png";
import WoodenChair from "../../assets/FurniturePicture/black-wooden-chair.png";
import ClassicWoodenChair from "../../assets/FurniturePicture/classic-wooden-chair-with-backrest-designed-for-comfort-and_54719774.png";

const FurnitureProducts = [
  {
    id: 1,
    name: "Opulent Baroque Armchair",
    price: 59.99,
    category: "Armchair",
    description: `This is a luxurious vintage armchair with a high tufted backrest and
    rolled armrests, upholstered in soft beige fabric. It features
    ornate gold-toned wooden carvings and comes with two decorative
    pillows, giving it an elegant and classic look.`,
    sizes: ["Small", "Medium", "Large"],
    color: ["Gray", "Beige", "Brown"],
    rating: 4.5,
    image: opulentBaroqueArmchair,
  },
  {
    id: 2,
    name: "Arm Chair",
    price: 19.99,
    category: "Armchair",
    description: `This is a luxurious vintage armchair with a high tufted backrest and
    rolled armrests, upholstered in soft beige fabric.`,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gray", "Beige", "Red"],
    rating: 4.5,
    image: ArmChairFurniture,
  },

  {
    id: 3,
    name: "Chair",
    price: 19,
    category: "Chair",
    description: `This is a comfortable wooden chair.`,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gray", "Beige", "Red"],
    rating: 4.5,
    image: Chair,
  },

   {
    id: 4,
    name: "Modern Chair",
    price: 20,
    category: "Chair",
    description: `This is a comfortable modern chair with long wooden legs.`,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gray", "Beige", "Red"],
    rating: 4.5,
    image: ChairWithWoodenLegs,
  },

   {
    id: 5,
    name: "Wooden Chair",
    price: 25,
    category: "Chair",
    description: `This is a comfortable office like wooden chair.`,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gray", "Beige", "Red"],
    rating: 4.5,
    image: WoodenChair,
  },

   {
    id: 6,
    name: "Classic Wooden Chair",
    price: 19.99,
    category: "Chair",
    description: `This is a classic woodern chair with backrest design for comfort.`,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gray", "Beige", "Red"],
    rating: 4.5,
    image: ClassicWoodenChair,
  },
];

export default FurnitureProducts;
