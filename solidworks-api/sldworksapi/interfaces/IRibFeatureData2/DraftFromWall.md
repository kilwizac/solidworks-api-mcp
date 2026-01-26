---
type: property
interface: IRibFeatureData2
member: DraftFromWall
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - ribs
  - see
  - also
  - iribfeaturedata2
  - drafts
  - draftfromwall
  - rib
  - feature
  - data2
  - draft
  - wall
  - boolean
readonly: null
---

# IRibFeatureData2.DraftFromWall

Gets or sets whether to draft the rib from the wall interface or the sketch plane.

## Signature

```csharp
System.Boolean DraftFromWall {get; set;}
```
## Parameters

None.

## Return Value

True to draft from the sketch plane, false to draft from the wall interface

## Remarks

This property is valid only when
IRibFeatureData2::EnableDraft
is set to true.