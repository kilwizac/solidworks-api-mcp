---
type: property
interface: IBalloonOptions
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
  - iballoonoptions
  - balloon
  - options
  - upper
  - text
  - string
readonly: null
---

# IBalloonOptions.UpperText

Gets and sets the upper text of the balloon.

## Signature

```csharp
System.String UpperText {get; set;}
```
## Parameters

None.

## Return Value

Upper text of the balloon (see Remarks )

## Remarks

You can only get or set the upper text in a BOM balloon using
INote::GetBomBalloonText
or
INote::SetBomBalloonText
after
inserting a BOM balloon
.
See the SOLIDWORKS Help for additional details about balloons.