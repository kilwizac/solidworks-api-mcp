---
type: property
interface: IDimension
member: ReferencePoints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetReferencePointsCount
  - IDimension.IGetReferencePoints
  - IDimension.ISetReferencePoints
keywords:
  - referencepoints
  - idimension
  - dimension
  - reference
  - points
  - object
readonly: null
---

# IDimension.ReferencePoints

Gets or sets the reference points for this dimension.

## Signature

```csharp
System.Object ReferencePoints {get; set;}
```
## Parameters

None.

## Return Value

Reference points (see Remarks )

## Remarks

The returned objects, the reference points, are actually
IMathPoint
objects.
Reference point 1 and reference point 2 are valid for linear dimensions. Reference point 3 is the vertex for angular dimensions. This property does not distinguish between linear or angular dimensions or other types of dimensions. Three reference points are always returned.
NOTE:
When regenerating a
macro feature
, this property gets and sets the reference points of a display dimension (
IDisplayDimension
object).
In all other cases, this property gets and sets the reference points of a dimension (
IDimension
object).

## See Also

- `IDimension.GetReferencePointsCount`
- `IDimension.IGetReferencePoints`
- `IDimension.ISetReferencePoints`