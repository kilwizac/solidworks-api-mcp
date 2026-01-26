---
type: property
interface: IAutoBalloonOptions
member: UpperText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - uppertext
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - upper
  - text
  - string
readonly: null
---

# IAutoBalloonOptions.UpperText

Gets and sets the upper text of the balloons.

## Signature

```csharp
System.String UpperText {get; set;}
```
## Parameters

None.

## Return Value

Upper text of the balloons

## Remarks

You can only get or set the upper text in a BOM autoballoon using
INote::GetBomBalloonText
or
INote::SetBomBalloonText
after
inserting a BOM balloon
.
See the SOLIDWORKS Help for additional details about autoballoons.