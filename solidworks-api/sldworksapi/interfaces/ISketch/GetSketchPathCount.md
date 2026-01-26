---
type: method
interface: ISketch
member: GetSketchPathCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPaths
  - ISketchPath
keywords:
  - sketch
  - see
  - also
  - isketch
  - paths
  - getsketchpathcount
  - path
  - count
  - int32
---

# ISketch.GetSketchPathCount

Gets the number of sketch paths in this sketch.

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
ISketch::IGetSketchPaths
to get the sketch paths in this sketch.

## See Also

- `ISketch.GetSketchPaths`
- `ISketchPath`