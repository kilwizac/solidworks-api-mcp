---
type: property
interface: IDesignTable
member: AutoAddNewConfigs
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.AutoAddNewParams
  - IDesignTable.ColumnHidden
  - IDesignTable.GetColumnCount
  - IDesignTable.GetRowCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetTotalColumnCount
  - IDesignTable.GetTotalRowCount
  - IDesignTable.GetVisibleColumnCount
  - IDesignTable.GetVisibleLeftColumnNumber
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
keywords:
  - autoaddnewconfigs
  - idesigntable
  - design
  - table
  - auto
  - add
  - new
  - configs
  - boolean
readonly: null
---

# IDesignTable.AutoAddNewConfigs

Gets or sets whether to automatically add rows or columns to the design table when new configurations are added to the model.

## Signature

```csharp
System.Boolean AutoAddNewConfigs {get; set;}
```
## Parameters

None.

## Return Value

True to automatically add rows or columns, false to not

## Remarks

You must call:
IDesignTable::EditFeature
before setting this property.
IDesignTable::UpdateFeature
after setting this property.

## See Also

- `IDesignTable.AddRow`
- `IDesignTable.AutoAddNewParams`
- `IDesignTable.ColumnHidden`
- `IDesignTable.GetColumnCount`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetTotalColumnCount`
- `IDesignTable.GetTotalRowCount`
- `IDesignTable.GetVisibleColumnCount`
- `IDesignTable.GetVisibleLeftColumnNumber`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`