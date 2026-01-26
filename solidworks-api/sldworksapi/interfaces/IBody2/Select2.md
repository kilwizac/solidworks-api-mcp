---
type: method
interface: IBody2
member: Select2
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the selection list, false replaces the selection list
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related: []
keywords:
  - select2
  - ibody2
  - body2
  - append
  - boolean
  - data
  - select
  - move
  - bodies
  - vb
  - net
  - vba
---

# IBody2.Select2

Selects this body and marks it.

## Signature

```csharp
System.Boolean Select2( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the selection list, false replaces the selection list
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the body was selected, false if not

## Examples

- Move Bodies (C#) (Move_Bodies_Example_CSharp.htm)
- Move Bodies (VB.NET) (Move_Bodies_Example_VBNET.htm)
- Move Bodies (VBA) (Move_Bodies_Example_VB.htm)