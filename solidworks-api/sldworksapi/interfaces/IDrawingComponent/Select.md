---
type: method
interface: IDrawingComponent
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append this selection to the selection list, false to replace the selection list with this selection
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
  - idrawingcomponent
  - drawing
  - component
  - append
  - boolean
  - data
  - components
  - view
  - vb
  - net
  - vba
---

# IDrawingComponent.Select

Selects the specified drawing component.

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

- `Append` (System.Boolean): True to append this selection to the selection list, false to replace the selection list with this selection
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the drawing component is selected, false if not

## Examples

- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)