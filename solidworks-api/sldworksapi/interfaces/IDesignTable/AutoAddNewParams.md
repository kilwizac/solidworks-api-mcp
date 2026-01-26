---
type: property
interface: IDesignTable
member: AutoAddNewParams
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.AutoAddNewConfigs
  - IDesignTable.ColumnHidden
  - IDesignTable.GetColumnCount
  - IDesignTable.GetRowCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetTotalColumnCount
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
keywords:
  - autoaddnewparams
  - idesigntable
  - design
  - table
  - auto
  - add
  - new
  - params
  - boolean
readonly: null
---

# IDesignTable.AutoAddNewParams

Gets or sets whether or not to automatically add rows or columns to the design table when new parameters are added to the model.

## Signature

```csharp
System.Boolean AutoAddNewParams {get; set;}
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
- `IDesignTable.AutoAddNewConfigs`
- `IDesignTable.ColumnHidden`
- `IDesignTable.GetColumnCount`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetTotalColumnCount`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`