---
type: method
interface: IModelView
member: GetStereoSeparation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getstereoseparation
  - imodelview
  - model
  - view
  - stereo
  - separation
  - object
---

# IModelView.GetStereoSeparation

Obsolete and not superseded. Functionality no longer implemented.

## Signature

```csharp
System.Object GetStereoSeparation()
```
## Parameters

None.

## Return Value

Array of 2 doubles representing the stereo magnitude and stereo parallax balance settings

## Remarks

This method checks the two stereoscopic display values which can be set by using
IModelView::SetStereoSeparation
or
IModelView::ISetStereoSeparation
.