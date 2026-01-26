---
type: method
interface: IFillSurfaceFeatureData
member: GetConstraintCurves
returns: System.Object
parameters:
  -
    name: TypeArr
    type: System.Object
    description: Array of types of entities used to constrain the surface as defined by swSelectType_e ; valid entities are: edges (swSelEDGES) sketches (swSelSKETCHES)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetConstraintCurvesCount
  - IFillSurfaceFeatureData.IGetConstraintCurves
  - IFillSurfaceFeatureData.ISetConstraintCurves
  - IFillSurfaceFeatureData.SetConstraintCurves
keywords:
  - getconstraintcurves
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - constraint
  - curves
  - type
  - arr
  - object
---

# IFillSurfaceFeatureData.GetConstraintCurves

Gets the constraint curves for this fill-surface feature.

## Signature

```csharp
System.Object GetConstraintCurves( 
   out System.Object
TypeArr
)
```
## Parameters

- `TypeArr` (System.Object): Array of types of entities used to constrain the surface as defined by swSelectType_e ; valid entities are: edges (swSelEDGES) sketches (swSelSKETCHES)

## Return Value

Array of entities used as constraint curves

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetConstraintCurvesCount`
- `IFillSurfaceFeatureData.IGetConstraintCurves`
- `IFillSurfaceFeatureData.ISetConstraintCurves`
- `IFillSurfaceFeatureData.SetConstraintCurves`