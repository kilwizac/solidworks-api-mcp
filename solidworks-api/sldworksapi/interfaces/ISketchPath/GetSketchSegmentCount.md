---
type: method
interface: ISketchPath
member: GetSketchSegmentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetSketchSegments
keywords:
  - getsketchsegmentcount
  - isketchpath
  - sketch
  - path
  - segment
  - count
  - int32
---

# ISketchPath.GetSketchSegmentCount

Gets the number of sketch segments in this sketch path.

## Signature

```csharp
System.Int32 GetSketchSegmentCount()
```
## Parameters

None.

## Return Value

Number of sketch segments

## Remarks

Call this method before calling
ISketch::IGetSketchSegments
to get the size of the array for that method.

## Examples

- ISketchPath (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPath)

## See Also

- `ISketchPath.GetSketchSegments`