---
type: method
interface: ISketchSegment
member: GetSketchPathCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.GetSketchPaths
keywords:
  - getsketchpathcount
  - isketchsegment
  - sketch
  - segment
  - path
  - count
  - int32
---

# ISketchSegment.GetSketchPathCount

Gets the number of sketch paths for this sketch segment

## Signature

```csharp
System.Int32 GetSketchPathCount()
```
## Parameters

None.

## Return Value

Number of sketch paths

## Remarks

Call this method before calling
ISketchSegment::IGetSketchPaths
to get the size of the array for that method.

## See Also

- `ISketchSegment.GetSketchPaths`