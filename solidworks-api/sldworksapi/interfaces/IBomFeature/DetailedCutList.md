---
type: property
interface: IBomFeature
member: DetailedCutList
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.DissolvePartLevelRows
keywords:
  - bill
  - materials
  - cut
  - lists
  - detailedcutlist
  - ibomfeature
  - bom
  - feature
  - detailed
  - list
  - boolean
readonly: null
---

# IBomFeature.DetailedCutList

Gets or sets whether to show the detailed cut list in this BOM table.

## Signature

```csharp
System.Boolean DetailedCutList {get; set;}
```
## Parameters

None.

## Return Value

True to show the detailed cut list in the BOM table, false to not

## Remarks

This property applies to all types of BOM tables.

## See Also

- `IBomFeature.DissolvePartLevelRows`