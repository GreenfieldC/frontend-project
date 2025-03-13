import { DietType, Recipe, RecipeCategory } from "./recipe.models";

export const recipes: Recipe[] = [
  {
    title: 'Spaghetti Bolognese',
    ingredients: [
      { amount: 400, unit: 'g', name: 'Spaghetti' },
      { amount: 300, unit: 'g', name: 'Rinderhackfleisch' },
      { amount: 1, unit: 'Stk.', name: 'Zwiebel' },
      { amount: 1, unit: 'Dose', name: 'Tomaten, stückig' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 4,
    steps: [
      'Zwiebel würfeln und in einer Pfanne anbraten.',
      'Hackfleisch hinzugeben und krümelig anbraten.',
      'Tomaten hinzufügen und die Soße etwa 15 Minuten köcheln lassen.',
      'Spaghetti nach Packungsanleitung kochen.',
      'Soße mit Salz und Pfeffer abschmecken und mit Spaghetti servieren.',
    ],
    recipeId: 1,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Omnivore,
    preparationTime: 30,
  },
  {
    title: 'Rührei mit Speck',
    ingredients: [
      { amount: 4, unit: 'Stk.', name: 'Eier' },
      { amount: 100, unit: 'g', name: 'Speck' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
      { amount: 1, unit: 'TL', name: 'Butter' },
    ],
    personsNumber: 2,
    steps: [
      'Speck in einer Pfanne knusprig braten.',
      'Eier in einer Schüssel verquirlen, mit Salz und Pfeffer würzen.',
      'Butter in eine Pfanne geben, Eimasse dazu und stocken lassen.',
      'Speck unterheben und Rührei sofort servieren.',
    ],
    recipeId: 2,
    category: [RecipeCategory.Breakfast],
    dietType: DietType.Omnivore,
    preparationTime: 10,
  },
  {
    title: 'Gemüse-Lasagne',
    ingredients: [
      { amount: 9, unit: 'Stk.', name: 'Lasagneblätter' },
      { amount: 2, unit: 'Stk.', name: 'Zucchini' },
      { amount: 2, unit: 'Stk.', name: 'Paprika' },
      { amount: 200, unit: 'g', name: 'Tomaten, passiert' },
      { amount: 200, unit: 'g', name: 'Käse (gerieben)' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 4,
    steps: [
      'Zucchini und Paprika klein schneiden.',
      'Gemüse anbraten und mit passierten Tomaten vermengen, würzen.',
      'In einer Auflaufform abwechselnd Lasagneblätter und Gemüsemischung schichten.',
      'Mit geriebenem Käse abschließen.',
      'Im vorgeheizten Ofen bei 180°C ca. 30 Minuten backen.',
    ],
    recipeId: 3,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Vegetarian,
    preparationTime: 45,
  },
  {
    title: 'Avocado-Toast',
    ingredients: [
      { amount: 2, unit: 'Scheiben', name: 'Vollkornbrot' },
      { amount: 1, unit: 'Stk.', name: 'Avocado' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
      { amount: 1, unit: 'Stk.', name: 'Tomate (optional)' },
    ],
    personsNumber: 2,
    steps: [
      'Toast oder Brot rösten.',
      'Avocado zerdrücken und mit Salz und Pfeffer würzen.',
      'Avocadocreme auf das getoastete Brot streichen.',
      'Optional Tomatenscheiben darauflegen und sofort servieren.',
    ],
    recipeId: 4,
    category: [RecipeCategory.Breakfast, RecipeCategory.Snack],
    dietType: DietType.Vegetarian,
    preparationTime: 10,
  },
  {
    title: 'Veganer Burger',
    ingredients: [
      { amount: 2, unit: 'Stk.', name: 'Vegane Burger-Patties' },
      { amount: 2, unit: 'Stk.', name: 'Burgerbrötchen' },
      { amount: 4, unit: 'Blatt', name: 'Salat' },
      { amount: 2, unit: 'Stk.', name: 'Tomate (in Scheiben)' },
      { amount: 1, unit: 'EL', name: 'Vegane Mayonnaise' },
    ],
    personsNumber: 2,
    steps: [
      'Patties nach Anleitung braten oder grillen.',
      'Brötchen aufschneiden und kurz anrösten.',
      'Salat und Tomatenscheiben vorbereiten.',
      'Alle Zutaten in das Brötchen legen, mit veganer Mayo bestreichen.',
      'Sofort servieren.',
    ],
    recipeId: 5,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Vegan,
    preparationTime: 20,
  },
  {
    title: 'Overnight Oats',
    ingredients: [
      { amount: 50, unit: 'g', name: 'Haferflocken' },
      { amount: 100, unit: 'ml', name: 'Pflanzliche Milch (z.B. Hafermilch)' },
      { amount: 1, unit: 'TL', name: 'Chiasamen' },
      { amount: 1, unit: 'TL', name: 'Ahornsirup' },
      { amount: 1, unit: 'Handvoll', name: 'Beeren' },
    ],
    personsNumber: 1,
    steps: [
      'Haferflocken, pflanzliche Milch und Chiasamen in einem Glas verrühren.',
      'Über Nacht im Kühlschrank quellen lassen.',
      'Am Morgen mit Ahornsirup und frischen Beeren toppen.',
    ],
    recipeId: 6,
    category: [RecipeCategory.Breakfast],
    dietType: DietType.Vegan,
    preparationTime: 5,
  },
  {
    title: 'Gegrillter Lachs mit Quinoa',
    ingredients: [
      { amount: 2, unit: 'Filets', name: 'Lachs' },
      { amount: 150, unit: 'g', name: 'Quinoa' },
      { amount: 1, unit: 'Stk.', name: 'Zitrone' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 2,
    steps: [
      'Quinoa nach Packungsanleitung kochen.',
      'Lachsfilets salzen, pfeffern und mit Zitronensaft beträufeln.',
      'Lachs in einer Pfanne oder auf dem Grill garen.',
      'Servieren: Lachs mit Quinoa anrichten.',
    ],
    recipeId: 7,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.GlutenFree,
    preparationTime: 25,
  },
  {
    title: 'Früchte-Smoothie',
    ingredients: [
      { amount: 1, unit: 'Stk.', name: 'Banane' },
      { amount: 100, unit: 'g', name: 'Beeren (gemischt)' },
      { amount: 200, unit: 'ml', name: 'Orangensaft' },
      { amount: 1, unit: 'TL', name: 'Honig (optional)' },
    ],
    personsNumber: 2,
    steps: [
      'Alle Zutaten in einen Mixer geben.',
      'Fein pürieren, bis der Smoothie cremig ist.',
      'In Gläser füllen und sofort genießen.',
    ],
    recipeId: 8,
    category: [RecipeCategory.Beverage],
    dietType: DietType.GlutenFree,
    preparationTime: 5,
  },
  {
    title: 'Hähnchen mit Kokosmilch-Curry',
    ingredients: [
      { amount: 300, unit: 'g', name: 'Hähnchenbrustfilet' },
      { amount: 1, unit: 'Dose', name: 'Kokosmilch' },
      { amount: 1, unit: 'Stk.', name: 'Zwiebel' },
      { amount: 2, unit: 'TL', name: 'Currypulver' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
    ],
    personsNumber: 3,
    steps: [
      'Zwiebel würfeln und anbraten.',
      'Hähnchen in Stücke schneiden, anbraten und mit Currypulver würzen.',
      'Kokosmilch hinzugeben und bei niedriger Hitze köcheln lassen.',
      'Mit Salz abschmecken und servieren.',
    ],
    recipeId: 9,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.DairyFree,
    preparationTime: 25,
  },
  {
    title: 'Frucht-Sorbet',
    ingredients: [
      { amount: 300, unit: 'g', name: 'TK-Früchte (z.B. Erdbeeren)' },
      { amount: 2, unit: 'EL', name: 'Zucker oder Süßungsmittel' },
      { amount: 2, unit: 'EL', name: 'Wasser' },
    ],
    personsNumber: 4,
    steps: [
      'TK-Früchte, Zucker und Wasser in einem Mixer pürieren.',
      'Masse in eine flache Schale geben und einfrieren.',
      'Alle 30 Minuten umrühren, bis die gewünschte Konsistenz erreicht ist.',
    ],
    recipeId: 10,
    category: [RecipeCategory.Dessert],
    dietType: DietType.DairyFree,
    preparationTime: 10,
  },
  {
    title: 'Steak mit Kartoffeln',
    ingredients: [
      { amount: 2, unit: 'Stk.', name: 'Rindersteak' },
      { amount: 500, unit: 'g', name: 'Kartoffeln' },
      { amount: 1, unit: 'EL', name: 'Öl' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 2,
    steps: [
      'Kartoffeln schälen, in Stücke schneiden und kochen.',
      'Steaks salzen, pfeffern und in heißer Pfanne beidseitig anbraten.',
      'Kartoffeln abgießen und zusammen mit Steak servieren.',
    ],
    recipeId: 11,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.NutFree,
    preparationTime: 25,
  },
  {
    title: 'Tomaten-Gurken-Salat',
    ingredients: [
      { amount: 2, unit: 'Stk.', name: 'Tomaten' },
      { amount: 1, unit: 'Stk.', name: 'Gurke' },
      { amount: 1, unit: 'EL', name: 'Essig' },
      { amount: 1, unit: 'EL', name: 'Öl' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 4,
    steps: [
      'Tomaten und Gurken in Scheiben schneiden.',
      'Essig, Öl, Salz und Pfeffer zu einem Dressing verrühren.',
      'Salat mit Dressing vermischen und direkt servieren.',
    ],
    recipeId: 12,
    category: [RecipeCategory.SideDish],
    dietType: DietType.NutFree,
    preparationTime: 10,
  },
  {
    title: 'Zoodles mit Pesto',
    ingredients: [
      { amount: 2, unit: 'Stk.', name: 'Zucchini' },
      { amount: 2, unit: 'EL', name: 'Pesto (ohne Käse, z.B. Paleo-Pesto)' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 2,
    steps: [
      'Zucchini mit einem Spiralschneider zu Zoodles verarbeiten.',
      'Zoodles kurz in heißem Wasser blanchieren oder roh verwenden.',
      'Mit Pesto mischen und mit Salz und Pfeffer würzen.',
      'Sofort servieren.',
    ],
    recipeId: 13,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Paleo,
    preparationTime: 15,
  },
  {
    title: 'Obstsalat',
    ingredients: [
      { amount: 1, unit: 'Stk.', name: 'Apfel' },
      { amount: 1, unit: 'Stk.', name: 'Banane' },
      { amount: 1, unit: 'Stk.', name: 'Birne' },
      { amount: 1, unit: 'Handvoll', name: 'Beeren' },
    ],
    personsNumber: 2,
    steps: [
      'Obst in mundgerechte Stücke schneiden.',
      'Alle Früchte in einer Schüssel vermischen.',
      'Optional mit etwas Zitronensaft beträufeln, sofort servieren.',
    ],
    recipeId: 14,
    category: [RecipeCategory.Dessert],
    dietType: DietType.Paleo,
    preparationTime: 10,
  },
  {
    title: 'Keto-Hähnchen-Auflauf',
    ingredients: [
      { amount: 300, unit: 'g', name: 'Hähnchenbrustfilet' },
      { amount: 200, unit: 'g', name: 'Brokkoli' },
      { amount: 100, unit: 'g', name: 'Käse (gerieben, z.B. Gouda)' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 3,
    steps: [
      'Hähnchenbrust in Stücke schneiden und würzen.',
      'Brokkoli in Röschen teilen.',
      'Beides in eine Auflaufform geben, mit Käse bestreuen.',
      'Bei 180°C ca. 20-25 Minuten backen, bis der Käse goldbraun ist.',
    ],
    recipeId: 15,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Keto,
    preparationTime: 30,
  },
  {
    title: 'Gurkenboote mit Thunfisch',
    ingredients: [
      { amount: 1, unit: 'Stk.', name: 'Gurke' },
      { amount: 1, unit: 'Dose', name: 'Thunfisch (in Wasser)' },
      { amount: 1, unit: 'EL', name: 'Mayonnaise' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 2,
    steps: [
      'Gurke längs halbieren und das Kerngehäuse entfernen.',
      'Thunfisch abtropfen, mit Mayonnaise, Salz und Pfeffer mischen.',
      'Thunfischmasse in die Gurkenhälften füllen und direkt servieren.',
    ],
    recipeId: 16,
    category: [RecipeCategory.Snack],
    dietType: DietType.Keto,
    preparationTime: 10,
  },
  {
    title: 'Hähnchen-Kabsa (Halal)',
    ingredients: [
      { amount: 500, unit: 'g', name: 'Hähnchenteile (z.B. Keulen, Brust)' },
      { amount: 2, unit: 'Stk.', name: 'Zwiebeln' },
      { amount: 300, unit: 'g', name: 'Reis (Langkorn)' },
      { amount: 1, unit: 'Dose', name: 'Tomaten, passiert' },
      { amount: 1, unit: 'TL', name: 'Kabsa-Gewürz (oder Ras el Hanout)' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
    ],
    personsNumber: 4,
    steps: [
      'Zwiebeln anbraten, Hähnchenstücke hinzugeben und anbraten.',
      'Kabsa-Gewürz und passierte Tomaten hinzufügen.',
      'Reis zufügen und mit Wasser aufgießen, bis alles bedeckt ist.',
      'Bei niedriger Hitze köcheln lassen, bis Reis und Hähnchen gar sind.',
    ],
    recipeId: 17,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Halal,
    preparationTime: 40,
  },
  {
    title: 'Shakshuka (Halal)',
    ingredients: [
      { amount: 1, unit: 'Stk.', name: 'Zwiebel' },
      { amount: 1, unit: 'Stk.', name: 'Paprika' },
      { amount: 1, unit: 'Dose', name: 'Tomaten, gehackt' },
      { amount: 2, unit: 'Stk.', name: 'Eier' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
    ],
    personsNumber: 2,
    steps: [
      'Zwiebel und Paprika würfeln und in einer Pfanne anbraten.',
      'Gehackte Tomaten hinzugeben und köcheln lassen.',
      'Mit Salz und Pfeffer abschmecken.',
      'Mulden in die Soße drücken und Eier hineingeben.',
      'Deckel auflegen und die Eier stocken lassen.',
    ],
    recipeId: 18,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Halal,
    preparationTime: 20,
  },
  {
    title: 'Gefilte Fisch (Koscher)',
    ingredients: [
      { amount: 400, unit: 'g', name: 'Fischfilet (z.B. Karpfen)' },
      { amount: 1, unit: 'Stk.', name: 'Zwiebel' },
      { amount: 1, unit: 'Stk.', name: 'Ei' },
      { amount: 2, unit: 'EL', name: 'Paniermehl (koscher zertifiziert)' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
    ],
    personsNumber: 4,
    steps: [
      'Fisch, Zwiebel und Ei im Mixer pürieren.',
      'Mit Paniermehl und Salz vermengen.',
      'Masse zu Bällchen formen und in kochendem Wasser garen.',
      'Warm oder kalt servieren.',
    ],
    recipeId: 19,
    category: [RecipeCategory.MainCourse],
    dietType: DietType.Kosher,
    preparationTime: 30,
  },
  {
    title: 'Bagels mit Lachs und Frischkäse (Koscher)',
    ingredients: [
      { amount: 2, unit: 'Stk.', name: 'Bagels (koscher zertifiziert)' },
      { amount: 100, unit: 'g', name: 'Räucherlachs' },
      { amount: 50, unit: 'g', name: 'Frischkäse' },
      { amount: 1, unit: 'Stk.', name: 'Zwiebel (in Ringen)' },
      { amount: 2, unit: 'Blatt', name: 'Salat' },
    ],
    personsNumber: 2,
    steps: [
      'Bagels aufschneiden und toasten.',
      'Frischkäse gleichmäßig auf den Hälften verteilen.',
      'Lachs, Zwiebelringe und Salat auflegen.',
      'Zusammenklappen und sofort servieren.',
    ],
    recipeId: 20,
    category: [RecipeCategory.Breakfast],
    dietType: DietType.Kosher,
    preparationTime: 10,
  },
];
