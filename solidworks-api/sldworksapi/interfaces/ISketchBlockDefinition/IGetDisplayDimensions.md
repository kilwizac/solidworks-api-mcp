---
type: method
interface: ISketchBlockDefinition
member: IGetDisplayDimensions
returns: DisplayDimension
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of display dimensions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - sketches
related:
  - ISketchBlockDefinition.GetDisplayDimensions
keywords:
  - dimension
  - see
  - also
  - idimension
  - blocks
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - display
  - dimensions
  - idisplaydimension
  - igetdisplaydimensions
  - sketch
  - block
  - definition
  - count
  - int32
---

# ISketchBlockDefinition.IGetDisplayDimensions

Gets the display dimensions in this block definition.

## Signature

```csharp
DisplayDimension IGetDisplayDimensions( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of display dimensions

## Return Value

in-process, unmanaged C++: Pointer to an array of display dimensions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetDisplayDimensionCount
before calling this method to get the value of Count.

## See Also

- `ISketchBlockDefinition.GetDisplayDimensions`