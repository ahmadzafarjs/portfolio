import supabase from "./supabase";

export async function getTodos() {
    let { data, error } = await supabase
    .from('projects')
    .select('*')

    if(error) {
        throw new Error("Projects not loaded")
    }

    return data
}