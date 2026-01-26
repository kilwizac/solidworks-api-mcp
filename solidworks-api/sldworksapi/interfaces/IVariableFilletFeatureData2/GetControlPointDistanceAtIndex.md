---
type: method
interface: IVariableFilletFeatureData2
member: GetControlPointDistanceAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of control point for which to get the radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.SetControlPointDistanceAtIndex
keywords:
  - getcontrolpointdistanceatindex
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
  - double
---

# IVariableFilletFeatureData2.GetControlPointDistanceAtIndex

Gets the Distance 2 radius at the specified control point for the asymmetric fillet.

## Signature

```csharp
System.Double GetControlPointDistanceAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of control point for which to get the radius

## Return Value

Value of the Distance 2 radius at the specified control point for the asymmetric fillet

## Remarks

Call
IVariableFilletFeatureData2::GetControlPointRadiusAtIndex
to get the Distance 1 radius of the control point for this asymmetric fillet.

## See Also

- `IVariableFilletFeatureData2.SetControlPointDistanceAtIndex`