---
type: method
interface: ISketch
member: GetSketchBlockInstanceCount
returns: System.Int32
parameters: []
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
  - getsketchblockinstancecount
  - instance
  - count
  - int32
---

# ISketch.GetSketchBlockInstanceCount

Gets the number of block instances in this sketch (i.e., the sketch under which the block instances are displayed in the FeatureManager design tree).

## Signature

```csharp
System.Int32 GetSketchBlockInstanceCount()
```
## Parameters

None.

## Return Value

Number of block instances in this sketch

## Remarks

Call this method before calling
ISketch::IGetSketchBlockInstances
to get the size of the array for that method.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketch.GetSketchBlockInstances`
- `ISketchBlockDefinition`
- `ISketchBlockInstance`