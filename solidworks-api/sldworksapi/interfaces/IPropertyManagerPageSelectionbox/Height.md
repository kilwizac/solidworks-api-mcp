---
type: property
interface: IPropertyManagerPageSelectionbox
member: Height
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - height
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - int16
  - ipropertymanagerpage2
readonly: null
---

# IPropertyManagerPageSelectionbox.Height

Gets or sets the height of this selection box.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Selection box height

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
The height is in dialog-box units. You can convert these values to screen units (pixels) by using the MapDialogRect function.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)