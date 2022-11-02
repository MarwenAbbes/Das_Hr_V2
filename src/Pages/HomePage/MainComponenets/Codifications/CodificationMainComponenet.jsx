import { Box } from "@mui/material";
import {React,useContext} from "react";
import {
  categorieTableColumns,
  causesDeDepartsTableColumns,
  centresDinteretsTableColumns,
  codeCnssTableColumns,
  etatCivilTableColumns,
  fonctionTableColumns,
  groupesCalandrierTableColumns,
  listeDesBilletsParPiecesDeMonnaiesTableColumns,
  motifDeMission,
  moyenDeTransportTableColumns,
  nationaliteTableColumns,
  regimesCalandrierTableColumns,
  regimSalaireTableColumns,
  serviceTableColumns,
  situationMilitaireTableColumns,
  statutTableColumns,
  typesDeFormationsTableColumns,
  typesDePretsTableColumns,
  villeTableColumns,
} from "./Templates/ColumnsTemplates";
import ConfigurationRegimeDeSalaireComponenent from "./SubComponenents/ConfigurationRegimeDeSalaireComponenent";
import ConfigurationServiceComponenet from "./SubComponenents/ConfigurationServiceComponenet";
import ConfigurationNationaliteComponenet from "./SubComponenents/ConfigurationNationaliteComponenet";
import ConfigurationEtatCivilComponenet from "./SubComponenents/ConfigurationEtatCivilComponenet";
import ConfigurationSituationMilitaireComponenet from "./SubComponenents/ConfigurationSituationMilitaireComponenet";
import ConfigurationCausesDeDepartsComponenet from "./SubComponenents/ConfigurationCausesDeDepartsComponenet";
import ConfigurationFonctionComponenet from "./SubComponenents/ConfigurationFonctionComponenet";
import ConfigurationCategorieComponenet from "./SubComponenents/ConfigurationCategorieComponenet";
import ConfigurationVilleComponenet from "./SubComponenents/ConfigurationVilleComponenet";
import ConfigurationMotifDeMissionComponenet from "./SubComponenents/ConfigurationMotifDeMissionComponenet";
import ConfigurationMoyenDeTransportComponenet from "./SubComponenents/ConfigurationMoyenDeTransportComponenet";
import ConfigurationRegimesCalandrierComponenet from "./SubComponenents/ConfigurationRegimesCalandrierComponenet";
import ConfigurationGroupesCalandrierComponenet from "./SubComponenents/ConfigurationGroupesCalandrierComponenet";
import ConfigurationStatutComponenent from "./SubComponenents/ConfigurationStatutComponenent";
import ConfigurationCodeCNSSComponenet from "./SubComponenents/ConfigurationCodeCNSSComponenet";
import ConfigurationTypesDeFormationsComponenet from "./SubComponenents/ConfigurationTypesDeFormationsComponenet";
import ConfigurationTypesEvaluationsComponenent from "./SubComponenents/ConfigurationTypesEvaluationsComponenent";
import ConfigurationTypesDePretsComponenet from "./SubComponenents/ConfigurationTypesDePretsComponenet";
import ConfigurationCentresInteretsComponenet from "./SubComponenents/ConfigurationCentresInteretsComponenet";
import ConfigurationListDesBilletsComponenet from "./SubComponenents/ConfigurationListDesBilletsComponenet";
import { userContext } from "../../../../Contexts/UserContext";
import IndimnitesComponenet from "./SubComponenents/IndimnitesComponenet";
import ConfigurationPeriodiciteComponenent from "./SubComponenents/ConfigurationPeriodiciteComponenent";
import ConfigurationSalaireComponenet from "./SubComponenents/ConfigurationSalaireComponenet";

function CodificationMainComponenet() {
  const { userContextState, SetuserContextState } = useContext(userContext);

  return (
    <Box>
      <ConfigurationRegimeDeSalaireComponenent
        title={"Regime du salaire"}
        tableName={"TabPaie"}
        columnTemplate={regimSalaireTableColumns}
      />
      <ConfigurationServiceComponenet
        title={"Service"}
        tableName={"TabVert"}
        columnTemplate={serviceTableColumns}
      />
      <ConfigurationNationaliteComponenet
        title={"Nationalite"}
        tableName={"TabNatu"}
        columnTemplate={nationaliteTableColumns}
      />
      <ConfigurationEtatCivilComponenet
        title={"Etat civil"}
        tableName={"TabCivi"}
        columnTemplate={etatCivilTableColumns}
      />
      <ConfigurationSituationMilitaireComponenet
        title={"Situation militaire"}
        tableName={"TabMili"}
        columnTemplate={situationMilitaireTableColumns}
      />
      <ConfigurationCausesDeDepartsComponenet
        title={"Causes de departs"}
        tableName={"TabCauseDepart"}
        columnTemplate={causesDeDepartsTableColumns}
      />
      <ConfigurationFonctionComponenet
        title={"Fonction"}
        tableName={"TabCate"}
        columnTemplate={fonctionTableColumns}
      />
      <ConfigurationCategorieComponenet // A reglé
        title={"Categorie"}
        tableName={"TabCatB"}
        columnTemplate={categorieTableColumns}
      />
      <ConfigurationVilleComponenet
        title={"Ville"}
        tableName={"TabVille"}
        columnTemplate={villeTableColumns}
      />
      <ConfigurationMotifDeMissionComponenet
        title={"Motif de mission"}
        tableName={"TabMotif"}
        columnTemplate={motifDeMission}
      />
      <ConfigurationMoyenDeTransportComponenet
        title={"Moyen de transport"}
        tableName={"TabTrans"}
        columnTemplate={moyenDeTransportTableColumns}
      />
      <ConfigurationRegimesCalandrierComponenet // à reglé
        title={"Regimes par calandrier"}
        tableName={"TabCale"}
        columnTemplate={regimesCalandrierTableColumns}
      />

      <ConfigurationGroupesCalandrierComponenet // à reglé
        title={"Groupes par calandrier"}
        tableName={"TabBCale"}
        columnTemplate={groupesCalandrierTableColumns}
      />

      <ConfigurationStatutComponenent
        title={"Statut"}
        tableName={"TabStatut"}
        columnTemplate={statutTableColumns}
      />

      <ConfigurationCodeCNSSComponenet // à reglé
        title={"Code CNSS"}
        tableName={"TabCNSS"}
        columnTemplate={codeCnssTableColumns}
      />

      <ConfigurationTypesDeFormationsComponenet
        title={"Types de formations"}
        tableName={"FData.TabTypeForm"}
        columnTemplate={typesDeFormationsTableColumns}
      />

      <ConfigurationTypesEvaluationsComponenent
        title={"Types d'evaluations"}
        tableName={"TabTypeEval"}
        columnTemplate={typesDeFormationsTableColumns}
      />
      <ConfigurationTypesDePretsComponenet // à reglé
        title={"Types de prets"}
        tableName={"TabTypePret"}
        columnTemplate={typesDePretsTableColumns}
      />

      <ConfigurationCentresInteretsComponenet
        title={"Centres d'interets"}
        tableName={"TabSpecialite"}
        columnTemplate={centresDinteretsTableColumns}
      />

      <ConfigurationListDesBilletsComponenet // à reglé
        title={"Liste des billets par piece de monnaies"}
        tableName={"TabSpecialite"}
        columnTemplate={listeDesBilletsParPiecesDeMonnaiesTableColumns}
      />
      <IndimnitesComponenet />
      <ConfigurationPeriodiciteComponenent/>
      <ConfigurationSalaireComponenet/>
    </Box>
  );
}

export default CodificationMainComponenet;
