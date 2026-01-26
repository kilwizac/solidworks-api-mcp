---
type: method
interface: ISketch
member: IGetSketchPaths
returns: SketchPath
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch paths
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPaths
keywords:
  - sketch
  - see
  - also
  - isketch
  - paths
  - igetsketchpaths
  - count
  - int32
  - path
---

# ISketch.IGetSketchPaths

Gets the sketch paths in this sketch.

## Signature

```csharp
SketchPath IGetSketchPaths( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch paths

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch paths VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketch::GetSketchPathCount
before calling this method to get the value of Count.

## See Also

- `ISketch.GetSketchPaths`