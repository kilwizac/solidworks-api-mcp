---
type: property
interface: IStackedBalloonOptions
member: CustomSize
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - customsize
  - istackedballoonoptions
  - stacked
  - balloon
  - options
  - custom
  - size
  - double
readonly: null
---

# IStackedBalloonOptions.CustomSize

Gets and sets the user-defined size of the balloons.

## Signature

```csharp
System.Double CustomSize {get; set;}
```
## Parameters

None.

## Return Value

User-defined size of the balloons; valid only when IStackedBalloonOptions::Size is set to swBalloonFit_e .swBF_UserDef

## Remarks

See the SOLIDWORKS Help for additional details about stacked balloons.

## Examples

- IStackedBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStackedBalloonOptions)