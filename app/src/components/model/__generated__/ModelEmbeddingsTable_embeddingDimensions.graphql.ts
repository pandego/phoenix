/**
 * @generated SignedSource<<a36b6f084455b0213512c2a170984980>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModelEmbeddingsTable_embeddingDimensions$data = {
  readonly model: {
    readonly embeddingDimensions: {
      readonly edges: ReadonlyArray<{
        readonly embedding: {
          readonly euclideanDistance: number | null;
          readonly id: String;
          readonly name: string;
        };
      }>;
    };
  };
  readonly " $fragmentType": "ModelEmbeddingsTable_embeddingDimensions";
};
export type ModelEmbeddingsTable_embeddingDimensions$key = {
  readonly " $data"?: ModelEmbeddingsTable_embeddingDimensions$data;
  readonly " $fragmentSpreads": FragmentRefs<"ModelEmbeddingsTable_embeddingDimensions">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "model",
  "embeddingDimensions"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./ModelEmbeddingsTableEmbeddingDimensionsQuery.graphql')
    }
  },
  "name": "ModelEmbeddingsTable_embeddingDimensions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Model",
      "kind": "LinkedField",
      "name": "model",
      "plural": false,
      "selections": [
        {
          "alias": "embeddingDimensions",
          "args": null,
          "concreteType": "EmbeddingDimensionConnection",
          "kind": "LinkedField",
          "name": "__ModelEmbeddingsTable_embeddingDimensions_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "EmbeddingDimensionEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": "embedding",
                  "args": null,
                  "concreteType": "EmbeddingDimension",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": "euclideanDistance",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "metric",
                          "value": "euclideanDistance"
                        }
                      ],
                      "kind": "ScalarField",
                      "name": "driftMetric",
                      "storageKey": "driftMetric(metric:\"euclideanDistance\")"
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "EmbeddingDimension",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "1a1c6fbb5bc6349b18351e7db1d296b6";

export default node;
