---
type: property
interface: IPropertyManagerPageListbox
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
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - int16
readonly: null
---

# IPropertyManagerPageListbox.Height

Gets and sets the height of the attached drop-down list for this list box.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Height (see Remarks )

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
Value
Result
0
Default height with no scrolling
1 < 30
Specified height and no scrolling
>30
Specified height and scrolling, but no auto sizing
The height is in dialog-box units. You can convert these values to screen units (pixels) by using the Windows MapDialogRect function.

## Examples

- IPropertyManagerPageListbox (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageListbox)