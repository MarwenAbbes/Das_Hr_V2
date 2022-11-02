import {
  ArrowDropDown,
  Check,
  CheckBox,
  Edit,
  Save,
} from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";

import CustomAlert from "../../../../../Components/Shared/CustomAlert";
import { userContext } from "../../../../../Contexts/UserContext";
import { EditTable, GetTable } from "../DataController";

function ConfigurationSalaireComponenet() {
    const { userContextState, SetuserContextState } = useContext(userContext);
  const ClientDB = userContextState.company;
  let selectedFields = "";

  const [alertMessageClose, setAlertMessageClose] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    msg: "",
    type: "",
  });
  const [collapsed, setCollepsed] = useState(false);
  const [EditMode, setEditMode] = useState(false);

  const [PériodicitéLable, SetPériodicitéLable] = useState("");
  const [
    Par_calcul_automatique_à_partir_des_absences_reprises_constatées,
    SetPar_calcul_automatique_à_partir_des_absences_reprises_constatées,
  ] = useState(false);

  const [Bilan_absences, SetBilan_absences] = useState({
    Au_jour_le_jour: true,
    Hebdomadaire: false,
    Pour_la_période: false,
  });

  const [
    Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup,
    SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup,
  ] = useState({
    HeuresParJour: {
      selected: true,
      NomberDeJour: 0,
    },
    Tiré_du_calendrier_de_lentreprise: false,
  });

  const [
    Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH,
    SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH,
  ] = useState({
    HeuresParJour: {
      selected: true,
      NomberDeJour: 0,
    },
    Tiré_du_calendrier_de_lentreprise: false,
  });

  const [
    Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supM,
    SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_supM,
  ] = useState({
    HeuresParJour: {
      selected: true,
      NomberDeJour: 0,
    },
    Tiré_du_calendrier_de_lentreprise: false,
  });

  const [ComPaieTable, SetComPaieTable] = useState();

  const [lesTranches, SetLesTranches] = useState({
    Tranche1: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche2: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche3: {
      Nom: "",
      De: "",
      à: "µ",
      Taux: "",
    },
  });
  const [lesTranchesH, SetLesTranchesH] = useState({
    Tranche1: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche2: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche3: {
      Nom: "",
      De: "",
      à: "µ",
      Taux: "",
    },
  });

  const [lesTranchesM, SetLesTranchesM] = useState({
    Tranche1: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche2: {
      Nom: "",
      De: "",
      à: "",
      Taux: "",
    },
    Tranche3: {
      Nom: "",
      De: "",
      à: "µ",
      Taux: "",
    },
  });
  const [DecompteSelector, setDecompteSelector] = useState("");

  const [ModeDeCalcule, setModeDeCalcul] = useState({
    1: true,
    2: false,
  });

  const [Liquidation, SetLiquidation] = useState({
    Sans_report: true,
    ReportH_Sup: false,
    Contre_congé: false,
    Flexible: false,
  });

  const [
    Heures_Supplémentaires_Spéciales,
    SetHeures_Supplémentaires_Spéciales,
  ] = useState(false);

  const SelectBilan_absences = (name) => {
    if (name === "Au_jour_le_jour") {
      if (
        Bilan_absences.Au_jour_le_jour == false &&
        ((Bilan_absences.Hebdomadaire === true &&
          Bilan_absences.Pour_la_période === false) ||
          (Bilan_absences.Hebdomadaire === false &&
            Bilan_absences.Pour_la_période === true))
      ) {
        SetBilan_absences({
          Au_jour_le_jour: true,
          Hebdomadaire: false,
          Pour_la_période: false,
        });
      }
    } else if (name === "Hebdomadaire") {
      if (
        Bilan_absences.Hebdomadaire == false &&
        ((Bilan_absences.Au_jour_le_jour === true &&
          Bilan_absences.Pour_la_période === false) ||
          (Bilan_absences.Au_jour_le_jour === false &&
            Bilan_absences.Pour_la_période === true))
      ) {
        SetBilan_absences({
          Au_jour_le_jour: false,
          Hebdomadaire: true,
          Pour_la_période: false,
        });
      }
    } else if (name === "Pour_la_période") {
      if (
        Bilan_absences.Pour_la_période == false &&
        ((Bilan_absences.Au_jour_le_jour === true &&
          Bilan_absences.Hebdomadaire === false) ||
          (Bilan_absences.Au_jour_le_jour === false &&
            Bilan_absences.Hebdomadaire === true))
      ) {
        setDecompteSelector("M");
        SetBilan_absences({
          Au_jour_le_jour: false,
          Hebdomadaire: false,
          Pour_la_période: true,
        });
      }
    }
  };

  const Bilan_absences_AujourleJour_nb_heurs_selection = (name) => {
    if (name === "selectHeurs") {
      if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.HeuresParJour
          .selected == false &&
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.Tiré_du_calendrier_de_lentreprise ==
          true
      ) {
        SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup({
          HeuresParJour: {
            selected: true,
            NomberDeJour:
              Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup
                .HeuresParJour.NomberDeJour,
          },
          Tiré_du_calendrier_de_lentreprise: false,
        });
      }
    } else if (name === "TireDuCalandrier") {
      if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.HeuresParJour
          .selected == true &&
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.Tiré_du_calendrier_de_lentreprise ==
          false
      ) {
        SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup({
          HeuresParJour: {
            selected: false,
            NomberDeJour:
              Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup
                .HeuresParJour.NomberDeJour,
          },
          Tiré_du_calendrier_de_lentreprise: true,
        });
      }
    }
  };

  const EditTranches = (TrancheName, att, value) => {
    if (TrancheName === "Tranche1") {
      if (att === "Nom") {
        SetLesTranches({
          Tranche1: {
            Nom: value,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: value,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.De,
            Taux: value,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche2") {
      if (att === "Nom") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: value,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "De") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: value,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: value,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: value,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche3") {
      if (att === "Nom") {
        SetLesTranches({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: value,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    } else if (att === "De") {
      SetLesTranches({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: value,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "à") {
      SetLesTranches({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "Taux") {
      SetLesTranches({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: value,
        },
      });
    }
  };
  const EditTranchesH = (TrancheName, att, value) => {
    if (TrancheName === "Tranche1") {
      if (att === "Nom") {
        SetLesTranchesH({
          Tranche1: {
            Nom: value,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: value,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.De,
            Taux: value,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche2") {
      if (att === "Nom") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: value,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "De") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: value,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: value,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: value,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche3") {
      if (att === "Nom") {
        SetLesTranchesH({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: value,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    } else if (att === "De") {
      SetLesTranchesH({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: value,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "à") {
      SetLesTranchesH({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "Taux") {
      SetLesTranchesH({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: value,
        },
      });
    }
  };
  const EditTranchesM = (TrancheName, att, value) => {
    if (TrancheName === "Tranche1") {
      if (att === "Nom") {
        SetLesTranchesM({
          Tranche1: {
            Nom: value,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: value,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.De,
            Taux: value,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche2") {
      if (att === "Nom") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: value,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "De") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: value,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "à") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: value,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      } else if (att === "Taux") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: value,
          },
          Tranche3: {
            Nom: lesTranches.Tranche3.Nom,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    }

    if (TrancheName === "Tranche3") {
      if (att === "Nom") {
        SetLesTranchesM({
          Tranche1: {
            Nom: lesTranches.Tranche1.Nom,
            De: lesTranches.Tranche1.De,
            à: lesTranches.Tranche1.à,
            Taux: lesTranches.Tranche1.Taux,
          },
          Tranche2: {
            Nom: lesTranches.Tranche2.Nom,
            De: lesTranches.Tranche2.De,
            à: lesTranches.Tranche2.à,
            Taux: lesTranches.Tranche2.Taux,
          },
          Tranche3: {
            Nom: value,
            De: lesTranches.Tranche3.De,
            à: "µ",
            Taux: lesTranches.Tranche3.Taux,
          },
        });
      }
    } else if (att === "De") {
      SetLesTranchesM({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: value,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "à") {
      SetLesTranchesM({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: lesTranches.Tranche3.Taux,
        },
      });
    } else if (att === "Taux") {
      SetLesTranchesM({
        Tranche1: {
          Nom: lesTranches.Tranche1.Nom,
          De: lesTranches.Tranche1.De,
          à: lesTranches.Tranche1.à,
          Taux: lesTranches.Tranche1.Taux,
        },
        Tranche2: {
          Nom: lesTranches.Tranche2.Nom,
          De: lesTranches.Tranche2.De,
          à: lesTranches.Tranche2.à,
          Taux: lesTranches.Tranche2.Taux,
        },
        Tranche3: {
          Nom: lesTranches.Tranche3.Nom,
          De: lesTranches.Tranche3.De,
          à: "µ",
          Taux: value,
        },
      });
    }
  };

  const getData = async () => {
    GetTable(ClientDB, "ComPaie")
      .then((respond) => {
        SetComPaieTable(respond[0]);
        console.log(ComPaieTable);

        SetPar_calcul_automatique_à_partir_des_absences_reprises_constatées(
          ComPaieTable["HeurePresenceAuto"] === "V"
        );
        SetBilan_absences({
          Au_jour_le_jour: ComPaieTable["Liquidation"] === "J",
          Hebdomadaire: ComPaieTable["Liquidation"] === "H",
          Pour_la_période: ComPaieTable["Liquidation"] === "M",
        });

        SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH({
          HeuresParJour: {
            selected: ComPaieTable["Regime"] === "R",
            NomberDeJour: ComPaieTable["NbHeureRegimeH"],
          },
          Tiré_du_calendrier_de_lentreprise: ComPaieTable["Regime"] === "H",
        });

        SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup({
          HeuresParJour: {
            selected: ComPaieTable["Regime"] === "R",
            NomberDeJour: ComPaieTable["NbHeureRegimeJ"],
          },
          Tiré_du_calendrier_de_lentreprise: ComPaieTable["Regime"] === "J",
        });

        if (ComPaieTable["TypeSalaire"] === "C") {
          SetPériodicitéLable("Mois calendaire");
        } else if (ComPaieTable["TypeSalaire"] === "J") {
          SetPériodicitéLable("Mois spécifique");
        } else if (ComPaieTable["TypeSalaire"] === "F") {
          SetPériodicitéLable("Date Fin période spécifique");
        }

        SetLesTranches({
          Tranche1: {
            Nom: ComPaieTable["NomHeureSup1"],
            De: "0",
            à: ComPaieTable["NbHeuresSup1J"],
            Taux: ComPaieTable["TauxHeureSup1J"],
          },
          Tranche2: {
            Nom: ComPaieTable["NomHeureSup2"],
            De: ComPaieTable["NbHeuresSup1J"],
            à: ComPaieTable["NbHeuresSup2J"],
            Taux: ComPaieTable["TauxHeureSup2J"],
          },
          Tranche3: {
            Nom: ComPaieTable["NomHeureSup3"],
            De: ComPaieTable["NbHeuresSup2J"],
            à: "µ",
            Taux: ComPaieTable["TauxHeureSup3J"],
          },
        });

        SetLesTranchesH({
          Tranche1: {
            Nom: ComPaieTable["NomHeureSup1"],
            De: "0",
            à: ComPaieTable["NbHeuresSup1H"],
            Taux: ComPaieTable["TauxHeureSup1H"],
          },
          Tranche2: {
            Nom: ComPaieTable["NomHeureSup2"],
            De: ComPaieTable["NbHeuresSup1H"],
            à: ComPaieTable["NbHeuresSup2H"],
            Taux: ComPaieTable["TauxHeureSup2H"],
          },
          Tranche3: {
            Nom: ComPaieTable["NomHeureSup3"],
            De: ComPaieTable["NbHeuresSup2H"],
            à: "µ",
            Taux: ComPaieTable["TauxHeureSup3H"],
          },
        });

        SetLesTranchesM({
          Tranche1: {
            Nom: ComPaieTable["NomHeureSup1"],
            De: "0",
            à: ComPaieTable["NbHeuresSup1M"],
            Taux: ComPaieTable["TauxHeureSup1M"],
          },
          Tranche2: {
            Nom: ComPaieTable["NomHeureSup2"],
            De: ComPaieTable["NbHeuresSup1M"],
            à: ComPaieTable["NbHeuresSup2M"],
            Taux: ComPaieTable["TauxHeureSup2M"],
          },
          Tranche3: {
            Nom: ComPaieTable["NomHeureSup3"],
            De: ComPaieTable["NbHeuresSup2M"],
            à: "µ",
            Taux: ComPaieTable["TauxHeureSup3M"],
          },
        });

        SetLiquidation({
          Sans_report: ComPaieTable["ModeHeureFlexible"] === "F",
          ReportH_Sup: ComPaieTable["ModeHeureFlexible"] === "X",
          Contre_congé: ComPaieTable["ModeHeureFlexible"] === "C",
          Flexible: ComPaieTable["ModeHeureFlexible"] === "V",
        });

        SetHeures_Supplémentaires_Spéciales(ComPaieTable["StatutTHHN"] === "V");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveData = async () => {
    if (Par_calcul_automatique_à_partir_des_absences_reprises_constatées)
      selectedFields = `HeurePresenceAuto="V",`;
    else selectedFields = `HeurePresenceAuto="F",`;

    if (Bilan_absences.Au_jour_le_jour) {
      selectedFields = selectedFields + `Liquidation ="J",`;
      if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.HeuresParJour
          .selected
      ) {
        selectedFields =
          selectedFields +
          `Regime="R",NbHeureRegimeJ=${Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.HeuresParJour.NomberDeJour},`;
      } else if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.Tiré_du_calendrier_de_lentreprise
      ) {
        selectedFields += `Regime="M",`;
      }
      // selectedFields =
      //   selectedFields +
      //   `NomHeureSup1="${lesTranches.Tranche1.Nom}",NbHeuresSup1J=${lesTranches.Tranche1.à},TauxHeureSup1J=${lesTranches.Tranche1.Taux},NomHeureSup2="${lesTranches.Tranche2.Nom}",NbHeuresSup2J=${lesTranches.Tranche2.à},TauxHeureSup2J=${lesTranches.Tranche2.Taux},NomHeureSup3="${lesTranches.Tranche3.Nom}",NbHeuresSup2J=${lesTranches.Tranche3.De},TauxHeureSup2J=${lesTranches.Tranche1.Taux},`;
    } else if (Bilan_absences.Hebdomadaire) {
      selectedFields = selectedFields + `Liquidation ="H",`;
      console.log(Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH);
      if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH.HeuresParJour
          .selected
      ) {
        selectedFields += `Regime="R",NbHeureRegimeH= ${Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH.HeuresParJour.NomberDeJour},`;
      } else if (
        Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH.Tiré_du_calendrier_de_lentreprise
      ) {
        selectedFields += `Regime="M",`;
      }
      selectedFields =
        selectedFields +
        `NomHeureSup1="${lesTranchesH.Tranche1.Nom}",NbHeuresSup1H=${lesTranchesH.Tranche1.à},TauxHeureSup1H=${lesTranchesH.Tranche1.Taux},NomHeureSup2="${lesTranchesH.Tranche2.Nom}",NbHeuresSup2H=${lesTranchesH.Tranche2.à},TauxHeureSup2H=${lesTranchesH.Tranche2.Taux},NomHeureSup3="${lesTranchesH.Tranche3.Nom}",`;
      //selectedFields += `NbHeuresSup2H=${lesTranchesH.Tranche3.De},TauxHeureSup2H=${lesTranchesH.Tranche1.Taux}`;
    } else if (Bilan_absences.Pour_la_période) {
      selectedFields = selectedFields + `Liquidation ="M",`;
      if (ModeDeCalcule[0]) {
        selectedFields = selectedFields + `ModeCalculPeriode="J",`;
      } else if (ModeDeCalcule[1]) {
        selectedFields = selectedFields + `ModeCalculPeriode="H",`;
      }
      // selectedFields =
      //   selectedFields +
      //   `NomHeureSup1="${lesTranchesM.Tranche1.Nom}",NbHeuresSup1M=${lesTranchesM.Tranche1.à},TauxHeureSup1M=${lesTranchesM.Tranche1.Taux},NomHeureSup2="${lesTranchesM.Tranche2.Nom}",NbHeuresSup2M=${lesTranchesM.Tranche2.à},TauxHeureSup2M=${lesTranchesM.Tranche2.Taux},NomHeureSup3="${lesTranchesM.Tranche3.Nom}",NbHeuresSup2M=${lesTranchesM.Tranche3.De},TauxHeureSup2M=${lesTranchesM.Tranche1.Taux},`;
    }

    if (Liquidation.Sans_report) selectedFields += `ModeHeureFlexible="F",`;
    else if (Liquidation.ReportH_Sup)
      selectedFields += `ModeHeureFlexible="X",`;
    else if (Liquidation.Contre_congé)
      selectedFields += `ModeHeureFlexible="C",`;
    else if (Liquidation.Flexible) selectedFields += `ModeHeureFlexible="V",`;

    if (Heures_Supplémentaires_Spéciales) selectedFields += `StatutTHHN="V"`;
    else selectedFields += `StatutTHHN="F"`;

    EditTable(ClientDB, "ComPaie", selectedFields, `Code = "A"`)
      .then(
        setAlertMessage({
          msg: "L'enregistrement a été mis à jour avec succès",
          type: "success",
        }),
        setAlertMessageClose(true)
      )
      .catch((err) => {
        setAlertMessage({
          msg: "Échec de la mis à jour de l'enregistrement",
          type: "error",
        });
        setAlertMessageClose(true);
        console.log(err);
      });
  };

  return (
    <Box
      flex={6}
      sx={{
        margin: "10px",
        height: "500",
      }}
    >
      <Card
        sx={{
          margin: "10px",
          height: "500",
        }}
      >
        <CardHeader
          title={"Salaire"}
          action={
            <IconButton
              aria-label="openCard"
              onClick={() => {
                getData();
                setCollepsed(!collapsed);
              }}
            >
              <ArrowDropDown />
            </IconButton>
          }
        />

        <Collapse in={collapsed}>
          <CardContent>
            <Box>
              {!EditMode && (
                <Edit
                  sx={{
                    marginRight: "10px",
                    color: "#42a5f5",
                    cursor: "pointer",
                    float: "right",
                    height: "28px",
                    width: "28px",
                  }}
                  onClick={() => {
                    setEditMode(true);
                  }}
                />
              )}

              {EditMode && (
                <Save
                  sx={{
                    marginRight: "10px",
                    color: "green",
                    cursor: "pointer",
                    float: "right",
                    height: "28px",
                    width: "28px",
                  }}
                  onClick={() => {
                    saveData();
                    setEditMode(false);
                  }}
                />
              )}
            </Box>

            <FormControl
              component="fieldset"
              variant="standard"
              disabled={!EditMode}
            >
              <FormLabel component="legend">
                {`Périodicité : ${PériodicitéLable} `}
              </FormLabel>
            </FormControl>
          </CardContent>
          <Divider />
          <CardContent>
            <FormControl
              component="fieldset"
              variant="standard"
              disabled={!EditMode}
            >
              <FormLabel component="legend">{`Base calcule `}</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        Par_calcul_automatique_à_partir_des_absences_reprises_constatées
                      }
                      onChange={() =>
                        SetPar_calcul_automatique_à_partir_des_absences_reprises_constatées(
                          !Par_calcul_automatique_à_partir_des_absences_reprises_constatées
                        )
                      }
                      name="parAnnee"
                    />
                  }
                  label="Par calcul automatique à partir des 'absences/reprises constatées' "
                />
              </FormGroup>
            </FormControl>
          </CardContent>
          <Divider />
          <CardContent>
            <FormControl
              component="fieldset"
              variant="standard"
              disabled={!EditMode}
            >
              <FormLabel component="legend">
                Bilan absences / heures hors horaire normal
              </FormLabel>
              <FormGroup sx={{ display: "flex" }}>
                <span>
                  <FormControlLabel
                    sx={{ float: "left" }}
                    control={
                      <Switch
                        checked={Bilan_absences.Au_jour_le_jour}
                        onChange={() => SelectBilan_absences("Au_jour_le_jour")}
                        name="Au_jour_le_jour"
                      />
                    }
                    label="Au jour le jour "
                  />
                  <FormControlLabel
                    sx={{ float: "left" }}
                    control={
                      <Switch
                        checked={Bilan_absences.Hebdomadaire}
                        onChange={() => SelectBilan_absences("Hebdomadaire")}
                        name="Hebdomadaire"
                      />
                    }
                    label="Hebdomadaire"
                  />
                  <FormControlLabel
                    sx={{ float: "left" }}
                    control={
                      <Switch
                        checked={Bilan_absences.Pour_la_période}
                        onChange={() => SelectBilan_absences("Pour_la_période")}
                        name="Pour_la_période"
                      />
                    }
                    label="Pour la période"
                  />
                </span>

                {/* Au jour le jour Panel */}
                {Bilan_absences.Au_jour_le_jour && EditMode && (
                  <FormGroup>
                    <Typography>
                      Le Nb d'heures de réference pour le calcul des heures sup
                      est :
                    </Typography>
                    <span>
                      <TextField
                        sx={{ width: "115px" }}
                        label="Nombre de jours"
                        value={
                          Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup
                            .HeuresParJour.NomberDeJour
                        }
                        onChange={(event) => {
                          SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup(
                            {
                              HeuresParJour: {
                                selected:
                                  Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup
                                    .HeuresParJour.selected,
                                NomberDeJour: event.target.value,
                              },
                              Tiré_du_calendrier_de_lentreprise:
                                Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.Tiré_du_calendrier_de_lentreprise,
                            }
                          );
                        }}
                        size="small"
                      ></TextField>
                      <FormControlLabel
                        sx={{ float: "left" }}
                        control={
                          <Checkbox
                            checked={
                              Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup
                                .HeuresParJour.selected
                            }
                            onChange={() =>
                              Bilan_absences_AujourleJour_nb_heurs_selection(
                                "selectHeurs"
                              )
                            }
                          />
                        }
                        label="Heures Par Jour"
                      />
                    </span>
                    <FormControlLabel
                      sx={{ float: "left" }}
                      control={
                        <Checkbox
                          checked={
                            Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_sup.Tiré_du_calendrier_de_lentreprise
                          }
                          onChange={() =>
                            Bilan_absences_AujourleJour_nb_heurs_selection(
                              "TireDuCalandrier"
                            )
                          }
                        />
                      }
                      label="Tiré du calendrier de l'entreprise"
                    />
                    <Box sx={{ display: "flex", marginTop: "0.5em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 1:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranches.Tranche1.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche1", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranches.Tranche1.De}
                        size="small"
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranches.Tranche1.à}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche1", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranches.Tranche1.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche1", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>

                    {/* ******************* */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 2:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranches.Tranche2.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche2", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranches.Tranche2.De}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche2", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranches.Tranche2.à}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche2", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranches.Tranche2.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche2", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                    {/* ************** */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 3:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranches.Tranche3.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche3", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranches.Tranche3.De}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche3", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranches.Tranche3.à}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche3", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranches.Tranche3.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranches("Tranche3", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                  </FormGroup>
                )}

                {/* Hedbomadaire */}
                {Bilan_absences.Hebdomadaire && EditMode && (
                  <FormGroup>
                    <Typography>
                      Le Nb d'heures de réference pour le calcul des heures sup
                      est :
                    </Typography>
                    <span>
                      <TextField
                        sx={{ width: "115px" }}
                        label="Nombre de jours"
                        value={
                          Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH
                            .HeuresParJour.NomberDeJour
                        }
                        onChange={(event) => {
                          SetLe_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH(
                            {
                              HeuresParJour: {
                                selected:
                                  Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH
                                    .HeuresParJour.selected,
                                NomberDeJour: event.target.value,
                              },
                              Tiré_du_calendrier_de_lentreprise:
                                Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH.Tiré_du_calendrier_de_lentreprise,
                            }
                          );
                        }}
                        size="small"
                      ></TextField>
                      <FormControlLabel
                        sx={{ float: "left" }}
                        control={
                          <Checkbox
                            checked={
                              Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH
                                .HeuresParJour.selected
                            }
                            onChange={() =>
                              Bilan_absences_AujourleJour_nb_heurs_selection(
                                "selectHeurs"
                              )
                            }
                          />
                        }
                        label="Heures Par Jour"
                      />
                    </span>
                    <FormControlLabel
                      sx={{ float: "left" }}
                      control={
                        <Checkbox
                          checked={
                            Le_Nb_dheures_de_réference_pour_le_calcul_des_heures_supH.Tiré_du_calendrier_de_lentreprise
                          }
                          onChange={() =>
                            Bilan_absences_AujourleJour_nb_heurs_selection(
                              "TireDuCalandrier"
                            )
                          }
                        />
                      }
                      label="Tiré du calendrier de l'entreprise"
                    />
                    <Box sx={{ display: "flex", marginTop: "0.5em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 1:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesH.Tranche1.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche1", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesH.Tranche1.De}
                        size="small"
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesH.Tranche1.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche1", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesH.Tranche1.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche1", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>

                    {/* ******************* */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 2:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesH.Tranche2.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche2", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesH.Tranche2.De}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche2", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesH.Tranche2.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche2", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesH.Tranche2.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche2", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                    {/* ************** */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 3:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesH.Tranche3.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche3", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesH.Tranche3.De}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche3", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesH.Tranche3.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche3", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesH.Tranche3.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesH("Tranche3", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                  </FormGroup>
                )}

                {/* Pour la Période */}
                {Bilan_absences.Pour_la_période && EditMode && (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ModeDeCalcule[1]}
                          onChange={() =>
                            setModeDeCalcul({
                              1: true,
                              2: false,
                            })
                          }
                        />
                      }
                      label="Nombre de jours ouvrables x Limite"
                    />

                    <FormControlLabel
                      sx={{ float: "left" }}
                      control={
                        <Checkbox
                          checked={ModeDeCalcule[2]}
                          onChange={() =>
                            setModeDeCalcul({
                              1: false,
                              2: true,
                            })
                          }
                        />
                      }
                      label="Limite"
                    />
                    <Box sx={{ display: "flex", marginTop: "0.5em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 1:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesM.Tranche1.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche1", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesM.Tranche1.De}
                        size="small"
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesM.Tranche1.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche1", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesM.Tranche1.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche1", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>

                    {/* ******************* */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 2:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesM.Tranche2.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche2", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesM.Tranche2.De}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche2", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesM.Tranche2.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche2", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesM.Tranche2.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche2", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                    {/* ************** */}
                    <Box sx={{ display: "flex", marginTop: "0.9em" }}>
                      <Typography sx={{ float: "left", marginTop: "0.3em" }}>
                        Tranche 3:
                      </Typography>
                      <TextField
                        sx={{
                          width: "130px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Nom"
                        value={lesTranchesM.Tranche3.Nom}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche3", "Nom", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="De"
                        value={lesTranchesM.Tranche3.De}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche3", "De", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="à"
                        value={lesTranchesM.Tranche3.à}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche3", "à", event.target.value);
                        }}
                      ></TextField>
                      <TextField
                        sx={{
                          width: "115px",
                          float: "left",
                          marginLeft: "1em",
                        }}
                        label="Taux"
                        value={lesTranchesM.Tranche3.Taux}
                        size="small"
                        onChange={(event) => {
                          EditTranchesM("Tranche3", "Taux", event.target.value);
                        }}
                      ></TextField>
                    </Box>
                  </FormGroup>
                )}
              </FormGroup>
            </FormControl>
          </CardContent>
          <CardContent>
            <FormControl
              component="fieldset"
              variant="standard"
              disabled={!EditMode}
            >
              <FormLabel component="legend">Liquidation</FormLabel>
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  sx={{ float: "left" }}
                  control={
                    <Checkbox
                      checked={Liquidation.Sans_report}
                      onChange={() =>
                        SetLiquidation({
                          Sans_report: true,
                          ReportH_Sup: false,
                          Contre_congé: false,
                          Flexible: false,
                        })
                      }
                      name="Pour_la_période"
                    />
                  }
                  label="Sans report"
                />
                <FormControlLabel
                  sx={{ float: "left" }}
                  control={
                    <Checkbox
                      checked={Liquidation.ReportH_Sup}
                      onChange={() =>
                        SetLiquidation({
                          Sans_report: false,
                          ReportH_Sup: true,
                          Contre_congé: false,
                          Flexible: false,
                        })
                      }
                      name="Pour_la_période"
                    />
                  }
                  label="Report H. Sup."
                />
                <FormControlLabel
                  sx={{ float: "left" }}
                  control={
                    <Checkbox
                      checked={Liquidation.Contre_congé}
                      onChange={() =>
                        SetLiquidation({
                          Sans_report: false,
                          ReportH_Sup: false,
                          Contre_congé: true,
                          Flexible: false,
                        })
                      }
                      name="Pour_la_période"
                    />
                  }
                  label="Contre congé"
                />
                <FormControlLabel
                  sx={{ float: "left" }}
                  control={
                    <Checkbox
                      checked={Liquidation.Flexible}
                      onChange={() =>
                        SetLiquidation({
                          Sans_report: false,
                          ReportH_Sup: false,
                          Contre_congé: false,
                          Flexible: true,
                        })
                      }
                      name="Pour_la_période"
                    />
                  }
                  label="Flexible"
                />
              </Box>
            </FormControl>
          </CardContent>

          <CardContent>
            <FormControl
              component="fieldset"
              variant="standard"
              disabled={!EditMode}
            >
              <FormLabel component="legend">
                Heures Supplémentaires Spéciales
              </FormLabel>

              <FormControlLabel
                sx={{ float: "left" }}
                control={
                  <Checkbox
                    checked={Heures_Supplémentaires_Spéciales}
                    onChange={() =>
                      SetHeures_Supplémentaires_Spéciales(
                        !Heures_Supplémentaires_Spéciales
                      )
                    }
                    name="Pour_la_période"
                  />
                }
                label="Les heures supplémentaires spéciales ne compensent pas les absences "
              />
            </FormControl>
          </CardContent>
        </Collapse>
        <CustomAlert
          msg={alertMessage.msg}
          severity={alertMessage.type}
          open={alertMessageClose}
          closeFunction={setAlertMessageClose}
        />
      </Card>
    </Box>
  );
}
export default ConfigurationSalaireComponenet;
