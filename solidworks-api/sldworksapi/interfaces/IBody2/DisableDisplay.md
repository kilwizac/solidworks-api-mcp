---
type: property
interface: IBody2
member: DisableDisplay
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.HideBody
  - IFeatureManager.ShowBodies
  - IModelDoc2.HideShowBodies
  - IModelDoc2.HideSolidBody
keywords:
  - bodies
  - see
  - also
  - ibody2
  - hide
  - show
  - disabledisplay
  - body2
  - disable
  - display
  - boolean
readonly: null
---

# IBody2.DisableDisplay

Gets or sets whether to hide or show this body.

## Signature

```csharp
System.Boolean DisableDisplay {get; set;}
```
## Parameters

None.

## Return Value

True to hide the body; false to show the body NOTE: If true, then the body is hidden but remains selectable.

## See Also

- `IBody2.HideBody`
- `IFeatureManager.ShowBodies`
- `IModelDoc2.HideShowBodies`
- `IModelDoc2.HideSolidBody`