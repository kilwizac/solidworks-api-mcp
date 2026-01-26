---
type: method
interface: IDimension
member: ISetReferencePoints
returns: void
parameters:
  -
    name: PointsCount
    type: System.Int32
    description: Number of reference points for this dimension
  -
    name: RefPoints
    type: MathPoint
    description: Pointer to the IMathPoint object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetReferencePointsCount
  - IDimension.IGetReferencePoints
  - IDimension.ReferencePoints
keywords:
  - isetreferencepoints
  - idimension
  - dimension
  - reference
  - points
  - count
  - int32
  - ref
  - math
  - point
  - void
---

# IDimension.ISetReferencePoints

Sets the reference points for this dimension.

## Signature

```csharp
void ISetReferencePoints( 
   System.Int32
PointsCount
,
   ref MathPoint
RefPoints
)
```
## Parameters

- `PointsCount` (System.Int32): Number of reference points for this dimension
- `RefPoints` (MathPoint): Pointer to the IMathPoint object

## Return Value

Unknown.

## See Also

- `IDimension.GetReferencePointsCount`
- `IDimension.IGetReferencePoints`
- `IDimension.ReferencePoints`