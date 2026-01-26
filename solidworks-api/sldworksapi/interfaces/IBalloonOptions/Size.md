---
type: property
interface: IBalloonOptions
member: Size
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - size
  - iballoonoptions
  - balloon
  - options
  - int32
readonly: null
---

# IBalloonOptions.Size

Gets and sets the size of the balloon.

## Signature

```csharp
System.Int32 Size {get; set;}
```
## Parameters

None.

## Return Value

Balloon size as defined in swBalloonFit_e ; specify -1 to use the document default balloon size (see Remarks )

## Remarks

To get or set document default values for Size...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
((swUserPreferenceIntegerValue_e.swDetailingBOMBalloonFit, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMBalloonFit, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonFit_e.<
Value
>)
See the SOLIDWORKS Help for additional details about balloons.

## Examples

- IBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBalloonOptions)