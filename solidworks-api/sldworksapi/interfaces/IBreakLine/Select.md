---
type: method
interface: IBreakLine
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the break line to the selection list, false replaces the selection list with this break line
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - selections
related: []
keywords:
  - select
  - ibreakline
  - break
  - line
  - append
  - boolean
  - data
  - create
  - view
  - net
  - vba
---

# IBreakLine.Select

Selects the break line and marks it.

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

- `Append` (System.Boolean): True appends the break line to the selection list, false replaces the selection list with this break line
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the selection is successful, false if not

## Examples

- Create Break View (C#) (Create_Broken_View_Example_CSharp.htm)
- Create Break View (V.NET) (Create_Broken_View_Example_VBNET.htm)
- Create Break View (VBA) (Create_Broken_View_Example_VB.htm)