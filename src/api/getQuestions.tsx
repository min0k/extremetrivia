const OpenTDB_URL = "https://opentdb.com/api.php?amount=49&difficulty=hard&type=multiple"

export default async function getQuestions() {
  try {
    const result = await fetch(OpenTDB_URL);
    const data = await result.json();
    const array = data.results;
    return array
  } catch (err) {
    console.error(err);
  }
}
