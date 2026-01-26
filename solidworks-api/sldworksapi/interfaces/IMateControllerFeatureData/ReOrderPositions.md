---
type: method
interface: IMateControllerFeatureData
member: ReOrderPositions
returns: void
parameters:
  -
    name: Positions
    type: System.Object
    description: Array of re-ordered mate positions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reorderpositions
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - re
  - order
  - positions
  - object
  - void
---

# IMateControllerFeatureData.ReOrderPositions

Reorders the mate positions in this mate controller.

## Signature

```csharp
void ReOrderPositions( 
   System.Object
Positions
)
```
## Parameters

- `Positions` (System.Object): Array of re-ordered mate positions

## Return Value

Unknown.

## Remarks

Before calling this method, use
IMateControllerFeatureData::GetPositions
to get the existing mate positions.