import axios from 'axios'
import api from '../utils/api'

const requestPowerStats = async (url) => {
    const response = await axios.request({
        url,
        method: 'GET'
    })
    const { data } = response
    const returnData = {
        name: data.name,
        effect: data.effect_entries[1].short_effect,
    }
    return returnData;
}

const requestTypeInfos = async (url) => {
    const response = await axios.request({
        url,
        method: 'GET'
    })
    const { data } = response
    const returnData = {
        weakness: data.damage_relations.double_damage_from.map(item => item.name),
        resistance: data.damage_relations.half_damage_from.map(item => item.name),
        doubleDamage: data.damage_relations.double_damage_to.map(item => item.name)
    }

    return returnData
}

export const requestPokemon = async (id) => {
    const response = await api.get(`pokemon/${id}`)
    const { data } = response

    const powerOneResponse = await requestPowerStats(data.abilities[0].ability.url)
    const powerTwoResponse = await requestPowerStats(data.abilities[1].ability.url)
    const typeInfosResponse = await requestTypeInfos(data.types[0].type.url)

    const returnData = {
        name: data.name,
        type: data.types[0].type.name,
        img: data.sprites.other.home.front_default,
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        typeUrl: data.types[0].type.url,
        typeInfos: typeInfosResponse,
        powers: [
            {
                name: powerOneResponse.name,
                effect: powerOneResponse.effect,
            },
            {
                name: powerTwoResponse.name,
                effect: powerTwoResponse.effect,
            }
        ]
    }

    console.log('DATA DO POKEMON TRATADA= ', returnData)

    return returnData;
}