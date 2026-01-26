---
type: property
interface: IPropertyManagerPageActiveX
member: Height
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - height
  - ipropertymanagerpageactivex
  - manager
  - page
  - active
  - int16
readonly: null
---

# IPropertyManagerPageActiveX.Height

Gets or sets the height of this ActiveX control.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Height of the control

## Remarks

This property only applies to some ActiveX controls. If the height does not apply to an ActiveX control, then this property does not affect the API PropertyManager page.
The height is in dialog-box units. You can convert these values to screen units (pixels) by using the MapDialogRect function.