---
type: method
interface: IVariableFilletFeatureData2
member: SetControlPointRadiusAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of control point whose radius to set
  -
    name: Location
    type: System.Double
    description: Percent distance between the edge start vertex and the edge end vertex
  -
    name: Radius
    type: System.Double
    description: Value of the radius for the control point of this symmetric fillet; Distance 1 radius for the control point of this asymmetric fillet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetControlPointRadiusAtIndex
  - IVariableFilletFeatureData2.GetControlPointsCount
  - IVariableFilletFeatureData2.SetControlPointConicRhoOrRadiusAtIndex
keywords:
  - setcontrolpointradiusatindex
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - control
  - point
  - radius
  - index
  - int32
  - location
  - double
  - void
---

# IVariableFilletFeatureData2.SetControlPointRadiusAtIndex

Sets the radius at the specified control point.

## Signature

```csharp
void SetControlPointRadiusAtIndex( 
   System.Int32
Index
,
   System.Double
Location
,
   System.Double
Radius
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of control point whose radius to set
- `Location` (System.Double): Percent distance between the edge start vertex and the edge end vertex
- `Radius` (System.Double): Value of the radius for the control point of this symmetric fillet; Distance 1 radius for the control point of this asymmetric fillet

## Return Value

Unknown.

## Remarks

Call
IVariableFilletFeatureData2::SetControlPointDistanceAtIndex
to set the Distance 2 radius for the control point of this asymmetric fillet.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetControlPointRadiusAtIndex`
- `IVariableFilletFeatureData2.GetControlPointsCount`
- `IVariableFilletFeatureData2.SetControlPointConicRhoOrRadiusAtIndex`