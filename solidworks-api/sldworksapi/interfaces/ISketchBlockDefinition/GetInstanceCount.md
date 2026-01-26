---
type: method
interface: ISketchBlockDefinition
member: GetInstanceCount
returns: System.Int32
parameters: []
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
  - getinstancecount
  - sketch
  - block
  - definition
  - instance
  - count
  - int32
  - any
  - document
  - vba
  - drawing
---

# ISketchBlockDefinition.GetInstanceCount

Gets the number of block instances of this block definition.

## Signature

```csharp
System.Int32 GetInstanceCount()
```
## Parameters

None.

## Return Value

Number of block instances

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetInstances
to get the size of the array for that method.

## Examples

- Get and Set Blocks in Any Document (VBA) (Get_and_Set_Blocks_Data_in_Any_Document_Example_VB.htm)
- Get Blocks in Drawing (VBA) (Get_Blocks_in_Drawing_Example_VB.htm)

## See Also

- `ISketchBlockDefinition.GetInstances`