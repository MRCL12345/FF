var msg = {
  title: "",
  text: "",
  content: "",
};
var value1 = "";

function v() {
  msg = {
    title: "Velocidad",
    text: "Introduce la distancia recorrida",
    content: {
      element: "input",
      attributes: {
        placeholder: "metros",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Velocidad",
      text: "Introduce el tiempo empleado",
      content: {
        element: "input",
        attributes: {
          placeholder: "segundos",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 / v2}m/s`);
    });
  });
}
function a() {
  msg = {
    title: "Aceleración",
    text: "Introduce la velocidad",
    content: {
      element: "input",
      attributes: {
        placeholder: "m/s",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Aceleración",
      text: "Introduce el tiempo empleado",
      content: {
        element: "input",
        attributes: {
          placeholder: "segundos",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 / v2}m/s²`);
    });
  });
}
function f() {
  msg = {
    title: "Fuerza",
    text: "Introduce la masa",
    content: {
      element: "input",
      attributes: {
        placeholder: "kg",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Fuerza",
      text: "Introduce la aceleración",
      content: {
        element: "input",
        attributes: {
          placeholder: "m/s²",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 * v2}N`);
    });
  });
}
function ec() {
  msg = {
    title: "Enegía Cinética",
    text: "Introduce la velocidad",
    content: {
      element: "input",
      attributes: {
        placeholder: "m/s",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Energía Cinética",
      text: "Introduce la masa",
      content: {
        element: "input",
        attributes: {
          placeholder: "kg",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${Math.pow(value1, 2) * v2}J`);
    });
  });
}
function ep() {
  msg = {
    title: "Energía Potencial",
    text: "Introduce la masa",
    content: {
      element: "input",
      attributes: {
        placeholder: "kg",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Energía Potencial",
      text: "Introduce la altura",
      content: {
        element: "input",
        attributes: {
          placeholder: "m",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 * v2 * 9.81}J`);
    });
  });
}
function tmec() {
  msg = {
    title: "Trabajo Mecánico",
    text: "Introduce la Fuerza",
    content: {
      element: "input",
      attributes: {
        placeholder: "N",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Trabajo Mecánico",
      text: "Introduce la distancia",
      content: {
        element: "input",
        attributes: {
          placeholder: "m",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 * v2}J`);
    });
  });
}
function p() {
  msg = {
    title: "Potencia",
    text: "Introduce el Trabajo Mecánico",
    content: {
      element: "input",
      attributes: {
        placeholder: "J",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Potencia",
      text: "Introduce el tiempo",
      content: {
        element: "input",
        attributes: {
          placeholder: "s",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 * v2}Whatts`);
    });
  });
}
function emec() {
  msg = {
    title: "Energía Mecánica",
    text: "Introduce la Energía Cinética",
    content: {
      element: "input",
      attributes: {
        placeholder: "J",
      },
    },
  };
  swal(msg).then((v) => {
    value1 = v;
    msg = {
      title: "Energía Mecánica",
      text: "Introduce la Energía Potencial",
      content: {
        element: "input",
        attributes: {
          placeholder: "J",
        },
      },
    };
    swal(msg).then((v2) => {
      swal(`${value1 + v2}J`);
    });
  });
}
