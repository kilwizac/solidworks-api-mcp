---
type: method
interface: ISketchBlockDefinition
member: GetLineCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetLines
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - lines
  - getlinecount
  - sketch
  - block
  - definition
  - line
  - count
  - int32
  - instance
  - part
  - assembly
  - vba
---

# ISketchBlockDefinition.GetLineCount

Gets the number of lines in this block definition.

## Signature

```csharp
System.Int32 GetLineCount()
```
## Parameters

None.

## Return Value

Number of lines

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetLines
to get the size of the array for that method.

## Examples

- Get Block Instance in Part or Assembly (VBA) (Get_Block_Instance_in_Part_or_Assembly_Example_VB.htm)

## See Also

- `ISketchBlockDefinition.GetLines`