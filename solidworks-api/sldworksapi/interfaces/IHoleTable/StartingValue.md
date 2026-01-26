---
type: property
interface: IHoleTable
member: StartingValue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IHoleTable.HoleTag
keywords:
  - hole
  - tables
  - see
  - also
  - iholetable
  - tags
  - startingvalue
  - table
  - starting
  - value
  - string
readonly: null
---

# IHoleTable.StartingValue

Gets or sets the starting value for the datum tags of this hole table.

## Signature

```csharp
System.String StartingValue {get; set;}
```
## Parameters

None.

## Return Value

A letter from A to Z, if the template of this hole table uses letter tags; a positive integer, if it uses number tags (see Remarks )

## Remarks

See
IView::InsertHoleTable2
for more information about hole table templates.

## See Also

- `IHoleTable.HoleTag`