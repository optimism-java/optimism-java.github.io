/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  hildrSidebar: [
    "hildr-docs/index",
    {
      type: "category",
      collapsed: true,
      label: "Run a Hildr Node",
      link: {
        type: "doc",
        id: "hildr-docs/run-a-node/index",
      },
      items: [
        "hildr-docs/run-a-node/use_jar",
        "hildr-docs/run-a-node/use_docker",
        "hildr-docs/run-a-node/cmd_line_options",
      ],
    },
  ],
  opBesuSidebar: [
    "op-besu-docs/index",
    {
      type: "category",
      collapsed: true,
      label: "Run a Op-Besu node",
      link: {
        type: "doc",
        id: "op-besu-docs/run-a-node/index",
      },
      items: [
        "op-besu-docs/run-a-node/use_binaries",
        "op-besu-docs/run-a-node/use_docker",
        "op-besu-docs/run-a-node/cmd_line_options",
      ],
    },
  ],
  superProofSidebar: [
    "super-proof-docs/index",
    {
      type: "category",
      collapsed: true,
      label: "Introduction",
      link: {
        type: "doc",
        id: "super-proof-docs/introduction/index",
      },
      items: [
        "super-proof-docs/introduction/features",
        "super-proof-docs/introduction/installation",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "run a node",
      link: {
        type: "doc",
        id: "super-proof-docs/run-a-node/index",
      },
      items: [
        "super-proof-docs/run-a-node/use_docker",
      ],
    },
  ],
};

module.exports = sidebars;
