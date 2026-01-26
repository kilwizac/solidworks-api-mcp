---
type: method
interface: IDesignTable
member: UpdateTable
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of update as defined in swDesignTableUpdateOptions_e
  -
    name: Close
    type: System.Boolean
    description: True to close the design table, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.EditFeature
  - IDesignTable.EditTable2
  - IDesignTable.IsActive
  - IDesignTable.UpdateFeature
  - IDesignTable.UpdateModel
  - IDesignTable.Warn
keywords:
  - updatetable
  - idesigntable
  - design
  - table
  - update
  - type
  - int32
  - close
  - boolean
  - add
  - row
  - vba
  - disable
  - cell
  - drop
  - down
  - lists
  - vb
  - net
---

# IDesignTable.UpdateTable

Applies the changes made to the design table to the model.

## Signature

```csharp
System.Boolean UpdateTable( 
   System.Int32
Type
,
   System.Boolean
Close
)
```
## Parameters

- `Type` (System.Int32): Type of update as defined in swDesignTableUpdateOptions_e
- `Close` (System.Boolean): True to close the design table, false to not

## Return Value

True if the changes made to the design table update the model, false if not

## Remarks

IDesignTable::UpdateModel
is a simplified version of this method.

## Examples

- Add Row to Design Table (VBA) (Add_Row_to_Design_Table_Example_VB.htm)
- Disable Cell Drop-down Lists in Design Table (C#) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_CSharp.htm)
- Disable Cell Drop-down Lists in Design Table (VB.NET) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VBNET.htm)
- Disable Cell Drop-down Lists in Design Table (VBA) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.EditFeature`
- `IDesignTable.EditTable2`
- `IDesignTable.IsActive`
- `IDesignTable.UpdateFeature`
- `IDesignTable.UpdateModel`
- `IDesignTable.Warn`