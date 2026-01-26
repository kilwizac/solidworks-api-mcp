---
type: method
interface: IChamferFeatureData2
member: GetIsFlipped
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Edge, face, or loop
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChamferFeatureData2.SetIsFlipped
keywords:
  - getisflipped
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - flipped
  - entity
  - object
  - boolean
  - edge
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.GetIsFlipped

Gets whether the chamfer feature is flipped.

## Signature

```csharp
System.Boolean GetIsFlipped( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Edge, face, or loop

## Return Value

True if the chamfer feature is flipped, false if not

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.SetIsFlipped`