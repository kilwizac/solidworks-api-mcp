---
type: property
interface: IHoleTable
member: EnableUpdate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IHoleTable.HoleTag
  - IHoleTable.HoleTagsVisible
  - IHoleTable.TagStyle
keywords:
  - hole
  - tables
  - see
  - also
  - iholetable
  - tags
  - enableupdate
  - table
  - enable
  - update
  - boolean
  - change
  - vb
  - net
  - vba
readonly: null
---

# IHoleTable.EnableUpdate

Gets or sets whether to update hole table and graphics after changing hole tags.

## Signature

```csharp
System.Boolean EnableUpdate {get; set;}
```
## Parameters

None.

## Return Value

True updates the hole table and model view, false does not

## Remarks

If you plan on changing many hole tags, then consider setting this property to false to avoid a possible degradation in performance. After changing all of the hole tags, set this property to true to update the hole table and model view.

## Examples

- Change Tags in Hole Table (VB.NET) (Change_Tags_in_Hole_Table_Example_VBNET.htm)
- Change Tags in Hole Table (VBA) (Change_Tags_in_Hole_Table_Example_VB.htm)

## See Also

- `IHoleTable.HoleTag`
- `IHoleTable.HoleTagsVisible`
- `IHoleTable.TagStyle`