export const getVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const villagers = await res.json();

  return villagers.map((villager) => ({
    name: villager.name,
    image: villager.image,
    gender: villager.gender,
    quote: villager.quote,
    birthday: villager.birthday,
  }));
};
