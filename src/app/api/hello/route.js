export async function GET() {
  return Response.json({
    stories: [
      { title: "Zelenskyy makes demand of Trump - and issues warning to NATO" },
      { title: "Bristling with frustration - Zelenskyy's message is clear" },
      { title: "UN Commission says Israel is committing genocide in Gaza" },
      {
        title:
          "Ground forces moving deeper into Gaza City, Israel says - as attack to 'destroy Hamas' begins",
      },
      {
        title:
          "Trump arrives in UK today - and no state visit has ever had such an unseemly backdrop as this",
      },
      {
        title:
          "Starmer under pressure as MPs to debate Mandelson appointment and Epstein links",
      },
      { title: "Income tax warning with state pension set to rise | Money" },
      {
        title:
          "Britain's drugs industry is suffering withdrawal symptoms, and it could prove costly",
      },
      {
        title:
          "Ricky Hatton's ex-girlfriend Claire Sweeney pays tribute after boxer's death",
      },
      { title: "Another ex-Tory minister defects to Reform UK" },
    ],
  });
}
