const solution =  async () => {
    try {
        const pokemonsShortInfo = await fetch('https://pokeapi.co/api/v2/pokemon').then((response) =>
        response.json());


        const pokemonArray = pokemonsShortInfo.results.map((pokemon) => 
            fetch(pokemon.url).then((response) => response.json()))
        // Создаем массив промисов и распаковываем их

        const result = Promise.all(pokemonArray)

        console.log(result)

} catch (error) {}
};

solution()
