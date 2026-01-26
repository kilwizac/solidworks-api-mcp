---
type: method
interface: IFillSurfaceFeatureData
member: SetConstraintCurves
returns: void
parameters:
  -
    name: ConstraintVar
    type: System.Object
    description: Array of entities to use to constrain the surface; valid entities are: Edges Sketches
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetConstraintCurves
  - IFillSurfaceFeatureData.GetConstraintCurvesCount
  - IFillSurfaceFeatureData.IGetConstraintCurves
  - IFillSurfaceFeatureData.ISetConstraintCurves
keywords:
  - setconstraintcurves
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - constraint
  - curves
  - var
  - object
  - void
---

# IFillSurfaceFeatureData.SetConstraintCurves

Sets the entities for the constraint curves.

## Signature

```csharp
void SetConstraintCurves( 
   System.Object
ConstraintVar
)
```
## Parameters

- `ConstraintVar` (System.Object): Array of entities to use to constrain the surface; valid entities are: Edges Sketches

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetConstraintCurves`
- `IFillSurfaceFeatureData.GetConstraintCurvesCount`
- `IFillSurfaceFeatureData.IGetConstraintCurves`
- `IFillSurfaceFeatureData.ISetConstraintCurves`