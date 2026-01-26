---
type: property
interface: IDesignTable
member: Warn
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.UpdateTable
keywords:
  - warn
  - idesigntable
  - design
  - table
  - boolean
readonly: null
---

# IDesignTable.Warn

Gets or sets whether to display a warning when invalid information is encountered in the design table when updating the design table.

## Signature

```csharp
System.Boolean Warn {get; set;}
```
## Parameters

None.

## Return Value

True to display a warning when invalid information is encountered in the design table when updating the design table, false to not EndOLEPropertyRow

## Remarks

If information is entered to the left of the parameters row or below the configuration name column, then the SOLIDWORKS Design software warns of an invalid value and stops processing the design table without completing the remaining rows and columns. If this happens, some configurations do not update properly.
You must call:
IDesignTable::EditFeature
before setting this property.
IDesignTable::UpdateFeature
after setting this property.

## See Also

- `IDesignTable.UpdateTable`