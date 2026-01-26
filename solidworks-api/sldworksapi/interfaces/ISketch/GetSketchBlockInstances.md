---
type: method
interface: ISketch
member: GetSketchBlockInstances
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchBlockInstanceCount
  - ISketch.IGetSketchBlockInstances
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
  - getsketchblockinstances
  - object
---

# ISketch.GetSketchBlockInstances

Gets the block instances in this sketch (i.e., the sketch under which the block instances are displayed in the FeatureManager design tree).

## Signature

```csharp
System.Object GetSketchBlockInstances()
```
## Parameters

None.

## Return Value

Array containing the block instances in this sketch

## Remarks

See
Block Definitions and Block Instances
for details.

## See Also

- `ISketch.GetSketchBlockInstanceCount`
- `ISketch.IGetSketchBlockInstances`
- `ISketchBlockDefinition`
- `ISketchBlockInstance`