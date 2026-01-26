---
type: property
interface: IAutoBalloonOptions
member: InsertMagneticLine
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - insertmagneticline
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - insert
  - magnetic
  - line
  - boolean
readonly: null
---

# IAutoBalloonOptions.InsertMagneticLine

Gets and sets whether to insert magnetic lines with balloons.

## Signature

```csharp
System.Boolean InsertMagneticLine {get; set;}
```
## Parameters

None.

## Return Value

True to insert magnetic lines, false to not; only valid when IAutoBalloonOptons::Layout is not set to swBalloonLayoutType_e }}end!kadov .swDetailingBalloonLayout_Circle

## Remarks

See the SOLIDWORKS Help for additional details about
autoballoons
.

## Examples

- IAutoBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAutoBalloonOptions)