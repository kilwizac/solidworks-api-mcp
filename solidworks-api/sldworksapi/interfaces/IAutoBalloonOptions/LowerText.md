---
type: property
interface: IAutoBalloonOptions
member: LowerText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - lowertext
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - lower
  - text
  - string
readonly: null
---

# IAutoBalloonOptions.LowerText

Gets and sets the lower text of the balloons.

## Signature

```csharp
System.String LowerText {get; set;}
```
## Parameters

None.

## Return Value

Lower text of the balloons (see Remarks )

## Remarks

This property is valid only when
IAutoBalloonOptions::Style
is set to
swBalloonStyle_e
.swBS_SplitCirc.
You can only get or set the lower text in a BOM balloon using
INote::GetBomBalloonText
or
INote::SetBomBalloonText
after
inserting a BOM balloon
.
See the SOLIDWORKS Help for additional details about autoballoons.