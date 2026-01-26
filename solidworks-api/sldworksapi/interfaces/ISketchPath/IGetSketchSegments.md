---
type: method
interface: ISketchPath
member: IGetSketchSegments
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetSketchSegments
keywords:
  - igetsketchsegments
  - isketchpath
  - sketch
  - path
  - segments
  - count
  - int32
  - segment
---

# ISketchPath.IGetSketchSegments

Gets the sketch segments in this sketch path.

## Signature

```csharp
SketchSegment IGetSketchSegments( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchPath::GetSketchSegmentCount
to get the value of Count.

## See Also

- `ISketchPath.GetSketchSegments`