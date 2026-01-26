---
type: method
interface: IModeler
member: GetToleranceValue
returns: System.Double
parameters:
  -
    name: ToleranceID
    type: System.Int32
    description: Type of tolerance that you want to obtain as defined by swTolerances_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.SetToleranceValue
  - IModeler.UnsetTolerances
keywords:
  - tolerance
  - gettolerancevalue
  - imodeler
  - modeler
  - value
  - id
  - int32
  - double
  - length
  - spline
  - elliptical
  - edge
  - vba
  - parameters
  - points
  - curve
---

# IModeler.GetToleranceValue

Gets the current tolerance value of the given tolerance ID.

## Signature

```csharp
System.Double GetToleranceValue( 
   System.Int32
ToleranceID
)
```
## Parameters

- `ToleranceID` (System.Int32): Type of tolerance that you want to obtain as defined by swTolerances_e

## Return Value

Tolerance value for the specified ToleranceID

## Examples

- Get Length of Spline or Elliptical Edge (VBA) (Get_Length_of_Spline_or_Elliptical_Edge_Example_VB.htm)
- Get Parameters and Spline Points for Curve (VBA) (Get_Parameters_and_Spline_Points_for_Curve_Example_VB.htm)
- Get Tolerance (VBA) (Get_Tolerance_Example_VB.htm)

## See Also

- `IModeler.SetToleranceValue`
- `IModeler.UnsetTolerances`