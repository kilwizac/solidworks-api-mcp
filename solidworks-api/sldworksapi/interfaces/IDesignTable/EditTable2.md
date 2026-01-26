---
type: method
interface: IDesignTable
member: EditTable2
returns: System.Object
parameters:
  -
    name: NewWindow
    type: System.Boolean
    description: True to edit the design table in a separate window, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.IsActive
  - IDesignTable.Updatable
  - IDesignTable.UpdateFeature
  - IDesignTable.UpdateModel
keywords:
  - design
  - tables
  - see
  - also
  - idesigntable
  - edit
  - excel
  - edittable2
  - table
  - table2
  - new
  - window
  - boolean
  - object
  - disable
  - cell
  - drop
  - down
  - lists
  - vb
  - net
  - vba
---

# IDesignTable.EditTable2

Lets you edit the design table.

## Signature

```csharp
System.Object EditTable2( 
   System.Boolean
NewWindow
)
```
## Parameters

- `NewWindow` (System.Boolean): True to edit the design table in a separate window, false to not

## Return Value

Microsoft Excel worksheet for this design table

## Remarks

Do not use this method and
IDesignTable::Attach
in the same macro. Using IDesignTable::EditTable2 is preferable because it returns a pointer to the Microsoft Excel worksheet being operated on.
To avoid problems with zooming, set bNewWindow to True.
You can change the parameter values in the cells, add rows for additional configurations, or add columns to control additional parameters.
If the return value of this method is assigned to a variable, then it must be released before closing the design table with
IDesignTable::UpdateTable
(
type
, True).

## Examples

- Disable Cell Drop-down Lists in Design Table (C#) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_CSharp.htm)
- Disable Cell Drop-down Lists in Design Table (VB.NET) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VBNET.htm)
- Disable Cell Drop-down Lists in Design Table (VBA) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.IsActive`
- `IDesignTable.Updatable`
- `IDesignTable.UpdateFeature`
- `IDesignTable.UpdateModel`