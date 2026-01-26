---
type: method
interface: IModelView
member: IGetStereoSeparation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - igetstereoseparation
  - imodelview
  - model
  - view
  - stereo
  - separation
  - double
---

# IModelView.IGetStereoSeparation

Obsolete and not superseded. Functionality no longer implemented.

## Signature

```csharp
System.Double IGetStereoSeparation()
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