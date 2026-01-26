---
type: method
interface: IExtrudeFeatureData2
member: GetDepth
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward feature direction, false for reverse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.SetDepth
keywords:
  - getdepth
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - depth
  - forward
  - boolean
  - double
---

# IExtrudeFeatureData2.GetDepth

Gets the depth of the extrusion feature in the forward or reverse direction.

## Signature

```csharp
System.Double GetDepth( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward feature direction, false for reverse

## Return Value

Depth of the extrusion

## See Also

- `IExtrudeFeatureData2.SetDepth`