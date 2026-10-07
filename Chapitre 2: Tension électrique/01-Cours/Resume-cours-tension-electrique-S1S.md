# Chapitre 2 - La tension électrique

**S1S (G10) - Résumé de cours**

La tension électrique

S1S (G10) • Chapitre 2 • Résumé de cours

## 1. Tension, courant et matériaux

La **tension électrique**, ou **différence de potentiel**, se définit entre deux points. Elle se note U et s’exprime en **volts**, de symbole V. La notation U<sub>AB</sub> désigne la tension du point A par rapport au point B.

Dans un conducteur métallique, les électrons libres sont en agitation permanente. **Sans tension appliquée**, leur mouvement est désordonné, sans déplacement d’ensemble orienté. **Lorsqu’une tension est appliquée dans un circuit fermé**, un mouvement d’ensemble orienté se superpose à cette agitation : ce déplacement des électrons constitue le courant électrique.

**Conducteur :** matériau dans lequel les charges électriques peuvent se déplacer facilement.
**Isolant :** matériau qui ne permet pas leur déplacement facile dans les conditions usuelles.

## 2. Le rôle de la pile ou de la batterie

Une pile ou une batterie électrochimique utilise sa réserve d’**énergie chimique** pour maintenir une différence de potentiel entre ses bornes et fournir de l’**énergie électrique** au circuit. Lorsque cette réserve est épuisée, on remplace la pile ou on recharge la batterie si elle est rechargeable.

## 3. Les lois des tensions

**L’ordre des points compte :** inverser les deux points change le signe de la tension.

U<sub>BA</sub> = -U<sub>AB</sub>

**Loi d’additivité.** Pour trois points X, Y et Z :

U<sub>XZ</sub> = U<sub>XY</sub> + U<sub>YZ</sub>

Cette relation s’applique notamment aux dipôles en série : la tension aux bornes de leur ensemble est la somme des tensions à leurs bornes, en respectant l’ordre des points.

**Exemple :** U<sub>AB</sub> = 3 V et U<sub>BC</sub> = 5 V donnent U<sub>AC</sub> = 3 + 5 = **8 V**.
**Attention au signe :** si U<sub>AB</sub> = 6 V et U<sub>CB</sub> = 2 V, alors U<sub>BC</sub> = -2 V et U<sub>AC</sub> = 6 - 2 = **4 V**.

**Loi d’unicité.** Des dipôles branchés **en dérivation entre les mêmes points** ont la même tension à leurs bornes, lorsqu’elle est prise dans le même ordre. Ainsi, deux lampes branchées entre A et B ont chacune la tension U<sub>AB</sub>.

---

Mesurer avec un voltmètre

## 4. Appareils et branchement

Une tension peut être mesurée avec un **voltmètre**, un **multimètre réglé en voltmètre** ou un **oscilloscope**. Les voltmètres et les multimètres peuvent être analogiques ou numériques.

L’appareil se branche **en dérivation** : ses deux bornes de mesure sont reliées aux deux bornes du dipôle étudié.

**Voltmètre :** il mesure la tension entre la borne **V** et la borne **COM**, dans cet ordre.
• A relié à V et B relié à COM : tension mesurée **U<sub>AB</sub>**.
• B relié à V et A relié à COM : tension mesurée **U<sub>BA</sub>**.

**Exemple :** un voltmètre numérique indique +4,5 V. Si l’on inverse uniquement ses connexions, il indique -4,5 V.

## 5. Lire un voltmètre analogique

U = C × d / D

**C :** calibre choisi, en volts ; c’est la tension correspondant à la déviation maximale.
**d :** déviation de l’aiguille, en nombre de divisions.
**D :** nombre total de divisions de l’échelle utilisée, du zéro à la graduation maximale pour un cadran à zéro à gauche.
**U :** tension mesurée, en volts.

**Exemple :** C = 15 V, D = 100 divisions et d = 40 divisions.
U = 15 × 40 / 100 = **6 V**.

## 6. Les quatre règles d’utilisation

**1. Tension inconnue :** commencer par le **calibre le plus élevé** pour protéger le voltmètre.

**2. Calibre le mieux adapté :** choisir ensuite le **plus petit calibre disponible supérieur à la tension à mesurer**. Il donne la plus grande déviation sans dépasser l’échelle et facilite la lecture.
**Exemple :** pour environ 8 V, parmi 3 V, 15 V et 30 V, choisir **15 V**.

**3. Calibre trop petit :** si la tension dépasse le calibre, l’aiguille tend à dépasser la dernière graduation ; l’appareil risque d’être endommagé.

**4. Position du zéro :**
• **Zéro à gauche :** on ne peut pas lire une tension négative ; il faut respecter la polarité du branchement.
• **Zéro central :** l’aiguille peut dévier du côté positif ou négatif, permettant la lecture des deux signes.

**À retenir :** pour une même tension et une même échelle, augmenter le calibre diminue la déviation. Cela ne change pas la tension mesurée.

---

Mesurer avec un oscilloscope

## 7. Branchement et tension affichée

L’oscilloscope affiche la tension entre sa **borne d’entrée** et sa **borne de masse**, dans cet ordre. Il se branche en dérivation aux bornes du dipôle étudié.

• Entrée reliée à A et masse reliée à B : il affiche **U<sub>AB</sub>**.
• Entrée reliée à B et masse reliée à A : il affiche **U<sub>BA</sub> = -U<sub>AB</sub>**.

## 8. Déterminer la tension à partir de la trace

Pour une tension continue, on repère d’abord la **ligne de référence correspondant à 0 V**, puis le déplacement vertical de la trace par rapport à cette ligne.

U = S<sub>v</sub> × y

**S<sub>v</sub> :** sensibilité verticale, en V/div.
**y :** déplacement vertical algébrique, en divisions.
**U :** tension mesurée, en volts.

• Trace **au-dessus** de la référence : y > 0, donc U > 0.
• Trace **en dessous** de la référence : y < 0, donc U < 0.
• Trace **sur** la référence : y = 0, donc U = 0.

**Exemple 1 - Lire une trace.** S<sub>v</sub> = 2 V/div ; la trace est 3 divisions sous la référence : y = -3 div.
U = 2 × (-3) = **-6 V**.

**Exemple 2 - Prévoir la position.** U<sub>AB</sub> = +6 V. L’entrée est reliée à B et la masse à A, donc U = U<sub>BA</sub> = -6 V. Avec S<sub>v</sub> = 2 V/div :
y = U / S<sub>v</sub> = -6 / 2 = **-3 div**. La trace est donc **3 divisions en dessous** de la référence.

## 9. Méthode à retenir

**1.** Repérer les points et les bornes de l’appareil.
**2.** Écrire la tension réellement mesurée : U<sub>AB</sub> ou U<sub>BA</sub>.
**3.** Choisir la relation adaptée et respecter les signes.
**4.** Effectuer le calcul avec les unités.
**5.** Vérifier la cohérence : signe, calibre et position de l’aiguille ou de la trace.

## Les quatre relations essentielles

U<sub>BA</sub> = -U<sub>AB</sub>
U<sub>XZ</sub> = U<sub>XY</sub> + U<sub>YZ</sub>
U = C × d / D
U = S<sub>v</sub> × y
