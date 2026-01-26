---
type: method
interface: IModelDocExtension
member: InsertChainDimensions
returns: System.Object
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of entities, e.g., edges, vertices, circles, and midpoints with which to chain dimensions (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related: []
keywords:
  - chain
  - dimensions
  - insertchaindimensions
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - entities
  - object
---

# IModelDocExtension.InsertChainDimensions

Chains dimensions for the specified entities in this drawing or sketch.

## Signature

```csharp
System.Object InsertChainDimensions( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of entities, e.g., edges, vertices, circles, and midpoints with which to chain dimensions (see Remarks )

## Return Value

Array of IDisplayDimension s

## Remarks

The first element in Entities is the starting entity which is used to dimension the second element. The second element is used to dimension the third element, and so on. If Entities is Nothing or null, then pre-selected entities are used to create the chain dimensions.
The array of chain dimensions returned contains one fewer element than the array of Entities.
For more information, see the
SOLIDWORKS help > Detailing and Drawings > Drawings > Dimensions in Drawings > Chain Dimensions
topic.