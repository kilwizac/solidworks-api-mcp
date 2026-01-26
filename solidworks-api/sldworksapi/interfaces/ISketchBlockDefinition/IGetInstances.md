---
type: method
interface: ISketchBlockDefinition
member: IGetInstances
returns: SketchBlockInstance
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of block instances
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetInstances
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - instances
  - igetinstances
  - sketch
  - block
  - definition
  - count
  - int32
  - instance
---

# ISketchBlockDefinition.IGetInstances

Gets all of the block instances of this block definition.

## Signature

```csharp
SketchBlockInstance IGetInstances( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of block instances

## Return Value

in-process, unmanaged C++: Pointer to an array of all of the block instances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetInstanceCount
before calling this method to get the value of Count.

## See Also

- `ISketchBlockDefinition.GetInstances`