---
type: method
interface: ISketchBlockDefinition
member: GetArcCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetArcs
keywords:
  - arcs
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - getarccount
  - sketch
  - block
  - definition
  - arc
  - count
  - int32
  - instance
  - part
  - assembly
  - vba
---

# ISketchBlockDefinition.GetArcCount

Gets the number of arcs in this block definition.

## Signature

```csharp
System.Int32 GetArcCount()
```
## Parameters

None.

## Return Value

Number of arcs

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetArcs
to get the size of the array for that method.

## Examples

- Get Block Instance in Part or Assembly (VBA) (Get_Block_Instance_in_Part_or_Assembly_Example_VB.htm)

## See Also

- `ISketchBlockDefinition.GetArcs`