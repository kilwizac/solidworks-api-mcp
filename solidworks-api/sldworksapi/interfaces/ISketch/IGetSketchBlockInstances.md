---
type: method
interface: ISketch
member: IGetSketchBlockInstances
returns: SketchBlockInstance
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of block instances in this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchBlockInstances
  - ISketchBlockDefinition
  - ISketchBlockInstance
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - instances
  - sketch
  - isketch
  - block
  - igetsketchblockinstances
  - count
  - int32
  - instance
---

# ISketch.IGetSketchBlockInstances

Gets the block instances in this sketch (i.e., the sketch under which the block instances are displayed in the FeatureManager design tree).

## Signature

```csharp
SketchBlockInstance IGetSketchBlockInstances( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of block instances in this sketch

## Return Value

in-process, unmanaged C++: Pointer to an array containing the block instances in this sketch VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketch::GetSketchBlockInstanceCount
before calling this method to get the number of block instances in this sketch.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketch.GetSketchBlockInstances`
- `ISketchBlockDefinition`
- `ISketchBlockInstance`