export async function createSession() {
  const session = await SessionModel.create({user: userId})

  return session.toJSON();
}




"59:00 mminutos https://www.youtube.com/watch?v=BWUi6BS9T5Y&ab_channel=TomDoesTech    "