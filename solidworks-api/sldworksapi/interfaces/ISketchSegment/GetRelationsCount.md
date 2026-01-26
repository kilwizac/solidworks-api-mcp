---
type: method
interface: ISketchSegment
member: GetRelationsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.GetRelations
keywords:
  - relations
  - getrelationscount
  - isketchsegment
  - sketch
  - segment
  - count
  - int32
---

# ISketchSegment.GetRelationsCount

Gets the number of sketch relations for this sketch segment.

## Signature

```csharp
System.Int32 GetRelationsCount()
```
## Parameters

None.

## Return Value

Number of sketch relations for this sketch segment

## Remarks

Call this method before calling
ISketchSegment::IGetRelations
to get the size of the array for that method.

## See Also

- `ISketchSegment.GetRelations`