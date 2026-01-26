---
type: method
interface: IVariableFilletFeatureData2
member: SetDistance
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Vertex at which to set the Distance 2 radius
  -
    name: Dist2
    type: System.Double
    description: Distance 2 radius at the vertex specified by PFilletItem
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetDistance
keywords:
  - setdistance
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - distance
  - item
  - object
  - dist2
  - double
  - void
---

# IVariableFilletFeatureData2.SetDistance

Sets the Distance 2 radius for this asymmetric fillet.

## Signature

```csharp
void SetDistance( 
   System.Object
PFilletItem
,
   System.Double
Dist2
)
```
## Parameters

- `PFilletItem` (System.Object): Vertex at which to set the Distance 2 radius
- `Dist2` (System.Double): Distance 2 radius at the vertex specified by PFilletItem

## Return Value

Unknown.

## Remarks

Call
IVariableFilletFeatureData2::SetRadius
to set the Distance 1 radius at the vertex.

## See Also

- `IVariableFilletFeatureData2.GetDistance`