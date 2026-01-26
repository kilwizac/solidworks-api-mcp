---
type: method
interface: ISketchPoint
member: GetRelationsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.GetRelations
keywords:
  - relations
  - getrelationscount
  - isketchpoint
  - sketch
  - point
  - count
  - int32
---

# ISketchPoint.GetRelationsCount

Gets the number of sketch relations for this sketch point.

## Signature

```csharp
System.Int32 GetRelationsCount()
```
## Parameters

None.

## Return Value

Number of sketch relations for this sketch point

## Remarks

Call this method before calling
ISketchPoint::IGetRelations
to get the size of the array for that method.

## See Also

- `ISketchPoint.GetRelations`