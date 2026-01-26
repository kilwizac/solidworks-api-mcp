---
type: method
interface: IDesignTable
member: UpdateModel
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
  - IDesignTable.LinkToFile
  - IDesignTable.Updatable
  - IDesignTable.UpdateFeature
keywords:
  - updatemodel
  - idesigntable
  - design
  - table
  - update
  - model
  - boolean
---

# IDesignTable.UpdateModel

Applies the edits to the design table to the model.

## Signature

```csharp
System.Boolean UpdateModel()
```
## Parameters

None.

## Return Value

True if the model is updated successfully, false if it was not

## Remarks

This method is a simplified version of
IDesignTable::UpdateTable
.

## See Also

- `IDesignTable.EditFeature`
- `IDesignTable.EditTable2`
- `IDesignTable.IsActive`
- `IDesignTable.LinkToFile`
- `IDesignTable.Updatable`
- `IDesignTable.UpdateFeature`