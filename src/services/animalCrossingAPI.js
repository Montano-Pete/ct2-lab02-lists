export const getVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await res.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    image: villager.image,
    gender: villager.gender,
    quote: villager.quote,
    birthday: villager.birthday,
  }));
};

export const getVillagersId = async (id) => {
  const response = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const villager = await response.json();

  return villager;
};
