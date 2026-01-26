---
type: method
interface: IFillSurfaceFeatureData
member: IGetConstraintCurves
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities used to constrain the surface
  -
    name: TypeArr
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of types of entities used to constrain the surface as defined by swSelectType_e ; valid entities are: edges (swSelEDGES) sketches (swSelSKETCHES) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetConstraintCurves
  - IFillSurfaceFeatureData.ISetConstraintCurves
  - IFillSurfaceFeatureData.SetConstraintCurves
keywords:
  - igetconstraintcurves
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - constraint
  - curves
  - count
  - int32
  - type
  - arr
  - object
---

# IFillSurfaceFeatureData.IGetConstraintCurves

Gets the constraint curves for this fill-surface feature.

## Signature

```csharp
System.Object IGetConstraintCurves( 
   System.Int32
Count
,
   out System.Int32
TypeArr
)
```
## Parameters

- `Count` (System.Int32): Number of entities used to constrain the surface
- `TypeArr` (System.Int32): in-process, unmanaged C++: Pointer to an array of types of entities used to constrain the surface as defined by swSelectType_e ; valid entities are: edges (swSelEDGES) sketches (swSelSKETCHES) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of entities used as constraint curves VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IFillSurfaceFeatureData::GetConstraintCurvesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetConstraintCurves`
- `IFillSurfaceFeatureData.ISetConstraintCurves`
- `IFillSurfaceFeatureData.SetConstraintCurves`