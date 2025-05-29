import Anthropic from "@anthropic-ai/sdk"

const SYSTEM_PROMPT = `
You are a fitness assistant that receives a list of exercise equipment that a user has and suggests a personalized workout routine they could do with some or all of that equipment. You don't need to use every piece of equipment they mention in your workout. The workout can include bodyweight exercises and additional equipment they didn't mention, but try to focus primarily on what they have available. 

Create effective workout routines that include:
- A brief warm-up (2-3 exercises)
- Main workout with specific exercises, sets, and reps (focus on clear set/rep schemes)
- A simple cool-down (2-3 stretches)

Prioritize clear sets and reps for each exercise. Format your response in markdown to make it easier to render to a web page. Structure the workout clearly with headings and bullet points.
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getWorkoutFromFlexGPT(equipmentArr) {
    const equipmentString = equipmentArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { 
                role: "user",
                content: `I have the following equipment available: ${equipmentString}. Please create a personalized workout routine for me!`
            },
        ],
    });
    return msg.content[0].text
}