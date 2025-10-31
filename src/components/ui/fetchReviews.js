export async function fetchReviews() {
  const SHEET_URL =
    "https://opensheet.elk.sh/1de6SglbkHwuHhK1MJuXi4ggHHyN2qOTpp8WUFQtXo-g/Sheet1";

  try {
    const res = await fetch(SHEET_URL);
    if (!res.ok) throw new Error("Failed to fetch sheet data");
    const data = await res.json();
    return data; // Each row becomes one blog post
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}
