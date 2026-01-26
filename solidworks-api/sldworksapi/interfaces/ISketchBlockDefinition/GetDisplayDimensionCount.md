---
type: method
interface: ISketchBlockDefinition
member: GetDisplayDimensionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - sketches
related:
  - ISketchBlockDefinition.GetDisplayDimensions
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - display
  - dimensions
  - idisplaydimension
  - dimension
  - idimension
  - getdisplaydimensioncount
  - sketch
  - block
  - definition
  - count
  - int32
  - instance
  - part
  - assembly
  - vba
---

# ISketchBlockDefinition.GetDisplayDimensionCount

Gets the number of display dimensions in this block definition.

## Signature

```csharp
System.Int32 GetDisplayDimensionCount()
```
## Parameters

None.

## Return Value

Number of display dimensions

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetDisplayDimensions
to get the size of the array for that method.

## Examples

- Get Block Instance in Part or Assembly (VBA) (Get_Block_Instance_in_Part_or_Assembly_Example_VB.htm)

## See Also

- `ISketchBlockDefinition.GetDisplayDimensions`