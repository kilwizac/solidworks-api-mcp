---
type: method
interface: ISketchBlockInstance
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the detail circle to the selection list, false replaces the selection list with this block instance
  -
    name: Data
    type: SelectData
    description: ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related: []
keywords:
  - select
  - block
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - sketch
  - instance
  - append
  - boolean
  - data
  - definitions
  - part
  - assembly
  - vba
---

# ISketchBlockInstance.Select

Selects and marks the block instance.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the detail circle to the selection list, false replaces the selection list with this block instance
- `Data` (SelectData): ISelectData object

## Return Value

True if the block instance is selected, false if not

## Examples

- Get Block Definitions in Part or Assembly (VBA) (Get_Block_Definitions_in_Part_or_Assembly_Example_VB.htm)