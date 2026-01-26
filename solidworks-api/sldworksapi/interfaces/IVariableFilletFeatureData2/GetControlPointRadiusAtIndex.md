---
type: method
interface: IVariableFilletFeatureData2
member: GetControlPointRadiusAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the control point
  -
    name: Location
    type: System.Double
    description: Location of the control point
  -
    name: PEdge
    type: Edge
    description: Edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetControlPointConicRhoOrRadiusAtIndex
  - IVariableFilletFeatureData2.SetControlPointRadiusAtIndex
keywords:
  - getcontrolpointradiusatindex
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
  - edge
---

# IVariableFilletFeatureData2.GetControlPointRadiusAtIndex

Gets the radius at the specified control point.

## Signature

```csharp
System.Double GetControlPointRadiusAtIndex( 
   System.Int32
Index
,
   out System.Double
Location
,
   out Edge
PEdge
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the control point
- `Location` (System.Double): Location of the control point
- `PEdge` (Edge): Edge

## Return Value

Value of the radius at the specified control point for the symmetric fillet; value of the Distance 1 radius at the specified control point for the asymmetric fillet (see Remarks )

## Remarks

Call
IVariableFilletFeatureData2::GetControlPointsCount
before calling this method.
Call
IVariableFilletFeatureData2::GetControlPointDistanceAtIndex
to get the Distance 2 radius for the control point of the asymmetric fillet.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetControlPointConicRhoOrRadiusAtIndex`
- `IVariableFilletFeatureData2.SetControlPointRadiusAtIndex`