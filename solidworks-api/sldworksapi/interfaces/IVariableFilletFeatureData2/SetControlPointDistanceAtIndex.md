---
type: method
interface: IVariableFilletFeatureData2
member: SetControlPointDistanceAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of control point whose radius to set
  -
    name: Dist2
    type: System.Double
    description: Distance 2 radius for the control point of this asymmetric fillet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetControlPointDistanceAtIndex
keywords:
  - setcontrolpointdistanceatindex
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - control
  - point
  - distance
  - index
  - int32
  - dist2
  - double
  - void
---

# IVariableFilletFeatureData2.SetControlPointDistanceAtIndex

Sets the Distance 2 radius at the specified control point for the asymmetric fillet.

## Signature

```csharp
void SetControlPointDistanceAtIndex( 
   System.Int32
Index
,
   System.Double
Dist2
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of control point whose radius to set
- `Dist2` (System.Double): Distance 2 radius for the control point of this asymmetric fillet

## Return Value

Unknown.

## Remarks

Call
IVariableFilletFeatureData2::SetControlPointRadiusAtIndex
to set the Distance 1 radius for the control point of this asymmetric fillet.

## See Also

- `IVariableFilletFeatureData2.GetControlPointDistanceAtIndex`