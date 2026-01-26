---
type: property
interface: IPropertyManagerPageControl
member: OptionsForResize
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - optionsforresize
  - ipropertymanagerpagecontrol
  - manager
  - page
  - control
  - options
  - resize
  - int32
readonly: null
---

# IPropertyManagerPageControl.OptionsForResize

Gets or sets how to override the SOLIDWORKS default behavior when changing the width of a PropertyManager page.

## Signature

```csharp
System.Int32 OptionsForResize {get; set;}
```
## Parameters

None.

## Return Value

Resize the PropertyManager page as defined in swPropMgrPageControlOnResizeOptions_e (see Remarks )

## Remarks

If...
Then...
swControlOptionsOnResize_LockLeft specified
the control is locked in place relative to the left edge of the PropertyManager page. When the page width is changed, the control stays in place and its width does not change.
swControlOptionsOnResize_LockRight specified
the control is locked in place relative to the right edge of the PropertyManager page. When the page width is changed, the control shifts to the right, but its width does not change.
swControlOptionsOnResize_LockLeft and swControlOptionsOnResize_LockRight specified
the left edge of the control stays in place relative to the left edge and the right edge of the control stays in place relative to the right edge of the PropertyManager page, giving the effect that the control grows and shrinks with the PropertyManager page.