---
type: property
interface: IDesignTable
member: Updatable
returns: System.Boolean
parameters: []
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
  - IDesignTable.UpdateTable
keywords:
  - updatable
  - idesigntable
  - design
  - table
  - boolean
  - whether
  - edits
  - update
  - vba
readonly: null
---

# IDesignTable.Updatable

Gets or sets whether edits to the model update the design table.

## Signature

```csharp
System.Boolean Updatable {get; set;}
```
## Parameters

None.

## Return Value

True if edits to the model update the design table, false if not

## Remarks

You must call:
IDesignTable::EditFeature
before setting this property.
IDesignTable::UpdateFeature
after setting this property.

## Examples

- Get or Set Whether Edits Update Design Table (VBA) (Get_or_Set_Whether_Edits_Update_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.EditFeature`
- `IDesignTable.EditTable2`
- `IDesignTable.IsActive`
- `IDesignTable.UpdateFeature`
- `IDesignTable.UpdateModel`
- `IDesignTable.UpdateTable`