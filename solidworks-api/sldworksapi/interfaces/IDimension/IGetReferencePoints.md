---
type: method
interface: IDimension
member: IGetReferencePoints
returns: MathPoint
parameters:
  -
    name: PointsCount
    type: System.Int32
    description: Number of reference points for this dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.ISetReferencePoints
  - IDimension.ReferencePoints
keywords:
  - igetreferencepoints
  - idimension
  - dimension
  - reference
  - points
  - count
  - int32
  - math
  - point
---

# IDimension.IGetReferencePoints

Gets the reference points for this dimension.

## Signature

```csharp
MathPoint IGetReferencePoints( 
   System.Int32
PointsCount
)
```
## Parameters

- `PointsCount` (System.Int32): Number of reference points for this dimension

## Return Value

in-process, unmanaged C++: Pointer to the IMathPoint object VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDimension::IGetReferencePointsCount
before calling this method to determine the size of the array.

## See Also

- `IDimension.ISetReferencePoints`
- `IDimension.ReferencePoints`