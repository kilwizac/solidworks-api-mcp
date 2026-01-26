---
type: method
interface: IExtrudeFeatureData2
member: SetDepth
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: Depth
    type: System.Double
    description: Depth of the extrusion
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetDepth
keywords:
  - end
  - conditions
  - setdepth
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - depth
  - forward
  - boolean
  - double
  - void
  - access
  - selections
  - vba
---

# IExtrudeFeatureData2.SetDepth

Sets the depth of the feature in the forward or reverse direction.

## Signature

```csharp
void SetDepth( 
   System.Boolean
Forward
,
   System.Double
Depth
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `Depth` (System.Double): Depth of the extrusion

## Return Value

Unknown.

## Remarks

Use this method to specify the surface offset distance when
end condition
is swEndCondOffsetFromSurface.

## Examples

- Access Selections (VBA) (Access_Selections_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2.GetDepth`