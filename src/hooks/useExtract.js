
const useExtract = (item) => ({
    id: item['id'],
    name: item['name'],
    price: item['price'],
    image: item['image'],
    description: item['description'],
});

export default useExtract;
