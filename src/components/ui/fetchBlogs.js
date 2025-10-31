// src/components/ui/fetchBlogs.js
export async function fetchBlogs() {
  const SHEET_URL =
    "https://opensheet.elk.sh/1de6SglbkHwuHhK1MJuXi4ggHHyN2qOTpp8WUFQtXo-g/Sheet1";

  try {
    const res = await fetch(SHEET_URL);
    if (!res.ok) throw new Error("Failed to fetch sheet data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
