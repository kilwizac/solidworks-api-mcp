---
type: property
interface: IPropertyManagerPageCombobox
member: Height
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - height
  - ipropertymanagerpagecombobox
  - manager
  - page
  - combobox
  - int16
readonly: null
---

# IPropertyManagerPageCombobox.Height

Gets and sets the maximum height of the attached drop-down combo box.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Maximum drop-down height

## Remarks

Only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
The height is in dialog-box units. You can convert these values to screen units (pixels) by using the MapDialogRect function.

## Examples

- IPropertyManagerPageCombobox (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageCombobox)