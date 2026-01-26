---
type: method
interface: IView
member: SetKeepLinkedToBOM
returns: System.Boolean
parameters:
  -
    name: Linked
    type: System.Boolean
    description: True to set a drawing view to the specified BOM or weldment cut-list table, false to not
  -
    name: Name
    type: System.String
    description: Name of the BOM or weldment cut-list table to which to link this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.IInsertBomTable
  - IView.InsertBomTable
  - IView.InsertBomTable2
  - IView.InsertWeldmentTable
keywords:
  - bill
  - materials
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - table
  - weldment
  - cut
  - list
  - tables
  - lists
  - iweldmentcutlistfeature
  - setkeeplinkedtobom
  - keep
  - linked
  - bom
  - boolean
  - name
  - string
---

# IView.SetKeepLinkedToBOM

Sets whether this drawing view is linked to the specified BOM or weldment cut-list table.

## Signature

```csharp
System.Boolean SetKeepLinkedToBOM( 
   System.Boolean
Linked
,
   System.String
Name
)
```
## Parameters

- `Linked` (System.Boolean): True to set a drawing view to the specified BOM or weldment cut-list table, false to not
- `Name` (System.String): Name of the BOM or weldment cut-list table to which to link this drawing view

## Return Value

True if the BOM or weldment cut-list table is linked to this drawing view, false if not

## Remarks

This method returns false if the string specified for Name does not correspond to the name of a BOM or weldment cut-list table feature created for the model in this drawing view.

## See Also

- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.IInsertBomTable`
- `IView.InsertBomTable`
- `IView.InsertBomTable2`
- `IView.InsertWeldmentTable`