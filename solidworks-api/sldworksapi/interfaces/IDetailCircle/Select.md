---
type: method
interface: IDetailCircle
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the detail circle to the selection list, false replaces the selection list with this detail circle
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
  - idetailcircle
  - detail
  - circle
  - append
  - boolean
  - data
  - create
  - view
  - vb
  - net
  - vba
---

# IDetailCircle.Select

Selects the detail circle.

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

- `Append` (System.Boolean): True appends the detail circle to the selection list, false replaces the selection list with this detail circle
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the detail circle is selected, false if not

## Examples

- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)