import ollama from 'ollama'

(async () => {
    const response = await ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    })
    console.log(response.message.content)
})()