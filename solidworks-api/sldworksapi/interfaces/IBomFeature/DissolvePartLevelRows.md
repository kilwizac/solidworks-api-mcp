---
type: property
interface: IBomFeature
member: DissolvePartLevelRows
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
  - parts
related: []
keywords:
  - bill
  - materials
  - cut
  - lists
  - dissolvepartlevelrows
  - ibomfeature
  - bom
  - feature
  - dissolve
  - part
  - level
  - rows
  - boolean
readonly: null
---

# IBomFeature.DissolvePartLevelRows

Gets or sets whether to dissolve weldment part level rows.

## Signature

```csharp
System.Boolean DissolvePartLevelRows {get; set;}
```
## Parameters

None.

## Return Value

True to dissolve component rows, false to not

## Remarks

This getter of this property is valid only when
IBomFeature::DetailedCutList
is set to true.
The setter of this property is valid only for:
BOM tables of type
swBomType_e
.swBomType_Indented (call
IBomFeature::TableType
to get the BOM table type)
- and -
when IBomFeature::DetailedCutList is set to true.